import React from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section 
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5465228/pexels-photo-5465228.jpeg)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Ideas <br /> Your Space Your <span className="text-orange-500">NoteSphere</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Create, edit, and manage your notes effortlessly. Whether it’s ideas, tasks, or reminders — NoteSphere keeps everything organized and within reach.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                className="text-white hover:black shadow font-medium text-xl hover:bg-orange-600 bg-orange-500 px-3 py-2 rounded-full transition duration-300"
                aria-current="page"
                to="/addnotes"
              >
                Add Your Notes
                <ChevronRight className="inline-block ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <img src="../home.png" alt="notes" className="w-[400px] h-auto"/>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
