from typing import List

from fastapi import FastAPI, Request
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from api import router
from core.exceptions import CustomException
from core.fastapi.middlewares import (AuthBackend, AuthenticationMiddleware,
                                      SQLAlchemyMiddleware)


def on_auth_error(request: Request, exc: Exception):
    status_code, error_code, message = 401, None, str(exc)
    if isinstance(exc, CustomException):
        status_code = int(exc.code)
        error_code = exc.error_code
        message = exc.message
    return JSONResponse(
        status_code=status_code, content={"error_code": error_code, "message": message}
    )


def init_routers(app_: FastAPI) -> None:
    app_.include_router(router)


def init_listeners(app_: FastAPI) -> None:
    @app_.exception_handler(Exception)
    async def custom_exception_handler(request: Request, exc: CustomException):
        return JSONResponse(
            # status_code=exc.code,
            status_code=400,
            content={"error_code": exc.error_code, "message": exc.message},
        )


def make_middleware() -> List[Middleware]:
    middleware = [
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        ),
        Middleware(
            AuthenticationMiddleware,
            backend=AuthBackend(),
            on_error=on_auth_error,
        ),
        Middleware(SQLAlchemyMiddleware),
    ]
    return middleware


def create_app() -> FastAPI:
    app_ = FastAPI(
        title="E-Commerce",
        description="Backend for E-Commerce Store",
        version="1.0.1",
        middleware=make_middleware(),
    )
    init_routers(app_)
    init_listeners(app_)
    return app_


app = create_app()
