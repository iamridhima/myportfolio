import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

const PhysioNep = () => {
  const url = 'https://github.com/NibidaGhimire/PhysioNep';
  window.open(url, '_blank');
};

const Mokshya = () => {
  const url = 'https://github.com/NibidaGhimire/mokshya';
  window.open(url, '_blank');
};

const NFTMarketplace = () => {
  const url = 'https://github.com/iamridhima/NFTMarketplace';
  window.open(url, '_blank');
};

const Labify = () => {
  const url = 'https://github.com/iamridhima/Labify';
  window.open(url, '_blank');
};

  const Work = () => {
    return (
      <section className='section' id='work'>
        <div className='container mx-auto'>
          <motion.div
            className='flex flex-col lg:flex-row gap-x-10'>
            <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:-mb-72'>
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h2 className='h2 leading-tight text-accent'>
                  My LATEST<br />WORKS
                </h2>
                <p className='max-w-sm mb-16'>
                  These are some of the projects I did by the 5th semester of my undergrad journey.
                </p>
                <button className='btn btn-sm'><a href='https://github.com/iamridhima' target='_blank'>View all projects</a></button>
              </motion.div>
              <motion.div
                onClick={PhysioNep}
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='group relative overflow-hidden border-2 border-white/80 rounded-xl w-90 h-90'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500 opacity-60'
                  src={img1}
                  alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>PhysioNep</span></div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>Nepal's Largest All Female Hackathon Winning Project</span>
                </div>
              </motion.div>
            </div>
            <div className='flex-1 flex flex-col gap-y-16 gap-x-65'>
                     <motion.div
                onClick={NFTMarketplace}
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='group relative overflow-hidden border-2 border-white/80 rounded-xl w-126 h-100'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500 opacity-70 w-58 h-179'
                  src={img4}
                  alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>NFTMarketplace</span></div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>A NFT based Handicraft Marketplace</span>
                </div>
              </motion.div>
              <motion.div
                onClick={Mokshya}
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='group relative overflow-hidden border-2 border-white/80 rounded-xl w-126 h-100'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500 opacity-70 w-58 h-179'
                  src={img5}
                  alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Mokshya</span></div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>A gamified learning platform</span>
                </div>
              </motion.div>
              <motion.div
              onClick={Labify}
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='group relative overflow-hidden border-2 border-white/80 rounded-xl w-126 h-100'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500 opacity-100 w-58 h-179'
                  src={img3}
                  alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Labify</span></div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>A webiste to digitalise lab reports</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  };

  export default Work; 
