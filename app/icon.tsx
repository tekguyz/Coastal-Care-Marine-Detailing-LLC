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
          fontSize: '20px',
          background: '#6D0F14', // Brand Burgundy
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C8A25D', // Brand Gold
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        ⚓
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
