from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Section, Testimonial
from .serializers import SectionSerializer, TestimonialSerializer

class SectionViewSet(ReadOnlyModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class TestimonialViewSet(ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer