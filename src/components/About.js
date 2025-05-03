import React from 'react';


const AboutUs = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-black/60 to-black/10 text-white pt-6 px-4 md:px-10 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">
          About NoteSphere  
        </h1>
        <p className="text-lg text-white mb-10">
          Welcome to <span className="text-orange-400 font-semibold">NoteSphere</span>, your digital space for organizing thoughts, ideas, and important information. 
          We're dedicated to helping you stay productive and focused.
        </p>
        <div className="bg-neutral-600 border border-orange-400 rounded-xl shadow-lg p-6 text-left space-y-4">
          <h2 className="text-2xl font-semibold text-orange-400">Our Mission</h2>
          <p className="text-gray-300">
            At NoteSphere, our mission is to provide a simple, elegant, and effective note-taking solution that empowers users to capture their thoughts anytime, anywhere.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Quick and secure note creation</li>
            <li>Organized and searchable note history</li>
            <li>Seamless user experience with modern UI</li>
            <li>AI-powered features (coming soon!)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400">Get in Touch</h2>
          <p className="text-gray-300"> 
            Have questions or suggestions? We're always open to feedback.
            Contact us at <a href="mailto:ranaziauldin.sesational@gmail.com" className="text-orange-400 underline">ranaziauldin.sesational@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
