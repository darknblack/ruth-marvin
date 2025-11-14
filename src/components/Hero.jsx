import React, { useState, useEffect } from 'react'

const HeroText = () => (
  <div className="relative z-10 flex flex-col justify-between text-center h-full py-12 w-full">
    <div>
      <h1 className="font-romantic text-6xl text-khaki-200/60 animate-fade-in-up">Marvin</h1>
      <h1 className="font-romantic text-4xl text-khaki-200/60 animate-fade-in-up">&amp;</h1>
      <h1 className="font-romantic text-6xl text-khaki-200/60 animate-fade-in-up">Ruth</h1>
    </div>

    <div className="mt-8 animate-fade-in-scale">
      <p className="text-2xl md:text-4xl font-romantic text-khaki-300/60 mb-1">The Beginning of Forever</p>
      <p className="text-xs md:tex-md text-khaki-300/60 font-allura tracking-tightest">December 20, 2025 / Saturday · 3:00pm</p>
    </div>


  </div>
)

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [animationVersions, setAnimationVersions] = useState([0, 0, 0, 0]);

  const backgrounds = [
    { image: '/couple-hero5.jpg', animationClass: 'animate-wedding-pan-1' },
    { image: '/couple-hero.jpg', animationClass: 'animate-wedding-pan-2' },
    { image: '/couple-hero2.jpg', animationClass: 'animate-wedding-pan-3' },
    { image: '/couple-hero4.jpg', animationClass: 'animate-wedding-pan-4' },
  ];

  const navItems = [
    { id: 'our-story', label: 'Our Story' },
    { id: 'event-details', label: 'Event Details' },
    { id: 'dress-code', label: 'Dress Code' },
    { id: 'rsvp', label: 'RSVP' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Initialize first background animation on mount
  useEffect(() => {
    setAnimationVersions((prevVersions) => {
      const newVersions = [...prevVersions];
      newVersions[0] = 1;
      return newVersions;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgrounds.length;
        // Increment animation version for the background that's becoming active
        setAnimationVersions((prevVersions) => {
          const newVersions = [...prevVersions];
          newVersions[nextIndex] += 1;
          return newVersions;
        });
        return nextIndex;
      });
    }, 9000); // Change background every 9 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="fixed h-screen flex items-center text-red justify-center overflow-hidden bg-khaki-900 top-0 left-0 right-0">
      {/* Blurred Background Fallback Layer */}
      <div
        className="absolute inset-0 bg-no-repeat transition-opacity duration-[3000ms] ease-in-out"
        style={{
          backgroundImage: `url('${backgrounds[currentBgIndex].image}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(16px)',
          zIndex: 0,
        }}
      />

      {/* Background Layers */}
      {backgrounds.map((bg, index) => (
        <div
          key={`${index}-${animationVersions[index]}`}
          className={`absolute inset-0 bg-no-repeat transition-opacity duration-[3000ms] ease-in-out ${currentBgIndex === index ? 'opacity-100' : 'opacity-0'} ${currentBgIndex === index ? bg.animationClass : ''}`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(45,40,35,0.7), rgba(35,30,25,0.7)), url('" + bg.image + "')",
            backgroundPosition: '80% 60%',
            backgroundSize: '120%',
            zIndex: (backgrounds.length - index),
          }}
        />
      ))}

      {/* TEXT */}
      <div className='w-full h-full relative z-10'>
        {/* Border */}
        <div className='absolute border-2 rounded-sm border-khaki-400 top-4 left-4 right-4 bottom-4'>
          {/* Corner Borders - Camera Frame Style */}
          {/* Top Left Corner */}
          <div className='absolute top-0 left-0 w-12 h-12'>
            <div className='absolute top-3 left-3 w-12 border-t-2 border-l-2 border-khaki-400 h-12'></div>
          </div>
          {/* Top Right Corner */}
          <div className='absolute top-0 right-0 w-12 h-12'>
            <div className='absolute top-3 right-3 w-12 border-t-2 border-r-2 border-khaki-400 h-12'></div>
          </div>
          {/* Bottom Left Corner */}
          <div className='absolute bottom-0 left-0 w-12 h-12'>
            <div className='absolute bottom-3 left-3 w-12 border-b-2 border-l-2 border-khaki-400 h-12'></div>
          </div>
          {/* Bottom Right Corner */}
          <div className='absolute bottom-0 right-0 w-12 h-12'>
            <div className='absolute bottom-3 right-3 w-12 border-b-2 border-r-2 border-khaki-400 h-12'></div>
          </div>

          <div className='absolute right-4 top-4 flex items-center gap-2 px-2 py-1'>
            <div className='w-3 h-3 animate-pulse bg-red-500 rounded-full mt-1'></div>
          </div>
        </div>


        <div className="relative z-10 max-w-xl mx-auto px-6 pt-4 w-full h-full flex items-center">
          <HeroText />
        </div>

        {/* Navigation Menu - Right Side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <nav className="flex flex-col items-end gap-1 sm:gap-3 sm:pr-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs md:text-sm text-khaki-200/60 font-allura hover:text-khaki-200 transition-all duration-300 tracking-wider text-right whitespace-nowrap hover:translate-x-[-4px]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>


      <style>
        {`
        .animate-wedding-pan-1 {
          animation: wedding-pan-1 9s linear forwards;
          will-change: background, background-position, background-size;
        }
        @keyframes wedding-pan-1 {
          0% {
            background-position: 90% 55%;
            background-size: 125%;
          }
          100% {
            background-position: 80% 60%;
            background-size: 120%;
          }
        }

        .animate-wedding-pan-2 {
          animation: wedding-pan-2 9s linear forwards;
          will-change: background, background-position, background-size;
        }
        @keyframes wedding-pan-2 {
          0% {
            background-position: 70% 50%;
            background-size: 125%;
          }
          100% {
            background-position: 90% 55%;
            background-size: 115%;
          }
        }

        .animate-wedding-pan-3 {
          animation: wedding-pan-3 9s linear forwards;
          will-change: background, background-position, background-size;
        }
        @keyframes wedding-pan-3 {
          0% {
            background-position: 90% 55%;
            background-size: 115%;
          }
          100% {
            background-position: 80% 60%;
            background-size: 120%;
          }
        }

        .animate-wedding-pan-4 {
          animation: wedding-pan-4 10s linear forwards;
          will-change: background, background-position, background-size;
        }
        @keyframes wedding-pan-4 {
           0% {
            background-position: center 40%;
            background-size: 110%;
          }
          100% {
            background-position: center center;
            background-size: 100%;
          }
        }
        `}
      </style>
    </section>
  )
}