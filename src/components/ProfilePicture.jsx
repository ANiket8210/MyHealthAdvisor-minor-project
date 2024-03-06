import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePicture = () => {
    const params= useParams()
  return (
    <>
        <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        </div>
        <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">{params.username}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{params.username}@gmail.com</div>
        </div>
    </>
    )
}

export default ProfilePicture