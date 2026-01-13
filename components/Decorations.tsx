import React from 'react';

export const SoccerBallSketch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M100 5C47.5 5 5 47.5 5 100C5 152.5 47.5 195 100 195C152.5 195 195 152.5 195 100C195 47.5 152.5 5 100 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 5"/>
    <path d="M100 40L135 65V105L100 130L65 105V65L100 40Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M100 40V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M135 65L180 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M135 105L180 130" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M100 130V195" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M65 105L20 130" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M65 65L20 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TacticArrow = ({ className, color = "#E6A57E" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 25C20 10 50 0 80 15C90 20 95 25 95 25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
    <path d="M85 18L95 25L90 35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5" cy="25" r="3" fill={color} />
  </svg>
);

export const NetPattern = () => (
  <pattern id="netPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <path d="M0 10L10 0M10 20L20 10M0 10L10 20M10 0L20 10" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
  </pattern>
);

export const HandDrawnHex = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 5L90 28V72L50 95L10 72V28L50 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GrassLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className={className}>
    <path d="M0 40L10 20L20 40L30 15L40 40L50 25L60 40L70 10L80 40H1200V0H0V40Z" fill="currentColor" transform="scale(1 -1) translate(0 -40)"/>
    <path d="M0 40L15 25L30 40L45 20L60 40L75 15L90 40L105 30L120 40H1200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
  </svg>
);