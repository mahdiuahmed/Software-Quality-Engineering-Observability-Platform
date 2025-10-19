from fastapi import FastAPI
from .database import engine
from app import models
from .routers import products
from .instrumentation import setup_metrics
from .seed import seed_data
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="Product API with Monitoring")

# Get frontend URL from environment with fallback
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:3000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://frontend:3000",  # frontend container name (internal)
        "http://localhost:3000",  # local development
        frontend_url  # from environment variable
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables on startup
models.Base.metadata.create_all(bind=engine)

seed_data()

# Include routers
app.include_router(products.router)

# Setup Prometheus middleware and /metrics endpoint
setup_metrics(app)

@app.get("/")
def root():
    return {"message": "Backend running successfully!"}