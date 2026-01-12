import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ACADemoSlide2() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <SlideTitle>ACA: New York family</SlideTitle>
        </SlideHeader>

        <div className="flex flex-col items-center mt-4">
          <div className="text-lg text-gray-600 mb-4">
            Family of 3 in New York: two 40 year old parents, one 3 year old child
          </div>
          <div className="text-md text-gray-500 mb-4">
            This household receives Medicaid, CHIP, and/or PTC depending on income
          </div>
          <div className="relative w-full max-w-4xl h-[380px] bg-white rounded-lg overflow-hidden">
            <Image
              src={assetPath("/images/aca/ny-family-healthcare.png")}
              alt="New York family healthcare benefits by income"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
