from django.contrib import admin
from .models import Section, Testimonial, Inquiry, Benefit, ImageSlot

admin.site.register(Section)
admin.site.register(Inquiry)
admin.site.register(Benefit)

@admin.register(ImageSlot)
class ImageSlotAdmin(admin.ModelAdmin):
    list_display = ['name', 'url']
    readonly_fields = ['url']
    search_fields = ['name']

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['id', 'car_name', 'stars', 'price']
    fields = [
        'car_name', 'stars', 'content', 'price',
        'photo_file',  # ✅ 파일 업로드 가능하게
        'photo',       # ✅ 자동 채워짐
        'car_image_url',
    ]
    readonly_fields = ['photo']  # ✅ 직접 수정 금지, 자동 반영되므로
