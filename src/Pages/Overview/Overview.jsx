import React from 'react'
import Card from './Cards/Card'
import HeroCardItem from './refult/refult'
import "./Overview.scss"

const Overview = () => {
  return (
    <div className='Overview'>
      <div className="cards">
        <Card title="Unresolved" count="60" path="1" />
        <Card title="Overdue" count="16" path="2" />
        <Card title="Open" count="43" path='3' />
        <Card title="On hold" count="64" path='4' />
      </div>

      <div className="hero__cards">
        <div className="hero__cards-page">
          <h2>Today’s trends</h2>
          <p>as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className="hero__cards-page">
          <div className="days">
            <span></span>
            <p>Today</p>
          </div>
          <div className="days">
            <span className='second'></span>
            <p>Yesterday</p>
          </div>
        </div>
        <div className="hero__cards-page">
          <HeroCardItem title="Resolved" count="449" />
          <HeroCardItem title="Received" count="426" />
          <HeroCardItem title="Average first response time" count="33m" />
          <HeroCardItem title="Average response time" count="3h 8m" />
          <HeroCardItem title="Resolution within SLA" count="94%" />
        </div>
      </div>

      <div className="hero__page">
        <div className="hero__page-card">
          <div className="hero__page-top">
            <h4>Unresolved tickets</h4>
            <h5>View details </h5>
          </div>
          <p className='support'>Group: Support</p>
          <li>
            <h4>Waiting on Feature Request</h4>
            <p>4238</p>
          </li>
          <li>
            <h4>Awaiting Customer Response</h4>
            <p>1005</p>
          </li>
          <li>
            <h4>Awaiting Developer Fix</h4>
            <p>914</p>
          </li>
          <li>
            <h4>Pending</h4>
            <p>281</p>
          </li>
        </div>
        <div className="hero__page-card">
          <div className="hero__page-top">
            <h4>Tasks</h4>
            <h5>View all </h5>
          </div>
          <p className='support'>Today</p>
          <li>
            {/* <h4 className='create'>Create new task</h4> */}
            <input className='create' type="text" placeholder='create new task' />
            <a href="#">
            <button className='add'>add</button>
            </a>
          </li>
          <li>
          <div className='box'>
            <input  className='checkbox' type="checkbox" />
            <h4>Finish ticket update</h4>
          </div>

          <button className='urgent'>Urgent</button>
          </li>
          <li>
          <div className='box'>
            <input  className='checkbox' type="checkbox" />
            <h4>Create new ticket example</h4>
          </div>
            
          <button className='new'>new</button>
          </li>
          <li>
          <div className='box'>
            <input  className='checkbox' type="checkbox" />
            <h4>Update ticket report</h4>
          </div>
            <button className='default'>Default</button>
          </li>
        </div>
      </div>

    </div>
  )
}

export default Overview