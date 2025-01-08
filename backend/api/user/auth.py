from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse

from app.controllers import AuthController
from app.schemas.requests.user import RegisterUserRequest
from core.factory import Factory

router = APIRouter()


# 1. User Registration Endpoint
# Steps:
# - Validate the input data (e.g., username, email, password).
# - Check if the user already exists.
# - Hash the password for security.
# - Store the new user in the database.
# - Return a success message or appropriate error response.
@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_user(
    user_data: RegisterUserRequest,
    controller: AuthController = Depends(Factory().get_auth_controller),
):
    return await controller.register(**user_data.model_dump())


# 2. User Login Endpoint
# Steps:
# - Validate input credentials (email and password).
# - Fetch the user record from the database using the email.
# - Verify the password hash.
# - Generate an access token (e.g., JWT).
# - Return the token and user details or an error message if authentication fails.
@router.post("/login")
async def login_user() -> JSONResponse:
    return JSONResponse({"message": "User Logged In"})


# 3. User Logout Endpoint
# Steps:
# - Invalidate the user's session or token.
# - Optionally implement server-side session management.
# - Return a success message indicating the user has been logged out.
@router.post("/logout")
async def logout_user() -> JSONResponse:
    return JSONResponse({"message": "User Logged Out"})
