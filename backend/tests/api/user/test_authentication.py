import pytest
from httpx import AsyncClient

from tests.factory.user import create_fake_user
from tests.utils.login import _create_user_and_login


@pytest.mark.asyncio
async def test_create_user(client: AsyncClient) -> None:
    """Test user creation"""
    fake_user = create_fake_user()
    response = await client.post("/auth/register", json=fake_user)
    assert response.status_code == 200
    # assert response.json()["email"] == fake_user["email"]
    # assert response.json()["password"] == fake_user["password"]
