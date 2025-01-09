from httpx import AsyncClient

from tests.factory.user import create_fake_user


async def _create_user_and_login(
    client: AsyncClient, fake_user=create_fake_user()
) -> None:
    response = await client.post("/auth/login", json=fake_user)
    access_token = response.json()["access_token"]

    client.headers.update({"Authorization": f"Bearer {access_token}"})
    return None


__all__ = ["_create_user_and_login"]
