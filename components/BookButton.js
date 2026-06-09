'use client';

import { useBooking } from './BookingContext';

export default function BookButton({ children, className = 'btn btn-primary', style }) {
  const { openBooking } = useBooking();
  return (
    <button className={className} style={style} onClick={openBooking}>
      {children} <span className="arr">→</span>
    </button>
  );
}
