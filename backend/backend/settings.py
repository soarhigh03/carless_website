import os
from pathlib import Path
from dotenv import load_dotenv
import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent
dotenv_path = BASE_DIR / ".env"

ALLOWED_HOSTS = [] 


if dotenv_path.exists():
    load_dotenv(dotenv_path=dotenv_path, override=True)
    print("✅ .env loaded from:", dotenv_path)
else:
    print("❌ .env not found. Make sure to create a .env file in the root directory.")
# DEBUG 모드 설정

DEBUG = os.getenv("DEBUG", "False") == "True"

# SECRET_KEY 설정
SECRET_KEY = os.getenv("SECRET_KEY", "unsafe-key")


# ALLOWED_HOSTS 설정
if DEBUG:
    ALLOWED_HOSTS = ["localhost", "127.0.0.1","clcr.co.kr", "www.clcr.co.kr"]
else:
    ALLOWED_HOSTS = [h.strip() for h in os.getenv("ALLOWED_HOSTS", "").split(",") if h.strip()]

#ALLOWED_HOSTS = ["localhost", "127.0.0.1", "clcr.co.kr", "www.clcr.co.kr"]

print(f"📂 BASE_DIR: {BASE_DIR}")
print(f"🔍 dotenv_path: {dotenv_path}  (exists: {dotenv_path.exists()})")

# ─────────────────────────────────────────────────────────────────────────────
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # 서드파티 앱
    "rest_framework",
    "corsheaders",

    # 로컬 앱
    "core",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",               # CORS 처리
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",          # Static 파일 서빙
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],             # 필요시 템플릿 디렉토리 추가
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"

# ─────────────────────────────────────────────────────────────────────────────
# 데이터베이스 설정 (PostgreSQL via dj_database_url or 개별 환경변수)
DATABASES = {}
if os.getenv("DATABASE_URL"):
    DATABASES["default"] = dj_database_url.config(conn_max_age=600, ssl_require=True)
else:
    DATABASES["default"] = {
        "ENGINE":   "django.db.backends.postgresql",
        "NAME":     os.getenv("DB_NAME"),
        "USER":     os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
        "HOST":     os.getenv("DB_HOST"),
        "PORT":     os.getenv("DB_PORT"),
    }

# ─────────────────────────────────────────────────────────────────────────────
# 비밀번호 검증
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# ─────────────────────────────────────────────────────────────────────────────
# 국제화 설정
LANGUAGE_CODE = "ko-kr"
TIME_ZONE = "Asia/Seoul"
USE_I18N = True
USE_TZ = True

# ─────────────────────────────────────────────────────────────────────────────
# 정적 파일 설정 (WhiteNoise 사용)
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# ─────────────────────────────────────────────────────────────────────────────
# CORS 설정
if DEBUG:
    CORS_ALLOWED_ORIGINS = [
        "http://localhost:5173",
    ]
else:
    raw = os.getenv("CORS_ALLOWED_ORIGINS", "")
    CORS_ALLOWED_ORIGINS = [origin.strip() for origin in raw.split(",") if origin.strip()]
    # HTTP 도메인도 함께 허용
    CORS_ALLOWED_ORIGINS += [
        "http://clcr.co.kr",
        "http://www.clcr.co.kr",
    ]

# 자격증명(Cookie) 전송을 허용하려면 True
CORS_ALLOW_CREDENTIALS = True

# ─────────────────────────────────────────────────────────────────────────────
# 이메일 설정 (예: 문의 폼)
EMAIL_BACKEND     = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST        = "smtp.gmail.com"
EMAIL_PORT        = 587
EMAIL_USE_TLS     = True
EMAIL_HOST_USER   = os.getenv("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL  = EMAIL_HOST_USER
