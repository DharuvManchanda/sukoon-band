'use client';

import Image from 'next/image';

/**
 * Optimized image built on next/image.
 * Defaults to `fill` mode, which matches the `.ph` containers across the site
 * (positioned parent + `object-fit:cover`). Pass `fill={false}` together with
 * `width`/`height` for intrinsically-sized images.
 *
 * Keeps the original graceful fallback: on load error the image is hidden and
 * the parent `.ph` reveals its warm-gradient label.
 */
export default function PhotoImg({ fill = true, sizes = '100vw', ...props }) {
  const onError = (e) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentElement?.classList.add('show-label');
  };

  if (fill) {
    return <Image fill sizes={sizes} onError={onError} {...props} />;
  }
  return <Image sizes={sizes} onError={onError} {...props} />;
}
