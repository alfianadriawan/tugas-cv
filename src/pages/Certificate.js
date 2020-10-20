import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';

import Foto from '../assets/images/sertif1.jpg';

function Certificate() {
    return (
      <>
        <section className="mx-auto">
          <Header />
        </section>

        <section className="mx-auto">
          <div className="bg-green-800 flex flex-col py-4">
            <div className="text-center">
              <h1 className="text-yellow-500 text-6xl font-bold">MY CERTIFICATE</h1>
            </div>
            <div className="py-10 w-auto">
              <div className="mx-auto max-w-sm rounded overflow-hidden shadow-2xl text-center">
                <img src={Foto} alt="Sertifikat piang" className="w-full" />
              </div>
              <div className="px-6 py-4">
                <h2 className="text-2xl text-center font-semibold text-white">
                  Pengurus BEM
                </h2>
              </div>
            </div>
          </div>

        </section>

        <section className="mx-auto bg-green-900 p-10">
          <Footer />
        </section>
      </>
    );
}

export default Certificate;
