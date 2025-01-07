from pathlib import Path

from pydantic_settings import BaseSettings


class BaseConfig(BaseSettings):
    class Config:
        case_sensitive = True
        env_file = Path(__file__).resolve().parent.parent / ".env"
        env_file_encoding = "utf-8"


class Config(BaseConfig):
    POSTGRES_URL: str
    TEST_POSTGRES_URL: str
    JWT_SECRET_KEY: str
    JWT_ALGORITHM: str
    JWT_EXPIRATION: int = 60 * 60 * 7


config: Config = Config()

print(config.POSTGRES_URL)
print(config.TEST_POSTGRES_URL)
print(config.JWT_SECRET_KEY)
print(config.JWT_ALGORITHM)
print(config.JWT_EXPIRATION)
