'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div style={{ width: '100%' }}>
        <Image
          src="/assets/stripe-line.svg"
          alt="Stripe Line"
          width={2000}
          height={100}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ backgroundColor: '#071540', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '1.5rem' }}>
          Made with &lt;3 by{' '}
          <a href="https://estellagu.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
            Estella Gu
          </a>
        </p>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '1.5rem' }}>
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
            Hack Club
          </a>
        </p>
      </div>
    </footer>
  );
}
