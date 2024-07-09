import React from 'react';

import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="home" // Add 'to' attribute to specify the scroll target
            smooth={true}
            activeClass='active'
            spy={true}
          >
            <BiHomeAlt />
          </Link>
          <Link
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="about" // Add 'to' attribute to specify the scroll target
            smooth={true}
            activeClass='active'
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="services" // Add 'to' attribute to specify the scroll target
            smooth={true}
            activeClass='active'
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="work" // Add 'to' attribute to specify the scroll target
            smooth={true}
            activeClass='active'
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="contact" // Add 'to' attribute to specify the scroll target
            smooth={true}
            activeClass='active'
            spy={true}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
