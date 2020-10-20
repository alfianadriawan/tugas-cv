import React from 'react';
import { AboutMe, MySkills, Education, Contact } from '../components';

function Body() {
    return (
      <>
        <div id="about" className="mx-auto pt-6 pb-12 bg-yellow-100">
          <AboutMe />
        </div>
        <div id="skills" className="mx-auto pt-6 pb-12 bg-green-100">
          <MySkills />
        </div>
        <div id="education" className="mx-auto pt-6 pb-12 bg-yellow-100">
          <Education />
        </div>
        <div id="contact" className="mx-auto pt-6 pb-12 bg-green-100">
          <Contact />
        </div>
      </>
    );
}

export default Body;
