'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);
  return (
    <BookingContext.Provider value={{ open, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
}
