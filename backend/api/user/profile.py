from fastapi import APIRouter
from fastapi.params import Depends
from fastapi.responses import JSONResponse

from app.models import User
from core.fastapi.dependencies import AuthenticationRequired, get_current_user

router = APIRouter()


# 4. Get User Profile Endpoint
# Steps:
# - Authenticate the request to ensure the user is logged in.
# - Retrieve the user's profile details from the database.
# - Return the user's profile data or an error if the user is not found.
@router.get("/", dependencies=[Depends(AuthenticationRequired)])
async def get_user_profile(
    current_user: User = Depends(get_current_user),
) -> JSONResponse:
    return JSONResponse(
        {"username": current_user.username, "email": current_user.email}
    )


# 5. Update User Profile Endpoint
# Steps:
# - Authenticate the user.
# - Validate the input data (e.g., new username, email, password).
# - Update the user's profile in the database.
# - Return the updated profile or an error message if the update fails.
@router.put("/update")
async def update_user_profile() -> JSONResponse:
    return JSONResponse({"message": "User Profile Update"})
