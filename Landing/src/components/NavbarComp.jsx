import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from '@nextui-org/react'

export default function NavbarComp() {
    return (
      <Navbar className="bg-[#131313]">
        <NavbarBrand>
          <h1 className="font-bold text-2xl uppercase">ody logo</h1>
        </NavbarBrand>
        <NavbarContent justify="end" className="sm:gap-x-8">
        <NavbarItem>
            <span className="">Link</span>
          </NavbarItem>
          <NavbarItem>
            <span className="">Link</span>
          </NavbarItem>
          <NavbarItem>
            <span className="">Link</span>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }