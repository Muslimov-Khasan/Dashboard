import React from 'react'
import "./Table.scss"

const Table = ({icon, title, titleInfo, name, nameInfo, date, dateInfo, button}) => {
  return (
    <div className="table">
        <div className="table__pages">
            <img src={icon} />
        </div>
        <div className="table__pages">
            <h5> {title} </h5>
            <p> {titleInfo} </p>
        </div>
        <div className="table__pages">
            <h5> {name} </h5>
            <p> {nameInfo} </p>
        </div>
        <div className="table__pages">
            <h5> {date} </h5>
            <p> {dateInfo} </p>
        </div>
        
        <div className="table__pages">
            <button> {button} </button>
            <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
            
        </div>

    </div>
  )
}

export default Table