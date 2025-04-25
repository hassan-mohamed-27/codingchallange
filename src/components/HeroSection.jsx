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
    <section className="bg-gradient-to-r from-primary-600 to-secondary-500 dark:bg-gradient-to-r dark:from-primary-700 dark:to-secondary-600">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className="max-w-2xl mb-4 text-5xl font-bold leading-tight tracking-tighter md:text-6xl xl:text-7xl text-white dark:text-gray-100"
            contentEditable
            onBlur={(e) => setHeadline(e.target.textContent)}
          >
            {headline}
          </h1>
          <p
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            contentEditable
            onBlur={(e) => setSubheadline(e.target.textContent)}
          >
            {subheadline}
          </p>
          <button
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all bg-primary-600 rounded-xl hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600"
            contentEditable
            onBlur={(e) => setCtaText(e.target.textContent)}
          >
            {ctaText}
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={imageUrl}
            alt="Hero illustration"
            className="w-full h-72 object-cover rounded-xl shadow-hero-image dark:shadow-hero-image-dark"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleRegenerate}
          className="px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-900"
        >
          Regenerate with AI
        </button>
      </div>
    </section>
  );
};

export default HeroSection;