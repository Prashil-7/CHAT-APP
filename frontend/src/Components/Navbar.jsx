/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

function Navbar() {
    const {authUser}= useAuthStore();
  return (
    <div>
        hello from nav

    </div>
  )
}

export default Navbar