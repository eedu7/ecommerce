from fastapi import APIRouter

from . import user

user_router = APIRouter()

user_router.include_router(user.router, tags=["User"])