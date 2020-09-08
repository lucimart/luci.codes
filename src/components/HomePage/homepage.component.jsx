import React from 'react';
import './homepage.styles.scss';
import Hero from '../Hero/hero.component';
import Projects from '../Projects/projects.component';
import AboutMe from '../AboutMe/aboutme.component';
import Contact from '../Contact/contact.component';

const HomePage = () => {
  return (
    <main className='homepage'>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
};

export default HomePage;
