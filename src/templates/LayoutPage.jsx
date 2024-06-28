import React from 'react'
import Logo from '../atoms/Logo'
import ButtonWithIcon from '../molecules/ButtonWithIcon'
import ConversationGrid from '../organisms/ConversationGrid'

function LayoutPage(props) {
  const {children} = props
  return (
    <div className='flex w-full font-inter'>
      <div className="w-1/6 bg-accent px-3 min-h-screen">
        <Logo />
        <ButtonWithIcon type="button">New Chat</ButtonWithIcon>
        <ConversationGrid/>
      </div>
      <div className="w-5/6 px-2 bg-secondary">
        {children}
      </div>
    </div>
  )
}

export default LayoutPage