import React, { useState } from 'react';
import { submitMeetup } from '../api/content';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', car_type: '', content: '' });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 처리방침에 동의하셔야 제출할 수 있습니다.");
      return;
    }
    await submitMeetup(form);
    setSent(true);
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">빠른 상담 신청</h2>
        {sent ? (
          <p className="text-center text-green-600 font-semibold">요청이 전송되었습니다!</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="이름"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="input"
              required
            />
            <input
              type="tel"
              placeholder="연락처"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="input"
              required
            />
            <input
              type="text"
              placeholder="차종 입력"
              value={form.car_type}
              onChange={e => setForm({ ...form, car_type: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="상담 내용"
              value={form.content}
              onChange={e => setForm({ ...form, content: e.target.value })}
              className="input"
            />

            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <span>
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  개인정보 처리방침
                </a>
                에 동의합니다.
              </span>
            </label>

            <button
              type="submit"
              className="bg-secondary text-white py-3 rounded-lg disabled:opacity-50"
              disabled={!agreed}
            >
              보내기
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
