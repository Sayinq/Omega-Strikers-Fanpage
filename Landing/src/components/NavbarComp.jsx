import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from '@nextui-org/react'
import '../index.css'
import odyLogo from '../assets/OdyLogo.png';

export default function NavbarComp() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = '200px';
      section.scrollIntoView({ behavior: 'smooth' }) + offset;
    }
  };

    return (
      <Navbar id="navbarcomp" className="sticky bg-[#131313]">
        <NavbarBrand className="absolute w-20 h-20 translate-y-4 cursor-pointer">
          <a href="https://www.odysseyinteractive.gg/"><img src={odyLogo}/></a>
        </NavbarBrand>
        <NavbarContent justify="end" className="sm:gap-x-8">
        <NavbarItem>
            <span 
              className="text-white font-semibold text-2xl cursor-pointer select-none hover:text-[#E01377]/80"
              onClick={() => scrollToSection('footbrawl')}  
            >
                Play
            </span>
          </NavbarItem>
          <NavbarItem>
            <span 
              className="text-white font-semibold text-2xl cursor-pointer select-none hover:text-[#E01377]/80"
              onClick={() => scrollToSection('characters')}  
            >
                Strikers
            </span>
          </NavbarItem>
          <NavbarItem>
            <span 
              className="text-white font-semibold text-2xl cursor-pointer select-none hover:text-[#E01377]/80"
              onClick={() => scrollToSection('skin-showcase')}  
            >
                Content
            </span>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }