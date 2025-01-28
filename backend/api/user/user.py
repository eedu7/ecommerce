from typing import List

from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from app.controllers import AuthController
from app.schemas.responses import UserResponseData
from core.factory import Factory

router: APIRouter = APIRouter()


@router.get("/", response_model=List[UserResponseData])
async def get_all_users(
    auth_controller: AuthController = Depends(Factory().get_auth_controller),
):
    try:
        users = await auth_controller.get_all()
        return users
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": str(e)})
