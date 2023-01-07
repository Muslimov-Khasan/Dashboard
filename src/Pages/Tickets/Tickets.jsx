import React from 'react'
import Table from './Tables/Table'
import "./Tickets.scss"
import Icon1 from "./../../Assists/Img/1.png"
import Icon2 from "./../../Assists/Img/2.png"
import Icon3 from "./../../Assists/Img/3.png"
import Icon4 from "./../../Assists/Img/4.png"
import Icon5 from "./../../Assists/Img/5.png"
import Icon6 from "./../../Assists/Img/6.png"
import Icon7 from "./../../Assists/Img/7.png"
import Icon8 from "./../../Assists/Img/8.png"

const Tickets = () => {
  return (
    <div className="tickets">
      <div className="ticket__header">
        <h3>All tickets</h3>
        <div className="sort">
          <span><i class="fa-solid fa-sort"></i>
            sort
          </span>
          <span>
            <i class="fa-solid fa-filter"></i>
            filter
          </span>
        </div>
      </div>

      <div className="ticket__table">
        <Table
          icon={Icon1} 
          title="Contact Email not Linked"
          titleInfo="Updated 1 day ago"
          name="Tom Cruise"
          nameInfo="on 24.05.2019"
          date="May 26, 2019"
          dateInfo="6:30 PM"
          button="High"
        />
        <Table
          icon={Icon2} 
          title="Adding Images to Featured Posts"
          titleInfo="Updated 1 day ago"
          name="Matt Damon"
          nameInfo="May 26, 2019"
          date="8:00 AM"
          dateInfo="6:30 PM"
          button="low"

        />
        <Table
          icon={Icon3} 
          title="When will I be charged this month?"
          titleInfo="Updated 2 day ago"
          name="Christian Bale"
          nameInfo="on 24.05.2019"
          date="May 25, 2019"
          dateInfo="5:00 PM"
          button="Normal"
        />
        <Table
          icon={Icon4} 
          title="Unable to add replies"
          titleInfo="Updated 2 days ago"
          name="Henry Cavil"
          nameInfo="on 24.05.2019"
          date="May 25, 2019"
          dateInfo="May 25, 2019"
          button="High"
        />
        <Table
          icon={Icon5} 
          title="Payment not going through"
          titleInfo="Updated 1 day ago"
          name="Tom Cruise"
          nameInfo="on 24.05.2019"
          date="May 26, 2019"
          dateInfo="6:30 PM"
          button="High"
        />
        <Table
          icon={Icon6} 
          title="Unable to add replies"
          titleInfo="Updated 1 day ago"
          name="Tom Cruise"
          nameInfo="on 24.05.2019"
          date="May 26, 2019"
          dateInfo="6:30 PM"
          button="High"
        />
        <Table
          icon={Icon7} 
          title="Downtime since last week"
          titleInfo="Updated 1 day ago"
          name="Tom Cruise"
          nameInfo="on 24.05.2019"
          date="May 26, 2019"
          dateInfo="6:30 PM"
          button="High"
        />
        <Table
          icon={Icon8} 
          title="Referral Bonus"
          titleInfo="Updated 1 day ago"
          name="Tom Cruise"
          nameInfo="on 24.05.2019"
          date="May 26, 2019"
          dateInfo="6:30 PM"
          button="High"
        />
      </div>
    </div>
  )
}

export default Tickets