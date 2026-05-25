import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Coastal Care Marine Detailing | Elite Mobile Detailing Key West';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#6D0F14', // Brand Burgundy
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 60px',
          position: 'relative',
        }}
      >
        {/* Decorative inner gold border */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            bottom: '30px',
            left: '30px',
            right: '30px',
            border: '2px solid #C8A25D', // Brand Gold
            opacity: 0.35,
          }}
        />

        {/* Big gold maritime logo anchor */}
        <div style={{ display: 'flex', marginBottom: '24px' }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C8A25D" // Solid Gold
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
            <circle cx="12" cy="5" r="2.5" fill="#C8A25D" />
            <path d="M12 19c-4.5 0-7-3.5-7-7" />
            <path d="M12 19c4.5 0 7-3.5 7-7" />
          </svg>
        </div>

        {/* Typography */}
        <div
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            textAlign: 'center',
            marginBottom: '4px',
            fontFamily: 'serif',
          }}
        >
          COASTAL CARE
        </div>

        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#C8A25D', // Brand Gold
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            textAlign: 'center',
            marginBottom: '44px',
            fontFamily: 'sans-serif',
          }}
        >
          MARINE DETAILING
        </div>

        {/* Tagline footer */}
        <div
          style={{
            display: 'flex',
            fontSize: '18px',
            color: '#FFFFFF',
            opacity: 0.85,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textAlign: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          Born & Raised Keys Native Team • 100% Mobile Dockside Service
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
