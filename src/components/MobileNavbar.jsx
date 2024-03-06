import React from 'react'
import NavbarLinksMobile  from './NavbarLinksMobile'
import Notification from './Notification'
import ProfilePicture from './ProfilePicture'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { useParams } from 'react-router-dom'

const MobileNavbar = () => {
  const params = useParams()
  return (
    <>
    <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3" id="mobile-menu-dropdown">
          <NavbarLinksMobile/>
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5 ">
                <ProfilePicture/>
                  <Notification />
            </div>
            <ProfileDropdownMenu/>
        </div>
    </div>
    </>
  )
}

export default MobileNavbar