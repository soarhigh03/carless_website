from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Section, Testimonial, Benefit, ImageSlot
from .serializers import SectionSerializer, TestimonialSerializer, BenefitSerializer, InquirySerializer, ImageSlotSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from .utils import send_inquiry_email

class SectionViewSet(ReadOnlyModelViewSet):
    queryset = Section.objects.all().order_by('id')
    serializer_class = SectionSerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class BenefitViewSet(ReadOnlyModelViewSet):
    queryset = Benefit.objects.all().order_by("order")
    serializer_class = BenefitSerializer

class InquiryCreateView(APIView):
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            inquiry = serializer.save()
            send_inquiry_email(
                name=inquiry.name,
                phone=inquiry.phone,
                message=inquiry.message
            )
            return Response({'message': '문의가 저장되었습니다.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ImageSlotViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImageSlot.objects.all()
    serializer_class = ImageSlotSerializer