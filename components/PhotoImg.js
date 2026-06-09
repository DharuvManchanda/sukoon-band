'use client';

export default function PhotoImg(props) {
  return (
    <img
      {...props}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement?.classList.add('show-label');
      }}
    />
  );
}
