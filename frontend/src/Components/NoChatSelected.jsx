/* eslint-disable no-unused-vars */
import React from 'react'
import { MessageSquare} from 'lucide-react'

function NoChatSelected() {
  return (
    <div className='w-full h-full flex flex-1 flex items-center justify-center p-16 bg-base-100/50'>
      <div className='max-w-md text-center space-y-6'>
        
        {/* {Icon dispaly} */}
              <div className='flex  justify-center gap-4 mb-4'>
                <div className='relative'>
                  <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-baseline justify-center animate-bounce'>
                    <MessageSquare className ="w-8 h-8 text-primary"/>
                    </div>
                </div>
              </div>
              
              {/* { welcome text} */}

                  <h2 className='text-2xl font-bold'>Welcome To Prash_ chat</h2>
                  <p className='text-base-content/60'>Select a Conversion from the Sidebar to Start Chatting</p>
      </div>
    </div>
  )
}

export default NoChatSelected