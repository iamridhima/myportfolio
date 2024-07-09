import React from 'react';
import Image from '../assets/final.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation, typeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='flex justify-between items-center mt-30 mb-60' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-2 text-[55px] font-bold leading-[0.8] lg:text-[100px]'
            >
              RIDHIMA <span> BHATT </span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white'>
                I AM A <TypeAnimation sequence={['DEVELOPER', 2000, 'DESIGNER', 2000, 'STUDENT', 2000]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Hi, I'm Ridhima—though you can call me Rids. I'm a tech-savvy person with a passion for literature, nature photography, and music.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex items-center mt-5 mb-4 gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <button className='btn btn-logo pr-2 pl-2'><a href='https://www.linkedin.com/in/ridhima-bhatt-a588ba257/' target='_blank'>Contact me</a></button>
              <a href='https://docs.google.com/document/d/1-H9KlbWTxSpEofzYxj__he1QI4-sLT0doYKqBhaHn5E/edit?usp=sharing' target='_blank' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://www.linkedin.com/in/ridhima-bhatt-a588ba257/' target='_blank'><FaLinkedin /></a>
              <a href='https://x.com/ridss_bee' target='_blank'><FaTwitter /></a>
              <a href='https://github.com/iamridhima' target='_blank'><FaGithub /></a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[500px] lg:max-w-[500px]'
          >
            <img src={Image} alt='' className='resized-image' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
