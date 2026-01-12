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
import AnalystChoicesSlide from './slides/AnalystChoicesSlide';
import DataSourcesSlide from './slides/DataSourcesSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import ACADemoSlide from './slides/ACADemoSlide';
import ACADemoSlide2 from './slides/ACADemoSlide2';
import LiveCodingRevealSlide from './slides/LiveCodingRevealSlide';
import QuestionsSlide from './slides/QuestionsSlide';
import EndSlide from './slides/EndSlide';

export const georgetown2026Config: SlideshowConfig = {
  id: 'georgetown-2026',
  title: 'PolicyEngine: Measuring Policy Impacts on Inequality',
  description: 'Guest lecture for PPOL 6362: Inequality and Public Policy',
  date: 'January 12, 2026',
  location: 'Georgetown McCourt School of Public Policy',
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

    // Measuring inequality - connects to syllabus readings
    AnalystChoicesSlide,
    DataSourcesSlide,

    // Our approach
    OurApproachSlide,

    // Demos
    HouseholdDemoSlide,        // DC household
    PolicyReformDemoSlide,     // SNAP earned income deduction
    ACADemoSlide,              // ACA - Texas couple
    ACADemoSlide2,             // ACA - NY family

    // Check back on AI coding
    LiveCodingRevealSlide,

    // Wrap up
    QuestionsSlide,
    EndSlide,
  ],
};
