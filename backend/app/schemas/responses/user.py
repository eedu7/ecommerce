from pydantic import UUID4, BaseModel, EmailStr, Field


class UserResponseData(BaseModel):
    uuid: UUID4 = Field(alias="uuid")
    email: EmailStr = Field(alias="email")
    username: str = Field(alias="username")
    profile_image_url: str | None = Field(None, alias="profileImageUrl")
    phone_number: str | None = Field(None, alias="phoneNumber")
    is_active: bool = Field(True, alias="isActive", examples=[True, False])
    is_admin: bool = Field(False, alias="isAdmin", examples=[True, False])
