import React from 'react'
import "./sidebar.scss"
import {FaHome, FaInfo, FaChartLine, FaExclamationTriangle, FaChartPie} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__logo">
                <Link to='/' className='link'><FaHome /> IntelDSS</Link>
        </div>

        <div className="sidebar__list">
            <div className="sidebar__list--title">DataCollection</div>
            <div className="sidebar__list--items">
                   <div className="item__1">
                      <NavLink to='/organizationinfo' className='link'><FaInfo size={18}/> Organization Info </NavLink>
                    </div>
                   <div className="item__2">
                         <NavLink to='/stakeholder' className="link"><FaChartLine size={18}/> Stakeholder analytics</NavLink>
                      </div>
                   <div className="item__3">
                   <NavLink to='/disruption' className='link'><FaExclamationTriangle size={18}/> Disruption </NavLink>
                    </div>
                    <div className="item__4">
                    <NavLink to='/comparative' className='link'><FaChartPie size={18}/> Comperative Analysis</NavLink>
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