from rest_framework import serializers
from .models import Section, Testimonial

class SectionSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image_url')

    class Meta:
        model = Section
        fields = ['id', 'slug', 'title', 'subtitle', 'body', 'image', 'updated_at']


class TestimonialSerializer(serializers.ModelSerializer):
    summary = serializers.CharField(source='content')

    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'summary', 'photo', 'rating']
