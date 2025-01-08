from functools import partial

from fastapi import Depends

from app.controllers import AuthController
from app.models import User
from app.repositories import UserRepository
from core.database import get_session


class Factory:
    """
    This is the factory container that will instantiate all the controllers and
    repositories which can be accessed by the rest of the application.
    """

    # Repositories
    auth_repository = partial(UserRepository, User)

    def get_auth_controller(self, db_session=Depends(get_session)):
        return AuthController(
            user_repository=self.auth_repository(db_session=db_session)
        )
