from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),       # Django 관리자 페이지
    path('', include('core.urls')),        # core.urls 연결 (API + healthcheck 포함)
]
