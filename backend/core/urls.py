from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SectionViewSet, TestimonialViewSet, BenefitViewSet, InquiryCreateView, ImageSlotViewSet

router = DefaultRouter()
router.register(r'sections', SectionViewSet)
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'benefits', BenefitViewSet)
router.register(r'imageslots', ImageSlotViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
]