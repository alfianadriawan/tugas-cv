import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="header justify-center bg-green-800">
        <ul className="flex justify-center pt-5">
          <li className="text-white text-center hover:text-yellow-500 text-xl font-medium px-6 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white text-center hover:text-yellow-500 text-xl font-medium px-6 py-2">
            <a href="#about">About</a>
          </li>
          <li className="text-white text-center hover:text-yellow-500 text-xl font-medium px-6 py-2">
            <a href="#skills">My Skills</a>
          </li>
          <li className="text-white text-center hover:text-yellow-500 text-xl font-medium px-6 py-2">
            <a href="#education">Education</a>
          </li>
          <li className="text-white text-center hover:text-yellow-500 text-xl font-medium px-6 py-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-white text-center hover:text-yellow-500 text-xl font-medium px-6 py-2">
            <Link to="/certificate">Certificate</Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;
