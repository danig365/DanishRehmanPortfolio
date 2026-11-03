import { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  src: string;
  poster: string;
  // Static image used on small screens / reduced motion (defaults to poster)
  fallback?: string;
  className?: string;
  // Above-the-fold video: load immediately instead of waiting to scroll near it
  priority?: boolean;
}

const staticQuery = '(max-width: 768px), (prefers-reduced-motion: reduce)';

// Plays a looping muted video on desktop; shows a lightweight image on phones
// and for users who prefer reduced motion, saving several MB of data.
export default function BackgroundVideo({ src, poster, fallback, className = '', priority = false }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useStatic, setUseStatic] = useState(() => window.matchMedia(staticQuery).matches);
  const [inView, setInView] = useState(priority);

  useEffect(() => {
    const mql = window.matchMedia(staticQuery);
    const onChange = () => setUseStatic(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (useStatic || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [useStatic]);

  if (useStatic) {
    return (
      <img
        src={fallback || poster}
        alt=""
        aria-hidden="true"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={inView ? src : undefined}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload={priority ? 'auto' : 'none'}
      aria-hidden="true"
      className={className}
    />
  );
}
