import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
        <div className="homeContainer">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="homeContainer__content">
                <Navbar />
                <div className="landing">
                  <div className="top">
                    <div className="top__left">
                     <img src="/images/3156627.jpg" alt="" srcSet="" />
                    </div>
                    <div className="top__right">
                      <div className="top__right--text">
                        <div className="title">Data Collection</div>
                        <p className="text">
                          This section allows you to collect the data you have to help in the decision making process.
                        </p>
                        <Link to ='/organizationinfo' className='link'><div className="button">Organization Info</div></Link>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="bottom__left">
                    <div className="bottom__left--text">
                        <div className="title">Dashboard</div>
                        <p className="text">
                          With your data, our system showcases your information to support the decision making process.
                        </p>
                        <div className="button">More</div>
                      </div>
                    </div>
                    <div className="bottom__right">
                      <img src="/images/4905827.jpg" alt="" srcSet="" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Home