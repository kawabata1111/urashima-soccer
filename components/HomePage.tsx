import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Features } from './Features';
import { Pricing } from './Pricing';
import { Access } from './Access';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Access />
    </>
  );
};