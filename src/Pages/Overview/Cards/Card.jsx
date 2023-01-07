import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({title, count, path}) => {
  return (
    <Link to={`/item/${path}`} className="card">
        <h3> {title} </h3>
        <h4> {count} </h4>
    </Link>
)
}

export default Card