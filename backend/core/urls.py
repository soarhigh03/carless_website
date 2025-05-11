from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SectionViewSet, TestimonialViewSet

router = DefaultRouter()
router.register(r'sections', SectionViewSet)
router.register('testimonials', TestimonialViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
