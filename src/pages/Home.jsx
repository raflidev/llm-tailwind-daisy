import React from 'react'
import LayoutPage from '../templates/LayoutPage'
import Logo from '../atoms/Logo'
import Typewriter from 'typewriter-effect';
import IconUp from '../atoms/icons/IconUp';
import TextareaAutosize from 'react-textarea-autosize';

function Home() {
  return (
    <LayoutPage>
      <div class="flex h-full px-10">
        <div class="my-auto">
          <div className='flex flex-col -space-y-3 text-2xl pb-20'>
            <Logo text="/ BAPPENAS GPT" size="text-2xl"/>
            <span className='text-gray-400 font-medium pl-2 flex space-x-2'>
              <span>Mulai tanyakan</span> <Typewriter
              options={{
                strings: ['prioritas pembangunan.', 'indikator pembangunan.', 'data pembangunan.', 'sasaran pembangunan.', 'target pembangunan.', 'program pembangunan.', 'kegiatan pembangunan.', 'output pembangunan.', 'dampak pembangunan.', 'evaluasi pembangunan.'],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 10
              }}
            /> </span>
            
          </div>
        </div>

        <div className='fixed bottom-10 w-4/6 bg-accent px-2 py-2 rounded-lg'>
          <div className='flex space-x-2 items-end'>
            {/* <textarea className='w-full bg-white text-black input py-1 rounded-md resize-none' rows={10}></textarea> */}
            <TextareaAutosize maxRows={3} minRows={1} className='w-full bg-transparent outline-none border-none shadow-none text-white input py-2 rounded-md resize-none'  />
            <button className='bg-primary p-2 rounded-full'>
              <IconUp/>
            </button>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default Home