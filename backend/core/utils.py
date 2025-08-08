from django.core.mail import send_mail

def send_inquiry_email(name: str, phone: str, message: str):
    subject = f"[문의접수] {name}님 문의"
    body = f"""
이름: {name}
연락처: {phone}
내용: 
{message}
    """.strip()

    send_mail(
        subject,
        body,
        'haebong@gmail.com',               # 발신자
        ['haebong@gmail.com'],             # 수신자 리스트
        fail_silently=False,
    )
