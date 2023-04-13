import React from 'react'
import * as C from './styles'
import SidebarChats from '../sidebarChats'
import SidebarHeader from '../sidebarHeader'

const sideBarra = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  )

}

export default sideBarra