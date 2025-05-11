from django.db import models

class Section(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True, null=True)
    body = models.TextField(blank=True, null=True)
    image_url = models.URLField()
    updated_at = models.DateTimeField(auto_now=True)

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    rating = models.IntegerField(default=5)
    photo = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Inquiry(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_sent_kakao = models.BooleanField(default=False)
