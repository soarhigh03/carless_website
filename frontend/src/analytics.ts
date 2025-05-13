// analytics.ts

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const initGA = (): void => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]): void {
    console.log("📦 gtag called:", args);  // ← 이 로그가 찍혀야 함
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-9BK1M21SHY');
};


export const loadGtag = (): void => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9BK1M21SHY';
  document.head.appendChild(script);

  script.onload = initGA;
};
