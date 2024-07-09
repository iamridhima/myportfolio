import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_o4qitst', // Replace with your actual EmailJS service ID
        'template_3q7kki7', // Replace with your actual EmailJS template ID
        form.current,
        {
          publicKey: 'cDqW1grvowYOBQEUW', // Replace with your actual EmailJS public key
        }
      );
      setIsFormSubmitted(true);
      setErrorMessage(null); // Clear any previous error messages
      console.log('SUCCESS!');
      alert("Thank you for your message! We'll be in touch soon.")
    } catch (error) {
      console.error('Email sending failed:', error);
      setErrorMessage('An error occurred while sending your message. Please try again later.');
    }
    setIsFormSubmitted(false);
    form.current.reset();
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            >
              <h4 className='text-x1 uppercase text-accent fond-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work<br />together!
              </h2>
            </motion.div>
          </div>
          <motion.form
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
            ref={form}
            onSubmit={sendEmail}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 item-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white  focus:border-accent transition-all'
              type='text'
              name='from_name'
              placeholder='Your Name'
              disabled={isFormSubmitted} // Disable fields after submission
              required // Add required attribute for validation
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white  focus:border-accent transition-all'
              type='text'
              name='from_email'
              placeholder='Your Email'
              disabled={isFormSubmitted} // Disable fields after submission
              required // Add required attribute for validation
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white  focus:border-accent transition-all'
              name='message'
              placeholder='Your message'
              disabled={isFormSubmitted} // Disable fields after submission
              required // Add required attribute for validation
            ></textarea>
            <button className='btn btn-lg' disabled={isFormSubmitted}>
              {isFormSubmitted ? 'Sent' : 'Send'}
            </button>
            {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}
            {/* {isFormSubmitted && (
              <p className='text-green-500 mt-4'>
                Thank you for your message! We'll be in touch soon.
              </p>
            )} */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
