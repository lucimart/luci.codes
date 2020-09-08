import React, { useEffect } from 'react';
import './hero.styles.scss';
import { gsap } from 'gsap';
// import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
// import { Draggable } from 'gsap/Draggable';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { TextPlugin } from 'gsap/TextPlugin';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroContainer = React.createRef();

  useEffect(() => {
    gsap.to(heroContainer.current, {
      scrollTrigger: {
        trigger: heroContainer.current,
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: 2,
        markers: false,
      },

      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    });
  }, [heroContainer]);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#id',
      start: 'top top',
      endTrigger: '#otherID',
      end: 'bottom 50%+=100px',
      onToggle: (self) => console.log('toggled, isActive:', self.isActive),
      onUpdate: (self) => {
        console.log(
          'progress:',
          self.progress.toFixed(3),
          'direction:',
          self.direction,
          'velocity',
          self.getVelocity()
        );
      },
    });
  });

  return (
    <section className='hero'>
      <div className='hero__container' id='id'>
        <small className='hero__container__title'>
          (Hi, I'm Lucía Martínez)
        </small>
        <p className='hero__container__body'>
          I'm a web developer living in Spain. Currently in love with React.js,
          Node.js and Express.js. Wanting to create beautiful, responsive and
          useful sites
          <span role='img' aria-label='✨ Sparkles Emoji'>
            ✨
          </span>
        </p>
      </div>
      <div className='hero__circle' ref={heroContainer} data-speed={0.05}></div>
    </section>
  );
};

export default Hero;
