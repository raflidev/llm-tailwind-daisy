import React from 'react'
import { Link } from 'react-router-dom'

function LinkButtonChat(props) {
  const {children} = props
  return (
    <Link className='w-full border border-gray-50 text-xs font-semibold py-2 px-5 rounded-md flex space-x-2 hover:border-transparent hover:bg-secondary duration-300'>
    <span>{children}</span>
  </Link>
  )
}

export default LinkButtonChat