'use client';

import { AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Step {
  number: string;
  title: string;
  description: string;
  hasDetails?: boolean;
  hasForm?: boolean;
}

interface Section {
  title: string;
  steps: Step[];
}

const beginnerSection: Section = {
  title: 'NEVER MADE A GAME BEFORE?',
  steps: [
    {
      number: '1',
      title: 'BUILD',
      description: 'Use our very easy-to-follow resources to make your own 2D platformer game.',
      hasDetails: true,
    },
    {
      number: '2',
      title: 'SHIP',
      description: 'Upload your game to Itch.io and Github, then submit to the form.',
      hasForm: true,
    },
    {
      number: '3',
      title: 'EARN',
      description: 'Earn a stickersheet and a grant to buy a game to play. Enjoy!',
      hasDetails: true,
    },
  ],
};

const experiencedSection: Section = {
  title: 'HAVE SOME EXPERIENCE?',
  steps: [
    {
      number: '1',
      title: 'BUILD',
      description: 'Go wild with building any game! Devlog in Slack, use Hackatime, and push to Github.',
      hasDetails: true,
    },
    {
      number: '2',
      title: 'PLAY',
      description: 'Participate in challenges, huddles, workshops, and showcases on Slack.',
      hasDetails: true,
    },
    {
      number: '3',
      title: 'SHIP',
      description: 'Upload to Itch.io, record a gameplay video, ship in Slack, then submit to the form.',
      hasForm: true,
    },
    {
      number: '4',
      title: 'EARN',
      description: 'Earn a grant to buy prizes (ex. game consoles, Steam credit, an arcade kit)',
      hasDetails: true,
    },
  ],
};

const games = [
  {
    title: 'Infinity Lost',
    image: '/assets/infinitylost.gif',
    alt: 'Infinity Lost',
    creator: 'Violet, 16 years old, USA',
    description: 'Lost in a infinitey looping space shuttle, you have to escape your unfortunate circumstance',
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
    description: 'A point and click psychological horror game, you are ghost going through daily routine until you break free',
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

export default function Explanation() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  const toggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

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
        setTimeout(() => {
          carousel.style.scrollBehavior = '';
        }, 0);
      }
      else if (scrollLeft < middleSetStart) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = scrollLeft + singleSetWidth;
        setTimeout(() => {
          carousel.style.scrollBehavior = '';
        }, 0);
      }
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    
    carousel.scrollLeft = middleSetStart;

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isPausedRef.current && carousel) {
          carousel.scrollLeft -= 1;  
        }
      }, 30);
    };

    startAutoScroll();

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const renderSection = (section: Section, prefix: string, showHeader?: boolean) => (
    <div>
      {showHeader && (
        <div style={{ 
          backgroundColor: '#224CCA', 
          padding: '1rem 2rem',
          marginTop: '2rem',
          marginBottom: '0',
          paddingBottom: '0.5rem',
          position: 'relative'
        }}>
          {section.title === 'NEVER MADE A GAME BEFORE?' && (
            <Image
              src="/assets/explanation-stars2.svg"
              alt="Stars"
              width={150}
              height={150}
              style={{ position: 'absolute', right: '2rem', top: '-1rem' }}
            />
          )}
          {section.title === 'HAVE SOME EXPERIENCE?' && (
            <Image
              src="/assets/explanation-stars1.svg"
              alt="Stars"
              width={150}
              height={150}
              style={{ position: 'absolute', left: '2rem', top: '-1rem' }}
            />
          )}
          <h2 style={{ textAlign: 'center', color: 'white', margin: 0, fontSize: '5rem' }}>{section.title}</h2>
        </div>
      )}
      {!showHeader && <h2 style={{ textAlign: 'center' }}>{section.title}</h2>}

      {!showHeader && (
      <div>
        {section.steps.map((step) => {
          const stepId = `${prefix}-${step.number}`;
          const isExpanded = expandedStep === stepId;

          return (
            <div key={stepId}>
              <div>
                <div>{step.number}</div>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <h3>{step.title}</h3>
                  </div>
                  <p style={{ textAlign: 'center' }}>{step.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    {step.hasDetails && (
                      <button onClick={() => toggleStep(stepId)}>
                        <span>DETAILS</span>
                      </button>
                    )}
                    {step.hasForm && (
                      <a href="#form">FORM</a>
                    )}
                  </div>

                  <AnimatePresence>
                    {isExpanded && step.hasDetails && (
                      <div>
                        <div style={{ textAlign: 'center' }}>
                          <p>More details about {step.title.toLowerCase()} will be available soon. Check back for updates!</p>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );

  return (
    <section>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0.5rem 3rem' }}>
          <Image
            src="/assets/explanation-diamond.svg"
            alt="Diamond"
            width={200}
            height={200}
          />
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '2rem', 
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '800px'
          }}>
            <h2 style={{ textAlign: 'center', margin: 0, color: '#142B70', fontSize: '4rem', whiteSpace: 'nowrap' }}>HOW DOES THIS WORK?</h2>
          </div>
          <Image
            src="/assets/explanation-arcade1.svg"
            alt="Arcade"
            width={200}
            height={200}
          />
        </div>

        {renderSection(beginnerSection, 'beginner', true)}
        
        <div style={{ backgroundColor: '#224CCA', display: 'flex', justifyContent: 'center', gap: '3rem', padding: '0rem 8rem 2rem 8rem', marginTop: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/explanation-title1.svg"
                alt="Title 1"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>BUILD</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '325px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <Image
                src="/assets/explanation-godorpheus.svg"
                alt="Godorpheus"
                width={150}
                height={150}
                style={{ position: 'absolute', bottom: '-3.5rem', left: '-1rem', zIndex: 10 }}
              />
              <Image
                src="/assets/explanation-heidi.svg"
                alt="Heidi"
                width={150}
                height={150}
                style={{ position: 'absolute', bottom: '-3.5rem', right: '-2.5rem', zIndex: 10 }}
              />
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Use our beginner-friendly resources to make your own 2D platformer game.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/explanation-title2.svg"
                alt="Title 2"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>SHIP</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '325px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <Image
                src="/assets/explanation-console.svg"
                alt="Console"
                width={240}
                height={240}
                style={{ position: 'absolute', bottom: '-6.5rem', left: '-3.5rem', zIndex: 10 }}
              />
              <Image
                src="/assets/explanation-orpheus.svg"
                alt="Orpheus"
                width={220}
                height={220}
                style={{ position: 'absolute', bottom: '-4rem', right: '-5rem', zIndex: 10 }}
              />
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Upload your game to Itch.io and Github, then submit to the form.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/explanation-title3.svg"
                alt="Title 3"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>EARN</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '325px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <Image
                src="/assets/explanation-tamagotchi.svg"
                alt="Tamagotchi"
                width={190}
                height={190}
                style={{ position: 'absolute', bottom: '-3.5rem', left: '-3rem', zIndex: 10 }}
              />
              <Image
                src="/assets/explanation-trophy.svg"
                alt="Trophy"
                width={190}
                height={190}
                style={{ position: 'absolute', bottom: '-3.5rem', right: '-5rem', zIndex: 10 }}
              />
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Earn a stickersheet and a grant to buy a game to play. Enjoy!</p>
            </div>
          </div>
        </div>

        {renderSection(experiencedSection, 'experienced', true)}
        
        <div style={{ backgroundColor: '#224CCA', display: 'flex', justifyContent: 'center', gap: '3rem', padding: '0rem 8rem 2rem 8rem', marginTop: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/exxplanation-title1-2.svg"
                alt="Title 1"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>BUILD</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '280px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <Image
                src="/assets/explanation-orpheus.svg"
                alt="Orpheus"
                width={180}
                height={180}
                style={{ position: 'absolute', bottom: '-4.5rem', left: '-3rem', zIndex: 10 }}
              />
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Go wild with building any game! Devlog in Slack, use Hackatime, and push to Github.</p>
            </div>
            <Image
              src="/assets/zorp.svg"
              alt="Zorp"
              width={180}
              height={180}
              style={{ position: 'absolute', bottom: '-4rem', right: '-7rem', zIndex: 100 }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/exxplanation-title2-2.svg"
                alt="Title 2"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>PLAY</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '280px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Participate in challenges, huddles, workshops, and showcases on Slack.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/exxplanation-title3-2.svg"
                alt="Title 3"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>SHIP</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '280px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <Image
                src="/assets/explanation-coin.svg"
                alt="Coin"
                width={180}
                height={180}
                style={{ position: 'absolute', bottom: '-4.5rem', left: '-4rem', zIndex: 10 }}
              />
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Upload to Itch.io, record a gameplay video, ship in Slack, then submit to the form.</p>
            </div>
            <Image
              src="/assets/explanation-heidi.svg"
              alt="Heidi"
              width={180}
              height={180}
              style={{ position: 'absolute', bottom: '-4rem', right: '-8rem', zIndex: 100 }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 20 }}>
              <Image
                src="/assets/exxplanation-title4-2.svg"
                alt="Title 4"
                width={400}
                height={120}
              />
              <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
                <span style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>EARN</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '280px', height: '300px', marginTop: '-2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem 1rem 1rem', position: 'relative', zIndex: 10 }}>
              <Image
                src="/assets/explanation-arcade2.svg"
                alt="Arcade 2"
                width={180}
                height={180}
                style={{ position: 'absolute', bottom: '-5rem', right: '-4rem', zIndex: 10 }}
              />
              <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>Earn a grant to buy prizes (ex. game consoles, Steam credit, an arcade kit)</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0.5rem 3rem' }}>
          <Image
            src="/assets/explanation-stars1.svg"
            alt="Stars 1"
            width={200}
            height={200}
          />
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '2rem', 
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '800px'
          }}>
            <h2 style={{ textAlign: 'center', margin: 0, color: '#142B70', fontSize: '4rem', whiteSpace: 'nowrap' }}>JUMPSTART IN THE PAST</h2>
          </div>
          <Image
            src="/assets/explanation-stars2.svg"
            alt="Stars 2"
            width={200}
            height={200}
          />
        </div>

        <div style={{ backgroundColor: '#224CCA', padding: '2rem 6rem', marginTop: '1rem' }}>
          <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2.5rem' }}>
            Jumpstart V2 ran from July 9th to August 10th, receiving 68 games from 26 different countries, and over a total of 1900 hours! Some include:
          </p>
        </div>

        <div 
          ref={carouselRef}
          className="hide-scrollbar"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            padding: '2rem 4rem', 
            backgroundColor: '#101E45',
            overflowX: 'auto',
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          } as React.CSSProperties}
        >
          {[...games, ...games, ...games].map((game, index) => (
            <div key={`${game.title}-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '380px', flexShrink: 0, border: '2px solid white', borderRadius: '1rem', padding: '0.75rem' }}>
              <h3 style={{ color: 'white', fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center', wordWrap: 'break-word' }}>{game.title}</h3>
              <Image
                src={game.image}
                alt={game.alt}
                width={320}
                height={250}
                style={{ marginBottom: '0.5rem', borderRadius: '0.5rem', width: '320px', height: '250px', objectFit: 'cover' }}
              />
              <p style={{ color: 'white', fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.25rem', wordWrap: 'break-word' }}>{game.creator}</p>
              <p style={{ color: 'white', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.5rem', wordWrap: 'break-word' }}>{game.description}</p>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#EE00A7',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginTop: 'auto',
                  marginBottom: '1rem',
                  boxShadow: '-8px 8px 0 #930B6A'
                }}
              >
                PLAY HERE
              </a>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#224CCA', padding: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
          <Image
            src="/assets/past-orpheusunity.svg"
            alt="Orpheus Unity"
            width={200}
            height={200}
          />
          <a
            href="http://v2.jumpstart.hackclub.com/games/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#EE00A7',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '0.1em',
              boxShadow: '-8px 8px 0 #930B6A'
            }}
          >
            SEE ALL V2 GAMES
          </a>
          <Image
            src="/assets/past-orpheusconsole.svg"
            alt="Orpheus Console"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

