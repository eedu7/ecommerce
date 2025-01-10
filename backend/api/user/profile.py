from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from app.models import User
from app.schemas.responses import UserResponseData
from core.fastapi.dependencies import AuthenticationRequired, get_current_user

router = APIRouter()


@router.get(
    "/", dependencies=[Depends(AuthenticationRequired)], response_model=UserResponseData
)
async def get_current_user_profile(
    current_user: User = Depends(get_current_user),
) -> User:
    return current_user


# 5. Update User Profile Endpoint
# Steps:
# - Authenticate the user.
# - Validate the input data (e.g., new username, email, password).
# - Update the user's profile in the database.
# - Return the updated profile or an error message if the update fails.
@router.put("/update")
async def update_user_profile() -> JSONResponse:
    return JSONResponse({"message": "User Profile Update"})
