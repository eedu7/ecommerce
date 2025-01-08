from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse

from app.controllers import AuthController
from app.schemas.requests.user import LoginUserRequest, RegisterUserRequest
from core.factory import Factory

router = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_user(
    user_data: RegisterUserRequest,
    auth_controller: AuthController = Depends(Factory().get_auth_controller),
):
    return await auth_controller.register(**user_data.model_dump())


@router.post("/login")
async def login_user(
    user_data: LoginUserRequest,
    auth_controller: AuthController = Depends(Factory().get_auth_controller),
):
    return await auth_controller.login(**user_data.model_dump())


# 3. User Logout Endpoint
# Steps:
# - Invalidate the user's session or token.
# - Optionally implement server-side session management.
# - Return a success message indicating the user has been logged out.
@router.post("/logout")
async def logout_user() -> JSONResponse:
    return JSONResponse({"message": "User Logged Out"})
