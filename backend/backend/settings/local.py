from .base import *
from dotenv import load_dotenv
import os
import dj_database_url

load_dotenv(BASE_DIR / ".env")

DEBUG = True
ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

DATABASES = {
    "default": dj_database_url.config(conn_max_age=600, ssl_require=True)
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

load_dotenv(BASE_DIR / "backend" / ".env")
