'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <section style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '1rem', left: '0' }}>
        <Image
          src="/assets/hackclub.svg"
          alt="Hack Club"
          width={300}
          height={75}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '0rem', gap: '0rem', position: 'relative' }}>
          <Image
            src="/assets/header-heidi.svg"
            alt="Heidi"
            width={300}
            height={300}
            style={{ marginTop: '10rem' }}
          />
          <div style={{ position: 'relative' }}>
            <Image
              src="/assets/title.svg"
              alt="Jumpstart v3"
              width={1200}
              height={300}
            />
            <div style={{ position: 'absolute', bottom: '-6rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
              <p style={{ fontSize: '2.75rem', margin: '0', lineHeight: '1' }}>BUILD GAMES, EARN PRIZES</p>
              <p style={{ fontSize: '2.75rem', margin: '0', lineHeight: '1', marginTop: '-0.5rem' }}>Jan 1 - Feb 1</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '3rem' }}>
                <Image
                  src="/assets/triangle.svg"
                  alt="Triangle"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/header-orpheus.svg"
            alt="Orpheus"
            width={300}
            height={300}
            style={{ marginTop: '4rem' }}
          />
        </div>
      </div>
      <div style={{ width: '100%', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Image
          src="/assets/stripe-line.svg"
          alt="Stripe Line"
          width={2000}
          height={100}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
}

