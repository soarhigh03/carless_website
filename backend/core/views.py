import threading
from django.db import transaction
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ReadOnlyModelViewSet
from django.http import JsonResponse

from .models import Section, Testimonial, Benefit, ImageSlot, Inquiry
from .serializers import (
    SectionSerializer,
    TestimonialSerializer,
    BenefitSerializer,
    ImageSlotSerializer,
    InquirySerializer,
)
from .utils import send_inquiry_email


class SectionViewSet(ReadOnlyModelViewSet):
    queryset = Section.objects.all().order_by('id')
    serializer_class = SectionSerializer


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class BenefitViewSet(ReadOnlyModelViewSet):
    queryset = Benefit.objects.all().order_by('order')
    serializer_class = BenefitSerializer


class InquiryCreateView(APIView):
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            inquiry = serializer.save()

            # 트랜잭션 커밋 직후에 백그라운드 스레드로 메일 발송
            transaction.on_commit(
                lambda: threading.Thread(
                    target=send_inquiry_email,
                    args=(inquiry.name, inquiry.phone, inquiry.message),
                    daemon=True
                ).start()
            )

            return Response(
                {'message': '문의가 저장되었습니다.'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageSlotViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImageSlot.objects.all()
    serializer_class = ImageSlotSerializer

def healthcheck(request):
    return JsonResponse({"status": "ok"})