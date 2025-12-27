'use client';

import Image from 'next/image';

const buttonStyle = {
  backgroundColor: '#EE00A7',
  color: 'white',
  padding: '0.5rem 3.5rem',
  borderRadius: '0.5rem',
  textDecoration: 'none' as const,
  fontSize: '6.5rem',
  fontWeight: 'bold' as const,
  textAlign: 'center' as const,
  letterSpacing: '0.1em',
  boxShadow: '-8px 8px 0 #930B6A'
};

export default function Start() {
  return (
    <section>
      <div className="start-section" style={{ backgroundColor: '#224CCA', padding: '2rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0rem' }}>
        <h2 className="start-title" style={{ color: 'white', fontSize: '7rem', textAlign: 'center', margin: 0, marginBottom: '0.5rem' }}>JUMPSTART NOW!</h2>
        <div className="start-button-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Image src="/assets/explanation-diamond.svg" alt="Diamond" width={200} height={200} className="header-character hide-mobile" />
          <a href="https://jams.hackclub.com/jam/godot-platformer" target="_blank" rel="noopener noreferrer" className="pink-button you-wiggle" style={buttonStyle}>START</a>
          <Image src="/assets/explanation-arcade1.svg" alt="Arcade" width={200} height={200} className="header-character hide-mobile" />
        </div>
      </div>
    </section>
  );
}
