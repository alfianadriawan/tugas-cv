import React from 'react';
import propTypes from 'prop-types';

function mySkills() {
    const skills = [
        {
            name: 'HTML',
            prog: '80%',
        },
        {
            name: 'CSS',
            prog: '60%',
        },
        {
            name: 'Javascript',
            prog: '30%',
        },
        {
            name: 'ReactJS',
            prog: '25%',
        },
        {
            name: 'Tailwindcss',
            prog: '40%',
        }
    ];
    return (
      <>
        <div className="text-center">
          <h1 className="text-green-900 text-5xl font-bold">My Skills</h1>
          <h2 className="text-yellow-500 text-xl italic">Saya cukup bisa dengan skill-skill dibawah</h2>
        </div>
        {
            skills.map((skill) => {
              return (
                <div className="relative pt-1 mt-4 px-16">
                  <div className="flex mb-2 justify-between items-center">
                    <div key={skill} data={skill}>
                      <span className="text-lg font-semibold py-1 px-2 rounded-full inline-block text-green-900 bg-green-500">
                        {skill.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg text-green-900 font-semibold inline-block">
                        {skill.prog}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full h-4 mb-8 mt-4 text-xs flex rounded bg-yellow-300">
                    <div style={{ width: skill.prog }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500" />
                  </div>
                </div>
);
            })
        }

      </>
    );
}

mySkills.prototype = {
    skill: propTypes.string
};

export default mySkills;
