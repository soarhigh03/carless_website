from django.db import models
from .supabase_upload import upload_to_supabase

class Section(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True, null=True)
    body = models.TextField(blank=True, null=True)
    image_url = models.URLField(help_text="Supabase Storage에 업로드된 이미지 URL")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Testimonial(models.Model):
    stars = models.IntegerField(default=5)
    car_name = models.CharField(max_length=255)
    content = models.TextField()
    car_image_url = models.URLField(blank=True, null=True)

    # ✅ 업로드용 필드 추가
    photo_file = models.FileField(upload_to='temp/', blank=True, null=True)

    # ✅ Supabase URL 저장용
    photo = models.URLField(blank=True, null=True)

    price = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.car_name

    def save(self, *args, **kwargs):
        if self.photo_file:
            # pk가 아직 없을 수 있으므로 먼저 저장 (create 시)
            if not self.pk:
                super().save(*args, **kwargs)

            filename = f"review{self.pk}"
            self.photo = upload_to_supabase(self.photo_file, filename)

            # 캐시 무효화를 위한 updated_at 강제 갱신
            from django.utils.timezone import now
            self.updated_at = now()

        super().save(*args, **kwargs)



class Inquiry(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_sent_email = models.BooleanField(default=False)

    def __str__(self):
        return f"[{self.name}] {self.phone}"

class Benefit(models.Model):
    image_url = models.URLField()
    text = models.TextField()
    order = models.PositiveIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return f"{self.order}. {self.text[:20]}"
    

REPLACEABLE_IMAGE_CHOICES = [
    ("sec6_1", "행사 이미지1"),
    ("sec6_2", "행사 이미지2"),
    ("sec6_3", "행사 이미지3"),
    ("review1", "리뷰1 메인 사진"),
    ("review2", "리뷰2 메인 사진"),
    ("review3", "리뷰3 메인 사진"),
    ("reviewcar1", "리뷰1 차량 사진"),
    ("reviewcar2", "리뷰2 차량 사진"),
    ("reviewcar3", "리뷰3 차량 사진"),
]

class ImageSlot(models.Model):
    name = models.CharField(
        max_length=50,
        choices=REPLACEABLE_IMAGE_CHOICES,
        unique=True,
        help_text="교체할 이미지 이름 (확장자 제외)",
        verbose_name="이미지 종류"
    )
    file = models.FileField(upload_to='temp/')
    url = models.URLField(blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "이미지 교체"
        verbose_name_plural = "이미지 교체"

    def save(self, *args, **kwargs):
        if self.file:
            self.url = upload_to_supabase(self.file, self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name