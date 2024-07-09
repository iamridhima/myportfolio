import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'Secretary',
    description: 'IOE Pulchowk Girls',
    due: '2024-Present',
  },
  {
    name: 'Technical Coordinator',
    description: 'IOE Pulchowk Girls',
    due: '2023-2024',
  },
  {
    name: 'PR and Outreach Manager',
    description: 'IEEE Pulchowk Student Branch',
    due: '2024-Present',
  },
  {
    name: 'Vice-Treasurer',
    description: 'IEEE Pulchowk Student Branch',
    due: '2023-2024',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 lg:bg-services bg-services-small lg:bg-bottom bg-no-repeat mix-blend-lighten mb-20 -ml-10 lg:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='h2 text-accent mb-6'>Volunteering Experiences</motion.h2>
            <motion.h3
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='h3 max-w-[455px] mb-12'>I've been engaged in various clubs and committees of IOE Pulchowk Campus in these two years of Engineering. Some of them are:</motion.h3>
          </motion.div>
          <div className='flex-1 ml-10'>
            <div>
              {services.map((service, index) => {
                const { name, description, due } = service;
                return (
                  <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='border-b border-white/20 h-[126px] mb-[38px] flex'
                    key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>{due}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
