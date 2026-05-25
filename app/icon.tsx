import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Favicon generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F1EA', // Brand Sand - stands out in both dark and light browser tabs
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #C8A25D', // Brand Gold maritime framing
          borderRadius: '5px',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6D0F14" // Solid Burgundy for precise, unshakeable design contrast
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
          <circle cx="12" cy="5" r="2.5" fill="#6D0F14" />
          <path d="M12 19c-4.5 0-7-3.5-7-7" />
          <path d="M12 19c4.5 0 7-3.5 7-7" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

