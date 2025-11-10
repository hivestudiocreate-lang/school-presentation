
import React from 'react';
import { SlideType } from '../types';
import type { SlideData } from '../types';
import CodeBlock from './CodeBlock';

interface SlideProps {
  slideData: SlideData;
  isActive: boolean;
  direction: number;
  slideIndex: number;
  currentSlideIndex: number;
}

const getTransform = (slideIndex: number, currentSlideIndex: number, direction: number) => {
    if (slideIndex === currentSlideIndex) return 'translateX(0) scale(1)';
    if (slideIndex === currentSlideIndex - 1) return 'translateX(-100%) scale(0.8)';
    if (slideIndex === currentSlideIndex + 1) return 'translateX(100%) scale(0.8)';
    if (slideIndex < currentSlideIndex) return 'translateX(-100%) scale(0.8)';
    return 'translateX(100%) scale(0.8)';
}

const AnimatedElement: React.FC<{ isActive: boolean; delay: string; children: React.ReactNode }> = ({ isActive, delay, children }) => {
    return (
        <div
            className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: isActive ? delay : '0ms' }}
        >
            {children}
        </div>
    );
};

const Slide: React.FC<SlideProps> = ({ slideData, isActive, direction, slideIndex, currentSlideIndex }) => {

    const transformValue = getTransform(slideIndex, currentSlideIndex, direction);
    
    const renderContent = () => {
    switch (slideData.type) {
      case SlideType.TITLE:
      case SlideType.END:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full">
            <AnimatedElement isActive={isActive} delay="200ms">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {slideData.title}
              </h1>
            </AnimatedElement>
            {slideData.presenters && (
              <AnimatedElement isActive={isActive} delay="400ms">
                <p className="mt-6 text-lg md:text-xl text-gray-300">
                  By: {slideData.presenters.join(' & ')}
                </p>
              </AnimatedElement>
            )}
          </div>
        );

      case SlideType.CONTENT:
        return (
          <div className="p-4 md:p-8 h-full flex flex-col gap-4">
            <AnimatedElement isActive={isActive} delay="200ms">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">{slideData.title}</h2>
                <p className="font-mono text-lg md:text-xl text-purple-400 mt-1">{slideData.operators}</p>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 flex-grow">
              <div className="flex flex-col gap-4 justify-center">
                <AnimatedElement isActive={isActive} delay="400ms">
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed">{slideData.description}</p>
                </AnimatedElement>
                 <AnimatedElement isActive={isActive} delay="500ms">
                    <div className="mt-4 p-4 border-l-4 border-cyan-400 bg-white/5 text-gray-300 italic">
                        "{slideData.example}"
                    </div>
                </AnimatedElement>
                <AnimatedElement isActive={isActive} delay="600ms">
                    {slideData.code && <CodeBlock code={slideData.code} />}
                </AnimatedElement>
              </div>
              <AnimatedElement isActive={isActive} delay="700ms">
                <div className="h-full w-full min-h-[200px] lg:min-h-0">
                    {slideData.imageUrl && <img src={slideData.imageUrl} alt={slideData.title} className="w-full h-full object-cover rounded-lg shadow-2xl shadow-black/50" />}
                </div>
              </AnimatedElement>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute inset-0 transition-transform duration-700 ease-in-out bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg`}
      style={{
        transform: transformValue,
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : 0
      }}
    >
        {renderContent()}
    </div>
  );
};

export default Slide;
   