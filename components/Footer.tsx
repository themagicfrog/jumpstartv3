'use client';

import Image from 'next/image';

const linkStyle = { color: 'white', textDecoration: 'underline' };

export default function Footer() {
  return (
    <footer>
      <Image src="/assets/stripe-line.svg" alt="Stripe Line" width={2000} height={100} style={{ width: '100%', height: 'auto' }} />
      <div style={{ backgroundColor: '#071540', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem' }}>
          Made with &lt;3 by Estella Gu
        </p>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem' }}>
          <a href="https://github.com/themagicfrog" target="_blank" rel="noopener noreferrer" style={linkStyle}>Follow me on Github!</a>
        </p>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem' }}>
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Hack Club</a>
        </p>
      </div>
    </footer>
  );
}
