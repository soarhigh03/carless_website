import requests
import mimetypes
import os

SUPABASE_URL = "https://tnwzxolvsvihpueixxvf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRud3p4b2x2c3ZpaHB1ZWl4eHZmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Njk0ODU5NywiZXhwIjoyMDYyNTI0NTk3fQ.XBFpbKbujX8PnqBWlozU6vvAZ_4W6TzYJIaTa8OsbHk"
SUPABASE_BUCKET = "sections"

def upload_to_supabase(file_obj, fixed_name):
    ext = os.path.splitext(file_obj.name)[1]
    filename = f"{fixed_name}{ext}"

    # 기존 확장자 파일 삭제
    for possible_ext in ['.jpg', '.jpeg', '.png', '.webp']:
        delete_name = f"{fixed_name}{possible_ext}"
        delete_url = f"{SUPABASE_URL}/storage/v1/object/{SUPABASE_BUCKET}/{delete_name}"
        requests.delete(
            delete_url,
            headers={
                "apikey": SUPABASE_KEY,
                "Authorization": f"Bearer {SUPABASE_KEY}",
            }
        )

    upload_url = f"{SUPABASE_URL}/storage/v1/object/{SUPABASE_BUCKET}/{filename}"
    content_type, _ = mimetypes.guess_type(file_obj.name)
    if not content_type:
        content_type = 'application/octet-stream'

    # ✅ 여기 추가: 스트림 포인터 되돌리기
    file_obj.file.seek(0)

    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": content_type,
    }

    res = requests.put(upload_url, headers=headers, data=file_obj.file)

    if res.status_code not in [200, 201]:
        raise Exception(f"Supabase 업로드 실패: {res.status_code}, {res.text}")

    return f"{SUPABASE_URL}/storage/v1/object/public/{SUPABASE_BUCKET}/{filename}"