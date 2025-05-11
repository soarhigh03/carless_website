from rest_framework import serializers
from .models import Section, Testimonial, Benefit, Inquiry, ImageSlot

class SectionSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image_url')

    class Meta:
        model = Section
        fields = ['id', 'slug', 'title', 'subtitle', 'body', 'image', 'updated_at']

class TestimonialSerializer(serializers.ModelSerializer):
    car = serializers.CharField(source='car_name')
    carImage = serializers.CharField(source='car_image_url')
    text = serializers.CharField(source='content')

    class Meta:
        model = Testimonial
        fields = ['id', 'photo', 'stars', 'car', 'text', 'carImage', 'price', 'updated_at']


class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = ['id', 'image_url', 'text', 'updated_at']

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'  # 모든 필드 (name, phone, message, created_at, is_sent_email)

class ImageSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageSlot
        fields = ['name', 'url', 'updated_at']