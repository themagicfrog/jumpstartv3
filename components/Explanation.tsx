'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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

export default function Explanation() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const renderSection = (section: Section, prefix: string, showHeader?: boolean) => (
    <div>
      {showHeader && (
        <div style={{ 
          backgroundColor: '#224CCA', 
          padding: '2rem',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ textAlign: 'center', color: 'white', margin: 0, fontSize: '3.5rem' }}>{section.title}</h2>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', padding: '0.5rem 3rem' }}>
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
            src="/assets/explanation-heidi.svg"
            alt="Heidi"
            width={200}
            height={200}
          />
        </div>

        {renderSection(beginnerSection, 'beginner', true)}
      </div>
    </section>
  );
}

