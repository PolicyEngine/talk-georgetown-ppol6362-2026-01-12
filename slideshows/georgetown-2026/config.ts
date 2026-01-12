import { SlideshowConfig } from '@/lib/types';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import EndSlide from './slides/EndSlide';

export const georgetown2026Config: SlideshowConfig = {
  id: 'georgetown-2026',
  title: 'Georgetown 2026',
  description: 'Introduction to PolicyEngine for Georgetown University',
  date: '2026',
  location: 'Georgetown University',
  slides: [
    // Introduction
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,

    // How PolicyEngine works
    HowDoesItWorkSlide,
    OurApproachSlide,

    // Demo
    HouseholdDemoSlide,

    // Wrap up
    EndSlide,
  ],
};
