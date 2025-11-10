
import React, { useState, useEffect } from 'react';
import { SLIDES_DATA } from './constants';
import type { SlideData } from './types';
import Background from './components/Background';
import Slide from './components/Slide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === SLIDES_DATA.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES_DATA.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-screen text-white overflow-hidden bg-black/50">
      <Background />
      
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl h-[85vh] md:h-[75vh] relative">
          {SLIDES_DATA.map((slide: SlideData, index: number) => (
            <Slide 
              key={index} 
              slideData={slide} 
              isActive={index === currentSlide} 
              direction={direction} 
              slideIndex={index}
              currentSlideIndex={currentSlide}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 md:bottom-8 z-20 flex items-center justify-between w-full max-w-6xl px-4">
          <button
            onClick={handlePrev}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Prev
          </button>
          <div className="text-white/50 text-sm">
            {currentSlide + 1} / {SLIDES_DATA.length}
          </div>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
   