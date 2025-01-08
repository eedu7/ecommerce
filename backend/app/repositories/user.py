from sqlalchemy import Select
from sqlalchemy.exc import NoResultFound
from sqlalchemy.orm import joinedload

from app.models import User
from core.exceptions import NotFoundException, BadRequestException
from core.repository import BaseRepository


class UserRepository(BaseRepository[User]):
    """
    User repository provides all the database operations for the User model.
    """

    async def get_by_email(self, email: str) -> User:
        return await self.get_by(field="email", value=email)

    async def get_by_username(self, username: str) -> User:
        return await self.get_by(field="username", value=username)
