import React from 'react'
import LinkButtonChat from '../molecules/LinkButtonChat'

function ConversationGrid() {
  return (
    <div className='space-y-3'>
        <div className='font-medium text-sm mt-4'>Conversations</div>
        <LinkButtonChat>RPJMN 2024-2025</LinkButtonChat>
        <LinkButtonChat>Pembangunan Nasional</LinkButtonChat>
        <LinkButtonChat>Test</LinkButtonChat>
    </div>
  )
}

export default ConversationGrid