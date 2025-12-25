'use client';

import Image from 'next/image';

export default function Header() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image
              src="/assets/title.svg"
              alt="Jumpstart v3"
              width={1200}
              height={300}
              style={{ width: '100%', maxWidth: '1200px', height: 'auto' }}
            />
            <div style={{ textAlign: 'center', width: '100%', marginTop: '-4rem' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0', lineHeight: '1' }}>BUILD GAMES, EARN PRIZES</p>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0', lineHeight: '1', marginTop: '-0.5rem' }}>Jan 1 - Feb 1</p>
              <div 
                style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '3rem', cursor: 'pointer' }}
                onClick={handleScrollDown}
              >
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

