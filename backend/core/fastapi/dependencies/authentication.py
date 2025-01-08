from fastapi import Depends, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from core.exceptions.base import CustomException
from core.security import JWTHandler
from core.security.jwt import JWTDecodeError, JWTExpiredError


class AuthenticationRequiredException(CustomException):
    code = status.HTTP_401_UNAUTHORIZED
    error_code = status.HTTP_401_UNAUTHORIZED
    message = "Authentication required"


class AuthenticationRequired:
    def __init__(
        self,
        token: HTTPAuthorizationCredentials = Depends(HTTPBearer(auto_error=False)),
    ):
        if not token:
            raise AuthenticationRequiredException()

        try:
            JWTHandler.decode(token.credentials)
        except JWTExpiredError:
            raise AuthenticationRequiredException(
                message="Token expired, please sign in again."
            )
        except JWTDecodeError:
            raise AuthenticationRequiredException(
                message="Invalid token, please sign in again."
            )