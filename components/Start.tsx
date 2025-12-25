'use client';

import Image from 'next/image';

export default function Start() {
  return (
    <section>
      <div style={{ backgroundColor: '#142B70', height: '3rem', width: '100%' }}></div>
      <div style={{ backgroundColor: '#224CCA', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0rem' }}>
        <h2 style={{ color: 'white', fontSize: '4rem', textAlign: 'center', margin: 0, marginBottom: '-3rem' }}>JUMPSTART NOW</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Image
            src="/assets/explanation-diamond.svg"
            alt="Diamond"
            width={200}
            height={200}
          />
          <a
            href="#"
            style={{
              backgroundColor: '#EE00A7',
              color: 'white',
              padding: '0.5rem 4rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '0.1em',
              boxShadow: '-8px 8px 0 #930B6A'
            }}
          >
            START
          </a>
          <Image
            src="/assets/explanation-arcade1.svg"
            alt="Arcade"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
