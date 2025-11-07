
import React from 'react';

const SpinnerMarker: React.FC = () => {
  return (
    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10" style={{ filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.5))' }}>
      <svg width="40" height="56" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="marker-gold-grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E6" />
            <stop offset="50%" stopColor="#FFD95A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <path d="M20 56L40 20L20 0L0 20L20 56Z" fill="#111" />
        <path d="M20 52L36 20L20 4L4 20L20 52Z" fill="url(#marker-gold-grad)" />
      </svg>
    </div>
  );
};

export default SpinnerMarker;