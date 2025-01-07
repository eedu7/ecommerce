from fastapi import FastAPI

from api import router


def init_routers(app_: FastAPI) -> None:
    app_.include_router(router)


def create_app() -> FastAPI:
    app_ = FastAPI(
        title="E-Commerce User-Service",
        description="Backend for the user service i.e Login, Register etc",
        version="1.0.1",
    )
    init_routers(app_)
    return app_


app = create_app()
