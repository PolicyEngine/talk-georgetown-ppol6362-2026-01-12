import { SlideshowConfig } from '@/lib/types';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import EndSlide from './slides/EndSlide';

export const georgetown2026Config: SlideshowConfig = {
  id: 'georgetown-2026',
  title: 'Georgetown 2026',
  description: 'PolicyEngine presentation for Georgetown',
  date: '2026',
  location: 'Georgetown University',
  slides: [
    // Add your slides here
    IntroSlide,
    WhatIsPolicyEngineSlide,
    EndSlide,
  ],
};
