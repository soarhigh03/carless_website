# Generated by Django 5.2.1 on 2025-05-11 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_imageslot_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='testimonial',
            name='photo_file',
            field=models.FileField(blank=True, null=True, upload_to='temp/'),
        ),
    ]
