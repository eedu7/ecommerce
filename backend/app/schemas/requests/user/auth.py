from pydantic import BaseModel, EmailStr, Field


class AuthBaseModel(BaseModel):
    email: EmailStr = Field(..., examples=["john.doe@example.com"])
    password: str = Field(..., min_length=8, max_length=16, examples=["p(KN6I`oZ[T"])


class RegisterUserRequest(AuthBaseModel):
    username: str = Field(..., min_length=3, max_length=32, examples=["John"])


class LoginUserRequest(AuthBaseModel):
    pass
