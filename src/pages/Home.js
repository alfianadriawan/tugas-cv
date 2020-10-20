import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Hero from '../parts/Hero';
import Body from '../parts/Body';

function Home() {
    return (
      <>
        <section className="mx-auto">
          <Header />
        </section>

        <section className="mx-auto">
          <Hero />
        </section>

        <section className="mx-auto">
          <Body />
        </section>

        <section className="mx-auto bg-green-900 p-10">
          <Footer />
        </section>
      </>
    );
}

export default Home;
