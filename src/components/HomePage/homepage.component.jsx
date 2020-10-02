import React, { useEffect, useState } from 'react';
import './homepage.styles.scss';
import Hero from '../Hero/hero.component';
import Projects from '../Projects/projects.component';
import AboutMe from '../AboutMe/aboutme.component';
import Contact from '../Contact/contact.component';
import Particles from "react-tsparticles";
import particles from '../../configs/particles.json'

const HomePage = () => {
  const [docHeight, setDocHeight] = useState(document.documentElement.offsetHeight);
  const [docWidth, setDocWidth] = useState(document.documentElement.clientWidth);

  const updateWidthAndHeight = () => {
    setDocHeight(document.documentElement.offsetHeight);
    setDocWidth(document.documentElement.clientWidth);
  };
  useEffect(() => {
    updateWidthAndHeight();
  }, [])
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
  })
  
  return (
    <React.Fragment>
    <Particles
    className={"particleTop"}
    width={docWidth}
    height={docHeight - 0.2*docHeight}
    options={particles} />
    <main className='homepage'>
    <Hero />
    <Projects />
    <AboutMe />
    <Contact />
  </main>
  <Particles
  className={"particleBottom"}
  width={docWidth}
  height={docHeight - 0.2*docHeight}
  options={particles} />
    </React.Fragment>
  
  );
};

export default HomePage;
