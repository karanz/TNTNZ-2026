
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2000&auto=format&fit=crop" 
          alt="Tropical Fiji" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      {/* Content Layer - Use explicit width/max-width for Convertri Importer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block py-2 px-6 bg-emerald-600 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
            Based in Auckland Since 2008
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-8 drop-shadow-2xl">
          Your Bridge to <br/> 
          <span className="text-emerald-300">Global Wonders</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 font-medium mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Specializing in Fiji, India, and South-East Asia escapes. <br className="hidden md:block"/> 
          Designed for Kiwis, by Aucklanders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#inquire" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl hover:scale-105">
            Request Custom Quote
          </a>
          <a href="#tours" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-xl text-white border-2 border-white/40 rounded-2xl font-bold text-lg transition-all hover:bg-white/20">
            View Popular Deals
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
