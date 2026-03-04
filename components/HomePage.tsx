import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Features } from './Features';
import { UratoreMethod } from './UratoreMethod';
import { PhotoBanner } from './PhotoBanner';
import { Pricing } from './Pricing';
import { Access } from './Access';
import { Partners } from './Partners';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <PhotoBanner
        image="/images/banner-soccer-field.jpg"
        text="すべては「基礎」から始まる"
        subtext="止める、蹴る、運ぶ — その先にある成長"
      />
      <UratoreMethod />
      <Services />
      <Pricing />
      <Access />
      <Partners />
    </>
  );
};
