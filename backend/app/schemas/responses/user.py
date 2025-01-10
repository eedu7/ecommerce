from pydantic import BaseModel, EmailStr


class UserResponseData(BaseModel):
    uuid: str
    email: EmailStr
    username: str
    profile_image_url: str
    phone_number: str
    is_active: bool
    is_admin: bool
