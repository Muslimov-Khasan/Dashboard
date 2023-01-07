import React from 'react'
import "./refult.scss"

const HeroCardItem = ({title, count}) => {
  return (
    <div className="card__item">
        <h4 className='card__item-title'> {title} </h4>
        <h3 className='card__item-count'> {count} </h3>
    </div>
  )
}

export default HeroCardItem