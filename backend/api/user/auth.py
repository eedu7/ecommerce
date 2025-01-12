from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse

from app.controllers import AuthController
from app.schemas.extras import Token
from app.schemas.requests.user import LoginUserRequest, RegisterUserRequest
from core.factory import Factory

router: APIRouter = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED, response_model=Token)
async def register_user(
    user_data: RegisterUserRequest,
    auth_controller: AuthController = Depends(Factory().get_auth_controller),
) -> Token:
    data = user_data.model_dump()
    await auth_controller.register(**data)
    return await auth_controller.login(data["email"], data["password"])


@router.post("/login", status_code=status.HTTP_200_OK, response_model=Token)
async def login_user(
    user_data: LoginUserRequest,
    auth_controller: AuthController = Depends(Factory().get_auth_controller),
) -> Token:
    return await auth_controller.login(**user_data.model_dump())


@router.post("/logout")
async def logout_user() -> JSONResponse:
    return JSONResponse({"message": "User Logged Out"})
