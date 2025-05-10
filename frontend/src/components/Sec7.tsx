import React from 'react';

export default function Sec7() {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="aspect-video w-full max-w-3xl">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_oBWpyFmAG0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}