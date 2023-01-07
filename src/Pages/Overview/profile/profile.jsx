import React from 'react'
import "./profile.scss"
import { useParams } from 'react-router-dom'

const SingleItem = () => {
    const {profile} = useParams()
  return (
    <h2 className='singleText'>Welcome to this page  {profile}</h2>
)
}

export default SingleItem