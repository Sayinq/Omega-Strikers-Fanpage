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
    return (
      <Navbar id="navbarcomp" className="sticky bg-[#131313]">
        <NavbarBrand className="absolute w-20 h-20 translate-y-4">
          <img src={odyLogo} />
        </NavbarBrand>
        <NavbarContent justify="end" className="sm:gap-x-8">
        <NavbarItem>
            <span className="text-white font-semibold text-2xl">Play</span>
          </NavbarItem>
          <NavbarItem>
            <span className="text-white font-semibold text-2xl">Strikers</span>
          </NavbarItem>
          <NavbarItem>
            <span className="text-white font-semibold text-2xl">Content</span>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }