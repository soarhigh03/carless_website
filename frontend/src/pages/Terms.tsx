import React, { useEffect, useState } from 'react';

export default function Terms() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/terms.txt')
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('개인정보처리방침을 불러오는 데 실패했습니다.'));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-sm leading-relaxed whitespace-pre-line">
      <h1 className="text-2xl font-bold mb-6">카리스카렌트 이용약관</h1>
      <p>{content}</p>
    </div>
  );
}
