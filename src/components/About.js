import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import imgg from '../assets/about.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='min-h-[85vh lg:min-h-[75vh] flex items-center' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-56 gap-y-10 lg:flex-row'>
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1  bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top sm:-ml-12 sm:mr-10 sm:-mt-44'>
            </motion.div> 
          <div className='flex-1 sm:-ml-10 sm:mr-10 '>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='h2 text-accent mt-20 sm:mt-0'>About me.</motion.h2>
            <motion.h3
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='h3 mb-4'>
              I am an undergraduate student in Electronics, Communication, and Information Engineering at IOE, Pulchowk.
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6'>My current interests lie in Web2 and Web3 development. Looking ahead, I am eager to delve into the fields of Machine Learning as well.</motion.p>
            <div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[35px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={8} duration={6} /> :
                    null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Licences and <br />
                  Certifications
                </div>
              </div>
              <div>
                <div className='text-[35px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={8} duration={6} /> :
                    null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Number of <br />
                  Projects
                </div>
              </div>
              <div>
                <div className='text-[35px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={6} /> :
                    null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Club <br />
                  Experiences
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

