import React from 'react';

import Foto from '../assets/images/foto aing.jpeg';

function Hero() {
    return (
      <div className="hero flex flex-col py-4">
        <div className="text-center">
          <h1 className="text-yellow-500 text-6xl font-bold">CURRICULUM VITAE</h1>
        </div>
        <div className="mt-8 mb-2 mx-auto">
          <div className="foto">
            <img src={Foto} alt="Foto aing" className="h-40" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-yellow-400 text-lg font-seminal">Andi Alfian Adriawan</h2>
          <p className=" text-white text-sm font-light italic">Newbie Frontend Developer</p>
        </div>

      </div>
    );
}

export default Hero;
