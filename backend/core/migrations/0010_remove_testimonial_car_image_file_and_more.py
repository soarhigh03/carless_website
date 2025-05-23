# Generated by Django 5.2.1 on 2025-05-11 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_remove_testimonial_car_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testimonial',
            name='car_image_file',
        ),
        migrations.RemoveField(
            model_name='testimonial',
            name='photo_file',
        ),
        migrations.AddField(
            model_name='testimonial',
            name='car_name',
            field=models.CharField(default='알 수 없음', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testimonial',
            name='content',
            field=models.TextField(default='알 수 없음'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testimonial',
            name='price',
            field=models.CharField(default='알 수 없음', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testimonial',
            name='stars',
            field=models.IntegerField(default=5),
        ),
    ]
