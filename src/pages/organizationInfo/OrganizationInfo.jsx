import React, {useState, useEffect} from 'react'
import "./organizationInfo.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Dropdown from '../../components/dropdown/Dropdown';
import Radio from '../../components/radioButton/Radio';
import { Link } from 'react-router-dom';
function OrganizationInfo() {

  return (
    <div className="homeContainer">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="homeContainer__content">
                <Navbar />
                <div className="organizationinfo">
                  <form action="" className="organizationinfo__form">

                    <div className="organizationinfo__form--title">
                      organization information
                    </div>
                    <div  className="organizationinfo__form--formGroup">
                      <label htmlFor="">What is the name of your organization?</label>
                      <input type="text" name="" id="" placeholder='Your Answer' />
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">What is the type of your organization?</label>
                      <Dropdown type="typeOfOrganization"/>
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">In which Region is your institution/university found in?</label>
                      <Dropdown type="region"/>
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">In what country is your institution located in?</label>
                      <Dropdown type="country"/>
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Choose the economic rating of your country?</label>
                      <Dropdown type="rating"/>
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Who need to make the final decision?</label>
                      <Radio type="finalDecision" />
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Does this decision need to be ratified by an external organization?</label>
                      <Radio type="ratification" />
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Choose the organization that needs to ratify the decision?</label>
                      <Radio type="organization" />
                    </div>
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">By when do you need to make the decision </label>
                      <div className="dateGroup">
                        <input type="date" name="" id="" />
                      </div>
                    </div>

                    <div className="buttonGroup">
                      <button type="submit" className="submit">Submit</button>
                    </div>
                  </form>



                  <div className="buttonGroup">
                  <Link to ='/stakeholder' className='link'><button type="button" className="btn">Stakeholder Analysis</button></Link>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default OrganizationInfo