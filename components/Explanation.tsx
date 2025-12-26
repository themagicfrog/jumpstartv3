'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
}

interface Section {
  title: string;
  steps: Step[];
}

const beginnerSection: Section = {
  title: 'NEVER MADE A GAME BEFORE?',
  steps: [
    {
      title: 'BUILD',
      description: 'Use our very easy-to-follow resources to make your own 2D platformer game.',
    },
    {
      title: 'SHIP',
      description: 'Upload your game to Itch.io and Github, then submit to the form.',
    },
    {
      title: 'EARN',
      description: 'Earn a stickersheet and a grant to buy a game to play. Enjoy!',
    },
  ],
};

const experiencedSection: Section = {
  title: 'HAVE SOME EXPERIENCE?',
  steps: [
    {
      title: 'BUILD',
      description: 'Go wild with building any game! Devlog in Slack, use Hackatime, and push to Github.',
    },
    {
      title: 'PLAY',
      description: 'Participate in challenges, huddles, workshops, and showcases on Slack.',
    },
    {
      title: 'SHIP',
      description: 'Upload to Itch.io, record a gameplay video, ship in Slack, then submit to the form.',
    },
    {
      title: 'EARN',
      description: 'Earn a grant to buy prizes (ex. game consoles, Steam credit, an arcade kit)',
    },
  ],
};

const games = [
  {
    title: 'Infinity Lost',
    image: '/assets/infinitylost.gif',
    alt: 'Infinity Lost',
    creator: 'Violet, 16 years old, USA',
    description: 'Lost in an infinitely looping space shuttle, you have to escape your unfortunate circumstance',
    link: 'https://vivithequeen.itch.io/infinity-lost'
  },
  {
    title: 'Tales of Orbis',
    image: '/assets/taleoforbis.png',
    alt: 'Tales of Orbis',
    creator: 'Jake, 17 years old, India',
    description: 'Travel as Orbis, a lone orb created from the ashes of gods to escape Null and reach the Core',
    link: 'https://jakeojeff.itch.io/tales-of-orbis'
  },
  {
    title: 'One More Day',
    image: '/assets/onemoreday.png',
    alt: 'One More Day',
    creator: 'Zach, 16 years old, USA',
    description: 'When it seems like you ran out of time, time just keeps repeating...',
    link: 'https://bolb2019.itch.io/one-more-day-gmtk-2025'
  },
  {
    title: 'Trust me.',
    image: '/assets/trustme.png',
    alt: 'Trust me',
    creator: 'Avni, 16 years old, USA',
    description: 'Trust me. or don\'t. The choice is yours.',
    link: 'https://of-knee.itch.io/trust-me'
  },
  {
    title: 'Okrim',
    image: '/assets/okrim.gif',
    alt: 'Okrim',
    creator: 'Ernests, 17 years old, Latvia',
    description: 'A point and click psychological horror game, you are ghost going through daily routine to break free',
    link: 'https://n0o0b090lv.itch.io/okrim-updated'
  },
  {
    title: 'The Birb',
    image: '/assets/thebirb.png',
    alt: 'The Birb',
    creator: 'Neya, 12 years old, USA',
    description: 'A platformer where you fly around and collect candy for the winter',
    link: 'https://that-blob.itch.io/the-birb'
  }
];

interface DecorationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  position: { bottom: string; left?: string; right?: string };
  zIndex?: number;
}

interface StepColumnProps {
  step: Step;
  index: number;
  isBeginner: boolean;
  decorations?: DecorationImage[];
  rectangleWidth: number;
}

const StepColumn = ({ step, index, isBeginner, decorations = [], rectangleWidth }: StepColumnProps) => {
  const titleImageSrc = isBeginner 
    ? `/assets/explanation-title${index + 1}.svg`
    : `/assets/exxplanation-title${index + 1}-2.svg`;

  const columnZIndex = !isBeginner && (step.title === 'BUILD' || step.title === 'SHIP') ? 20 : 'auto';
  
  return (
    <div className="step-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: columnZIndex }}>
      <div style={{ position: 'relative', zIndex: 20 }}>
        <Image
          src={titleImageSrc}
          alt={`Title ${index + 1}`}
          width={400}
          height={120}
          className="step-title-image"
        />
        <div className="step-title-text-wrapper" style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
          <span className="step-title-text" style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>{step.title}</span>
        </div>
      </div>
      <div className="step-rectangle" style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: `${rectangleWidth}px`, height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 1 }}>
        {decorations.map((decoration, i) => (
          <Image
            key={i}
            src={decoration.src}
            alt={decoration.alt}
            width={decoration.width}
            height={decoration.height}
            className="step-decoration-image"
            style={{ position: 'absolute', ...decoration.position, zIndex: decoration.zIndex || 10 }}
          />
        ))}
        <p className="step-rectangle-text" style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>{step.description}</p>
      </div>
      {step.title === 'BUILD' && !isBeginner && (
        <Image
          src="/assets/zorp.svg"
          alt="Zorp"
          width={180}
          height={180}
          className="step-decoration-image mobile-experience-image"
          style={{ position: 'absolute', bottom: '-4rem', right: '-7rem', zIndex: 300, pointerEvents: 'none' }}
        />
      )}
      {step.title === 'SHIP' && !isBeginner && (
        <Image
          src="/assets/explanation-heidi.svg"
          alt="Heidi"
          width={180}
          height={180}
          className="step-decoration-image mobile-experience-image"
          style={{ position: 'absolute', bottom: '-4rem', right: '-8rem', zIndex: 300, pointerEvents: 'none' }}
        />
      )}
    </div>
  );
};

