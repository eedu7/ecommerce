from fastapi import Depends, Request

from app.controllers.user import AuthController
from core.factory import Factory


async def get_current_user(
    request: Request,
    auth_controller: AuthController = Depends(Factory().get_auth_controller),
):
    return await auth_controller.get_by_id(request.user.id)
