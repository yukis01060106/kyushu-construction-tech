'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * 読み込み完了後にゆっくり縮小する（ズームアウトする）写真。
 * mock の .hero-photo / .page-hero-media img と同じ挙動。
 */
export function ZoomPhoto({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  /** ヒーロー画像など、初期表示に必要な画像は遅延読み込みしない */
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // キャッシュ済みで onLoad が発火しないケースに備える
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      onLoad={() => setLoaded(true)}
      className={cn('photo-zoom h-full w-full object-cover', loaded && 'is-loaded', className)}
    />
  );
}
