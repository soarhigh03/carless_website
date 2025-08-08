from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from core.views import healthcheck   # ✅ 추가

urlpatterns = [
    path('healthcheck/', healthcheck),    # ✅ 루트 핑 추가
    path('api/', include('core.urls')),
    path('admin/', admin.site.urls),
    re_path(r"^(?!admin|api|static).*", TemplateView.as_view(template_name="index.html")),
]