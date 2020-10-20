import React from 'react';

export default function education() {
    return (
      <>
        <div className="text-center">
          <h1 className="text-green-900 text-5xl font-bold">Education</h1>
          <h2 className="text-yellow-500 text-xl italic">Saya pernah belajar dan lulus disekolah yang ada dibawah </h2>
        </div>
        <div className="mt-8 flex flex-row">
          <div className="flex-1 text-right pr-5">
            <div>
              <span className="text-2xl text-gray-600 bg-yellow-500 rounded-full px-4 font-bold">TK Dharma Wanita</span>
              <h3 className="text-gray-700 text-xl font-bold">2004 - 2006</h3>
            </div>
            <div className="pt-8">
              <span className="text-2xl text-gray-600 bg-yellow-500 rounded-full px-4 font-bold">SMPIT Al-Fityan School Gowa</span>
              <h3 className="text-gray-700 text-xl font-bold">2012 - 2015</h3>
            </div>
          </div>
          <div className="flex-1 text-left pl-5">
            <div>
              <span className="text-2xl text-gray-600 bg-yellow-500 rounded-full px-4 font-bold ">SDN 5 Sungguminasa</span>
              <h3 className="text-gray-700 text-xl font-bold">2006 - 2012</h3>
            </div>
            <div className="pt-8">
              <span className="text-2xl text-gray-600 bg-yellow-500 rounded-full px-4 font-bold">SMK Telkom Makassar</span>
              <h3 className="text-gray-700 text-xl font-bold">2015 - 2018</h3>
            </div>
          </div>
        </div>

      </>
    );
}
