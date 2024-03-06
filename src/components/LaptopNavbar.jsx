import React from 'react'
import Logo from './Logo'
import NavbarLinks from './NavbarLinksLaptop'
import Notification from './Notification'
import ProfileDropdown from './ProfileDropdown'

const LaptopNavbar = () => {
  return (
    <>
     <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
                <Logo/>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <NavbarLinks/>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class=" flex ml-4 items-center md:ml-6">
                <Notification/>
                <ProfileDropdown/>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default LaptopNavbar