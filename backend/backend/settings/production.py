from .base import *
import dj_database_url
import os

DEBUG = False
ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "").split(",")

DATABASES = {
    "default": dj_database_url.config(conn_max_age=600, ssl_require=True)
}

CORS_ALLOWED_ORIGINS = [
    origin.strip() for origin in os.getenv("CORS_ALLOWED_ORIGINS", "").split(",") if origin.strip()
]
