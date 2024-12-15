import React from 'react';

const AnimatedServices = () => {
  const keyframes = `
    @keyframes word {
      0% {
        transform: translateY(100%);
      }
      15% {
        transform: translateY(-10%);
        animation-timing-function: ease-out;
      }
      20% {
        transform: translateY(0);
      }
      40%,
      100% {
        transform: translateY(-110%);
      }
    }
  `;

  const animationClasses = {
    base: 'animate-word col-span-full row-span-full',
    delay1: 'animate-word-delay-1 col-span-full row-span-full',
    delay2: 'animate-word-delay-2 col-span-full row-span-full',
    delay3: 'animate-word-delay-3 col-span-full row-span-full',
    delay4: 'animate-word-delay-4 col-span-full row-span-full',
  };

  return (
    <>
      <style>{keyframes}</style>
      <style>{`
        .animate-word { animation: word 7s infinite; }
        .animate-word-delay-1 { animation: word 7s infinite; animation-delay: -1.4s; }
        .animate-word-delay-2 { animation: word 7s infinite; animation-delay: -2.8s; }
        .animate-word-delay-3 { animation: word 7s infinite; animation-delay: -4.2s; }
        .animate-word-delay-4 { animation: word 7s infinite; animation-delay: -5.6s; }
      `}</style>
      
      <div className="flex h-96 items-center justify-center bg-gray-100 font-bold text-gray-800">
        <div className="text-center space-y-12">
          <div className="text-center text-5xl font-bold flex flex-col space-y-6">
            <div className="mb-8">Services offered</div>
            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden h-16">
              <span className={animationClasses.base}> Engineering </span>
              <span className={animationClasses.delay1}> Infrastructure </span>
              <span className={animationClasses.delay2}> Industrial </span>
              <span className={animationClasses.delay3}> Feasibility </span>
              <span className={animationClasses.delay4}> Procurement </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedServices;