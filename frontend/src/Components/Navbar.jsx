/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import { Link2, LogOut, MessageSquare, Settings, User } from 'lucide-react';

function Navbar() {
    const {authUser, logout}= useAuthStore();
  return (
   <header className='bg-base-100 border-b border-base-300 fixed w-full top-0.5 z-40 backdrop-blur-lg g-base-100/80'>
    <div className=' container mx-auto  px-4 h-16'>
      <div className='flex items-center justify-around h-full'>
        <div className='flex items-center gap-8'>
          <Link to="/"  className='flex items-center gap-2.5 hover-opacity-80 transition-all'>
          <div className=' size-9  rounded-lg bg-primary/10 flex items-center justify-center'><MessageSquare className=' w-5  h-5 text-primary'/>
          </div>
          <h1 className='text-lg font-bold'>Prash-Chat</h1>
          </Link>
        </div>
        {/* {right waypoints} */}

        <div className='flex items-center gap-2'>
          <Link to={"/setting"}
          className={'btn btn-sm gap-2 transition-colors'}
          >
            <Settings className='w-4 h-4'/>
            <span className='hidden sm:inline'>Settings</span>
          </Link>
          {authUser && (
            <>
            <Link to={"/profile"} className={'btn btn-md gap-2'}>
            <User className='size-5 ' /><span className='hidden sm:inline' >Profile</span> </Link>

            <button className=' flex gap-2 items-center' onClick={logout}>
              <LogOut className='size-5'/>
              <span className='hidden sm:inline cursor-pointer'>Logout</span>
            </button>
            </>
          )}
        </div>
      </div>
    </div>


   </header>
  )
}

export default Navbar