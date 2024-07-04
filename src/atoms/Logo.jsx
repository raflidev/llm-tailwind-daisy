import React from 'react'

function Logo(props) {
  const {text, size} = props
  return (
    <h1 className={`text-white font-bold ${size ? size : 'text-xl'} my-2 py-2 px-3 relative`}>
      AI-INTERLINKED {text}
      <div className='w-4 h-4 bg-blue-700 rounded-full absolute left-0 top-0'></div>
    </h1>
  )
}

export default Logo