import uvicorn

if __name__ == "__main__":
    uvicorn.run("core.server:app", port=8010, reload=True)
