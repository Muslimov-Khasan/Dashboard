import React, { useState } from 'react'
import { OverViewIcon, TicketsIcon } from '../../Assists/Icons/Icon'
import SidebarNav from '../extra/extra'
import "./SidebarWrapper.scss"

const SidebarWrapper = () => {
  const [active, setActive] = useState('overview')
    return (
    <ul className="sidebarWrapper">
        <SidebarNav 
        title="overview"
        icon={<OverViewIcon />}
        active={active}
        status={'overview'}
        setActive={setActive}
        path="/"
        />

        <SidebarNav 
        title="tickets"
        icon={<TicketsIcon />}
        active={active}
        status={'tickets'}
        setActive={setActive}
        path="/tickets"
        />
    </ul>

    
)
}

export default SidebarWrapper