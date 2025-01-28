from fastapi import APIRouter

from . import auth, profile, reset_password, user

user_router = APIRouter()
user_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
user_router.include_router(profile.router, prefix="/profile", tags=["Profile"])
user_router.include_router(
    reset_password.router, prefix="/reset", tags=["Password Reset"]
)
user_router.include_router(user.router, prefix="/user", tags=["Users"])
