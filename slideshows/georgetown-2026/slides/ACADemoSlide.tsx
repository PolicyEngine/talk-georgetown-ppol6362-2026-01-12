import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function ACADemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo: Affordable Care Act modeling</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              PolicyEngine models ACA premium tax credits and subsidies
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Calculate premium tax credit eligibility and amounts</li>
              <li>Model impacts of income changes on subsidies</li>
              <li>Analyze subsidy cliffs and phase-outs</li>
              <li>Compare enhanced vs. pre-ARPA subsidies</li>
            </ul>

            <div className="pt-4">
              <p className="font-semibold text-pe-teal mb-2">Key features:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Second-lowest cost Silver plan benchmarks by state</li>
                <li>Income-based contribution percentages</li>
                <li>Medicaid expansion interactions</li>
              </ul>
            </div>

            <p className="text-pe-teal font-semibold pt-4">
              policyengine.org →
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
