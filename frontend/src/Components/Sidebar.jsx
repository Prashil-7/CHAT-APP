/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore';
import SideSkeleton from './SideSkeleton';

function Sidebar() {

    const {getUser, users, selectedUser ,setSelectedUser, IsUserLoading} =useChatStore();
    const onlineUser =[];
    useEffect(()=>{
      getUser();
    },[getUser])

    if(IsUserLoading) return  <SideSkeleton/>




  return (
    <div className=''>
      sidebar
          
    </div>
  )
}

export default Sidebar;