import React, { useState } from 'react';

const HeroSection = () => {
  const [headline, setHeadline] = useState('Your Awesome Headline');
  const [subheadline, setSubheadline] = useState('Your compelling subheadline goes here. Describe the value proposition and entice users to take action.');
  const [ctaText, setCtaText] = useState('Get started');
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/600/400');

  const handleRegenerate = () => {
    const texts = [
      ['Revolutionary Solutions', 'Discover groundbreaking innovations', 'Explore Now'],
      ['Next-Gen Technology', 'Experience the future today', 'Learn More'],
      ['Smart Solutions', 'Intelligent systems for modern life', 'Get Started']
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setHeadline(randomText[0]);
    setSubheadline(randomText[1]);
    setCtaText(randomText[2]);
    setImageUrl(`https://picsum.photos/600/400?random=${Math.random()}`);
  };

  return (
    <section className="bg-gray-50 min-h-[70vh] flex items-center py-24 animate-fade-in">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 mb-12 md:mb-0 space-y-6 animate-slide-up">
            <h1
              className="text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-md"
              contentEditable
              onBlur={(e) => setHeadline(e.target.textContent)}
            >
              {headline}
            </h1>
            <p
              className="text-lg text-gray-600 max-w-lg leading-relaxed"
              contentEditable
              onBlur={(e) => setSubheadline(e.target.textContent)}
            >
              {subheadline}
            </p>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-base font-semibold uppercase tracking-wide shadow-md transition-transform duration-200 hover:-translate-y-1 inline-flex items-center gap-2"
              contentEditable
              onBlur={(e) => setCtaText(e.target.textContent)}
            >
              <span className="z-10">{ctaText}</span>
              <svg className="w-5 h-5 z-10 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 animate-slide-up">
            <img 
              src={imageUrl} 
              alt="Hero illustration"
              className="w-full h-auto object-cover rounded-lg shadow-md transition-shadow transition-transform duration-300 hover:shadow-lg hover:scale-105"
            />
          </div>
        </div>
        {/* Regenerate button */}
        <div className="mt-12 text-center animate-slide-up">
          <button onClick={handleRegenerate} className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold uppercase shadow-md transition-transform duration-200 hover:-translate-y-1">
            Regenerate with AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;