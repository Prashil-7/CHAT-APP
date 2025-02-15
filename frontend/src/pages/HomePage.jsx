/* eslint-disable no-unused-vars */
import React from 'react'
import {useChatStore} from '../store/useChatStore.js'
import Sidebar from '../Components/Sidebar.jsx';
import NoChatSelected from '../Components/NoChatSelected.jsx';
import ChatContainer from '../Components/ChatContainer.jsx'

function HomePage() {
    const {selectUser} = useChatStore()

  return (
    <div className='h-screen  bg-base-200'>
      <div className='flex items-center justify-center pt-20 px-4'>
        <div className='bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]'>
          <div className='flex h-full rounded-lg overflow-hidden'>
            <Sidebar/>

            {!selectUser ? <NoChatSelected/> :<ChatContainer/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;