const beginnerDecorations: Record<string, DecorationImage[]> = {
  BUILD: [
    { src: '/assets/explanation-godorpheus.svg', alt: 'Godorpheus', width: 150, height: 150, position: { bottom: '-3.5rem', left: '-1rem' } },
    { src: '/assets/explanation-heidi.svg', alt: 'Heidi', width: 150, height: 150, position: { bottom: '-3.5rem', right: '-2.5rem' } }
  ],
  SHIP: [
    { src: '/assets/explanation-console.svg', alt: 'Console', width: 240, height: 240, position: { bottom: '-6.5rem', left: '-3.5rem' } },
    { src: '/assets/explanation-orpheus.svg', alt: 'Orpheus', width: 220, height: 220, position: { bottom: '-4rem', right: '-5rem' } }
  ],
  EARN: [
    { src: '/assets/explanation-tamagotchi.svg', alt: 'Tamagotchi', width: 190, height: 190, position: { bottom: '-3.5rem', left: '-3rem' } },
    { src: '/assets/explanation-trophy.svg', alt: 'Trophy', width: 190, height: 190, position: { bottom: '-3.5rem', right: '-5rem' } }
  ]
};

const experiencedDecorations: Record<string, DecorationImage[]> = {
  BUILD: [
    { src: '/assets/explanation-orpheus.svg', alt: 'Orpheus', width: 180, height: 180, position: { bottom: '-4.5rem', left: '-3rem' } }
  ],
  SHIP: [
    { src: '/assets/explanation-coin.svg', alt: 'Coin', width: 180, height: 180, position: { bottom: '-4.5rem', left: '-4rem' } }
  ],
  EARN: [
    { src: '/assets/explanation-arcade2.svg', alt: 'Arcade 2', width: 180, height: 180, position: { bottom: '-5rem', right: '-4rem' } }
  ]
};

const sectionTitleBoxStyle = {
  backgroundColor: 'white',
  borderRadius: '2rem',
  padding: '2rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '800px'
};

const sectionTitleTextStyle = {
  textAlign: 'center' as const,
  margin: 0,
  color: '#142B70',
  fontSize: '4rem',
  whiteSpace: 'nowrap' as const
};

const buttonStyle = {
  backgroundColor: '#EE00A7',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  textDecoration: 'none' as const,
  fontSize: '2rem',
  fontWeight: 'bold' as const,
  marginTop: 'auto',
  marginBottom: '1rem',
  boxShadow: '-8px 8px 0 #930B6A'
};

