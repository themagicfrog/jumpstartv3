'use client';

import Image from 'next/image';

export default function Header() {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '0.5rem', left: '0' }}>
        <a 
          href="https://hackclub.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hackclub-link"
          style={{ display: 'inline-block' }}
        >
          <Image src="/assets/hackclub.svg" alt="Hack Club" width={240} height={60} style={{ display: 'block' }} />
        </a>
      </div>

      <div className="header-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0rem', position: 'relative' }}>
          <Image
            src="/assets/header-heidi.svg"
            alt="Heidi"
            width={300}
            height={300}
            className="header-character hide-mobile"
            style={{ marginTop: '10rem', marginRight: '-4rem' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="title-float header-title-container" style={{ display: 'inline-block' }}>
              <Image
                src="/assets/title.svg"
                alt="Jumpstart v3"
                width={1200}
                height={300}
                style={{ width: '100%', maxWidth: '1200px', height: 'auto', cursor: 'pointer', display: 'block' }}
              />
            </div>
            <div className="header-text-container" style={{ textAlign: 'center', width: '100%', marginTop: '-4rem' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0', lineHeight: '1' }}>BUILD GAMES TOGETHER, EARN PRIZES</p>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0', lineHeight: '1', marginTop: '-0.5rem' }}>Jan 1 - Feb 1, 2026</p>
              <div className="header-triangle-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '3rem' }}>
                <Image
                  src="/assets/triangle.svg"
                  alt="Triangle"
                  width={30}
                  height={30}
                  className="triangle-bounce"
                  onClick={handleScrollDown}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/header-orpheus.svg"
            alt="Orpheus"
            width={300}
            height={300}
            className="header-character hide-mobile"
            style={{ marginTop: '4rem', marginLeft: '-4rem' }}
          />
        </div>
      </div>
      <div style={{ width: '100%', paddingTop: '2rem', paddingBottom: '1rem' }}>
        <Image src="/assets/stripe-line.svg" alt="Stripe Line" width={2000} height={100} style={{ width: '100%', height: 'auto' }} />
      </div>
    </section>
  );
}
