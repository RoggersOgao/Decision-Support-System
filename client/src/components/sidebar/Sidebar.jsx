import React from 'react'
import "./sidebar.scss"
import {FaHome, FaInfo, FaChartLine, FaExclamationTriangle, FaChartPie} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar__logo">
        <div className="sidebar__logo--content">
          <Link to='/' className='sidebarLogo'>
        <div className="sidebarLogo--icon"><FaHome /></div>
        <div className="sidebarLogo--name">IntelDSS</div>
        </Link>
        </div>
        <div className="sidebar__logo--menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="sidebar__list">
      <div className="sidebar__list--title">DataCollection</div>

      <div className="sidebar__list--items">
                   <div className="item--1">
                    <Link to='/organizationinfo' className='sidebarlink'>
                    <div className="item--1--icon"><FaInfo /></div>
                    <div className="item--1--name">Organization Info</div>
                    </Link>
                   </div>
                   <div className="item--2">
                   <Link to='/stakeholder' className='sidebarlink'>
                   <div className="item--2--icon"><FaChartLine /></div>
                    <div className="item--2--name">Stakeholder</div>
                    </Link>
                   </div>

                   <div className="item--3">
                    <Link to='/disruption' className='sidebarlink'>
                   <div className="item--3--icon"><FaExclamationTriangle /></div>
                    <div className="item--3--name">Disruption</div>
                    </Link>
                   </div>
                   <div className="item--4">
                    <Link to='/comparative' className='sidebarlink'>
                   <div className="item--4--icon"><FaChartPie /></div>
                    <div className="item--4--name">Comperative Analysis</div>
                    </Link>
                   </div>

            </div>
            <div className="sidebar__list--title">
                Dashboard
            </div>
            <div className="sidebar__list--title">
                Guide
            </div>
      </div>
    </div>
  )
}

export default Sidebar