export default function Explanation() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 380;
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const singleSetWidth = totalCardWidth * games.length;
    const middleSetStart = singleSetWidth;
    const middleSetEnd = singleSetWidth * 2;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      
      if (scrollLeft >= middleSetEnd - 10) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = scrollLeft - singleSetWidth;
        setTimeout(() => { carousel.style.scrollBehavior = ''; }, 0);
      } else if (scrollLeft < middleSetStart) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = scrollLeft + singleSetWidth;
        setTimeout(() => { carousel.style.scrollBehavior = ''; }, 0);
      }
    };

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isPausedRef.current && carousel) {
          carousel.scrollLeft -= 1;
        }
      }, 15);
    };

    const handleMouseEnter = () => { isPausedRef.current = true; };
    const handleMouseLeave = () => { isPausedRef.current = false; };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    
    carousel.scrollLeft = middleSetStart;
    startAutoScroll();

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  const renderSectionHeader = (section: Section) => (
    <div style={{ backgroundColor: '#224CCA', padding: '1rem 2rem', marginTop: '2rem', marginBottom: '0', paddingBottom: '0.5rem', position: 'relative' }}>
      {section.title === 'NEVER MADE A GAME BEFORE?' && (
        <Image
          src="/assets/explanation-stars2.svg"
          alt="Stars"
          width={150}
          height={150}
          className="header-character hide-mobile"
          style={{ position: 'absolute', right: '2rem', top: '-1rem' }}
        />
      )}
      {section.title === 'HAVE SOME EXPERIENCE?' && (
        <Image
          src="/assets/explanation-stars1.svg"
          alt="Stars"
          width={150}
          height={150}
          className="header-character hide-mobile"
          style={{ position: 'absolute', left: '2rem', top: '-1rem' }}
        />
      )}
      <h2 style={{ textAlign: 'center', color: 'white', margin: 0, fontSize: '5rem' }}>{section.title}</h2>
    </div>
  );

  return (
    <section>
      <div>
        <div className="past-description" style={{ backgroundColor: '#224CCA', padding: '2rem 3rem', marginTop: '1rem', marginBottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <Image src="/assets/past-orpheusunity.svg" alt="Orpheus Unity" width={200} height={200} className="header-character hide-mobile" />
          <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '3.5rem' }}>
            Last summer, Jumpstart opened and received 68 games from 26 different countries, totalling 1900 hours of coding. Some include:
          </p>
          <Image src="/assets/past-orpheusconsole.svg" alt="Orpheus Console" width={200} height={200} className="header-character hide-mobile" />
        </div>

        <div 
          ref={carouselRef}
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            padding: '2rem 4rem 3rem 4rem',
            backgroundColor: '#101E45',
            overflowX: 'auto',
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            marginTop: '0'
          } as React.CSSProperties}
        >
          {[...games, ...games, ...games].map((game, index) => {
            const setIndex = Math.floor(index / games.length);
            const isLastInSet = (index + 1) % games.length === 0;
            
            return (
              <React.Fragment key={`${game.title}-${index}`}>
                <div className="game-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '380px', flexShrink: 0, border: '2px solid white', borderRadius: '1rem', padding: '0.75rem' }}>
                  <h3 style={{ color: 'white', fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center', wordWrap: 'break-word' }}>{game.title}</h3>
                  <Image src={game.image} alt={game.alt} width={320} height={150} unoptimized={game.image.endsWith('.gif')} style={{ marginBottom: '0.5rem', borderRadius: '0.5rem', width: '320px', height: '180px', objectFit: 'cover' }} />
                  <p style={{ color: 'white', fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.25rem', wordWrap: 'break-word' }}>{game.creator}</p>
                  <p style={{ color: 'white', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.5rem', wordWrap: 'break-word' }}>{game.description}</p>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="pink-button" style={buttonStyle}>
                    PLAY HERE
                  </a>
                </div>
                {isLastInSet && (
                  <div key={`all-games-${setIndex}`} className="game-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '380px', flexShrink: 0, border: '2px solid white', borderRadius: '1rem', padding: '0.75rem', minHeight: '600px' }}>
                    <h3 style={{ color: 'white', fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center', wordWrap: 'break-word' }}>ALL GAMES</h3>
                    <Image src="/assets/v2gamse.gif" alt="V2 Games" width={320} height={250} unoptimized={true} style={{ marginBottom: '0.5rem', borderRadius: '0.5rem', width: '320px', height: '250px', objectFit: 'cover' }} />
                    <a href="http://v2.jumpstart.hackclub.com/games/index.html" target="_blank" rel="noopener noreferrer" className="pink-button" style={{ ...buttonStyle, width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', padding: '1rem 4rem', marginTop: 'auto', marginBottom: '2rem' }}>
                      PLAY HERE
                    </a>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div style={{ backgroundColor: '#224CCA', height: '2rem', width: '100%' }}></div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0.5rem 3rem', marginTop: '3rem' }}>
          <Image src="/assets/explanation-diamond.svg" alt="Diamond" width={200} height={200} className="header-character hide-mobile" />
          <div className="section-title-box" style={sectionTitleBoxStyle}>
            <h2 className="section-title-text" style={{ ...sectionTitleTextStyle, lineHeight: '0.9', whiteSpace: 'normal' }}>
              JUMPSTART V3 IS NOW OPEN FOR<br />
              <span className="you-wiggle" style={{ fontSize: '2.8em' }}>YOU</span><br />
              TO BUILD A GAME!
            </h2>
          </div>
          <Image src="/assets/explanation-arcade1.svg" alt="Arcade" width={200} height={200} className="header-character hide-mobile" />
        </div>

        {renderSectionHeader(beginnerSection)}
        
        <div className="steps-container" style={{ backgroundColor: '#224CCA', display: 'flex', justifyContent: 'center', gap: '3rem', padding: '0rem 8rem 2rem 8rem', marginTop: '0' }}>
          {beginnerSection.steps.map((step, index) => (
            <StepColumn
              key={step.title}
              step={step}
              index={index}
              isBeginner={true}
              decorations={beginnerDecorations[step.title] || []}
              rectangleWidth={325}
            />
          ))}
        </div>

        {renderSectionHeader(experiencedSection)}
        
        <div className="steps-container" style={{ backgroundColor: '#224CCA', display: 'flex', justifyContent: 'center', gap: '3rem', padding: '0rem 8rem 2rem 8rem', marginTop: '0', position: 'relative' }}>
          {experiencedSection.steps.map((step, index) => (
            <StepColumn
              key={step.title}
              step={step}
              index={index}
              isBeginner={false}
              decorations={experiencedDecorations[step.title] || []}
              rectangleWidth={280}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
