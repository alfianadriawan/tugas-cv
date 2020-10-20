import React from 'react';

export default function contact() {
    return (
      <>
        <div className="text-center">
          <h1 className="text-green-900 text-5xl font-bold">Contact</h1>
          <h2 className="text-yellow-500 text-xl italic">Anda punya banyak cara untuk menemui saya</h2>
        </div>
        <div className="flex bg-yellow-500 mt-8 mx-40 px-8 py-4 text-center justify-between rounded-full">
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-700">
              Alamat
            </h2>
            <p className="text-l font-medium text-gray-700">Jalan Swadaya 4, Sulawesi Selatan</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-700">
              No. HP
            </h2>
            <p className="text-l font-medium text-gray-700">+6285256251252/WA</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-700">
              Mail
            </h2>
            <p className="text-l font-medium text-gray-700">alfian.adriawan@gmail.com</p>
          </div>
        </div>

      </>
    );
}
