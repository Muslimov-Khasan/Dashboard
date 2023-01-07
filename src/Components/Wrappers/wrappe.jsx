import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Overview from '../../Pages/Overview/Overview'
import SingleItem from '../../Pages/Overview/profile/profile'
import Tickets from '../../Pages/Tickets/Tickets'
import Header from '../Header/Header'
import "./wrappe.scss"

const Wrapper = () => {
  return (
    <div className="main-wrapper">
        <Header />

        <Routes>
        <Route path="/" element={<Overview/>} />
        <Route path="/tickets" element={<Tickets/>} />
        <Route path='/item/:singleId' element={<SingleItem />} />
      </Routes>
    </div>
  )
}

export default Wrapper