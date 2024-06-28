import React from 'react'
import IconPlus from '../atoms/icons/IconPlus'

function ButtonWithIcon(props) {
  const {children, type, onClick} = props
  return (
  <button type={type} onClick={onClick} className='w-full bg-blue-700 text-xs font-semibold py-2 px-4 rounded-md flex space-x-2 items-center hover:bg-blue-800 duration-300'>
    <IconPlus/>
    <span>{children}</span>
  </button>
  )
}

export default ButtonWithIcon