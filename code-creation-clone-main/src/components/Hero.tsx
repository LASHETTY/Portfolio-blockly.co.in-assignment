
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="bg-teal-400 text-white px-4 py-2 rounded-full text-sm font-medium">
              Hello!
            </span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              I'm <span className="text-yellow-400">Anish</span>
              <span className="inline-block ml-2">👋</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              UX/UX Designer, Front End Developer & Thinker.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Based in India
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              Download CV
              <Download className="w-4 h-4" />
            </button>
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              Got to Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                K
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                N
              </div>
              <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by 100+ clients
            </span>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Yellow background circle */}
            <div className="absolute inset-0 w-80 h-80 bg-yellow-400 rounded-full -z-10 transform translate-x-4 -translate-y-4"></div>
            
            {/* Profile image */}
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Anish Kumar Sinha"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <div className="absolute bottom-8 -left-8 w-12 h-12 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
