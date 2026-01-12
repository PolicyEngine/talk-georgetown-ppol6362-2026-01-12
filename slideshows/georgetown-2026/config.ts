import { SlideshowConfig } from '@/lib/types';
import LiveCodingIntroSlide from './slides/LiveCodingIntroSlide';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimReformStaticSlide from './slides/MicrosimReformStaticSlide';
import MicrosimDynamicsSlide from './slides/MicrosimDynamicsSlide';
import MicrosimDataSlide from './slides/MicrosimDataSlide';
import MicrosimWeightsSlide from './slides/MicrosimWeightsSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import ACADemoSlide from './slides/ACADemoSlide';
import LiveCodingRevealSlide from './slides/LiveCodingRevealSlide';
import EndSlide from './slides/EndSlide';

export const georgetown2026Config: SlideshowConfig = {
  id: 'georgetown-2026',
  title: 'Introduction to PolicyEngine',
  description: 'Introduction to PolicyEngine for Georgetown University',
  date: '2026',
  location: 'Georgetown University',
  slides: [
    // Kick off AI coding demo
    LiveCodingIntroSlide,

    // Introduction
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,

    // How PolicyEngine works
    HowDoesItWorkSlide,

    // Microsimulation walkthrough (animated table)
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimReformStaticSlide,
    MicrosimDynamicsSlide,
    MicrosimDataSlide,
    MicrosimWeightsSlide,
    MicrosimAggregateSlide,

    // Our approach
    OurApproachSlide,

    // Demos
    HouseholdDemoSlide,        // DC household
    PolicyReformDemoSlide,     // American Worker Rebate Act
    ACADemoSlide,              // ACA modeling

    // Check back on AI coding
    LiveCodingRevealSlide,

    // Wrap up
    EndSlide,
  ],
};
