import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import "./comparative.scss"
import Dropdown from '../dropdown/Dropdown';
import { Link } from 'react-router-dom';

const n = 2
function Comparative() {
  return (
    <div className="homeContainer">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="homeContainer__content">
                <Navbar />

                <div className="comparative">
                   

                    <form action="" className="comparative__form">
                    <div className="comparative__form--title">
                        Comperative Analysis
                    </div>
                            <div className="comparative__group">
                            <div className='title'>
                                From the research you have conducted to support this decision making process, what number of organizations have faced similar disruption
                            </div>
                        
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="1"/>
                        <label htmlFor="num">1</label>
                        </div>
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="2"/>
                        <label htmlFor="num">2</label>
                        </div>
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="3"/>
                        <label htmlFor="num">3</label>
                        </div>
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="4"/>
                        <label htmlFor="num">4</label>
                        </div>
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="5"/>
                        <label htmlFor="num">5</label>
                        </div>
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="6"/>
                        <label htmlFor="num">6</label>
                        </div>
                        <div className="formgroup">
                        <input type="radio" name="number_radio" id="num" value="0"/>
                        <label htmlFor="num">None</label>
                        </div>
                            </div>

                    <div className="organizationGroup">
                    <div className="comparative__form--title">
                        Organization x_INFO
                    </div>
                            <div  className="organizationinfo__form--formGroup">
                      <label htmlFor="">What is the name of your organization?</label>
                      <input type="text" name="" id="" placeholder='Your Answer' />
                    </div>
                    <div className="comparative__form--formGroup">
                      <label htmlFor="">What is the type of your organization?</label>
                      <Dropdown type="typeOfOrganization"/>
                    </div>
                    <div className="comparative__form--formGroup">
                      <label htmlFor="">In which Region is your institution/university found in?</label>
                      <Dropdown type="region"/>
                    </div>
                    <div className="comparative__form--formGroup">
                      <label htmlFor="">In what country is your institution located in?</label>
                      <Dropdown type="country"/>
                    </div>
                    <div className="comparative__form--formGroup">
                      <label htmlFor="">Choose the economic rating of your country?</label>
                      <Dropdown type="rating"/>
                    </div>

                    <div className="disruption__form--formGroup">

                
                    <div className="radioGroup">
                    
                    <p className="radioGroup--heading">Choose all the group affected by the decision you seek to make.</p>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="mol" id="mol"  />
                        <label htmlFor="mol">Mode of Learning(Asynchronous)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="atcst" id="atcst" />
                        <label htmlFor="atcst">Access to Connectivity(Students)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="atcf" id="atcf" />
                        <label htmlFor="atcf">Access to Connectivity(Faculty)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="atcsf" id="atcsf" />
                        <label htmlFor="atcsf">Access to Connectivity(Staff)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="adt" id="adt" />
                        <label htmlFor="adt">Access to Digital Tools</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="dcst" id="dcst" />
                        <label htmlFor="dcst">Digital Competences(Students)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="dcf" id="dcf" />
                        <label htmlFor="dcf">Digital Competencies(Faculty)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="dcsf" id="dcsf" />
                        <label htmlFor="dcsf">Digital Competencies(Staff)</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="relms" id="relms" />
                        <label htmlFor="relms">Robustness of Existing Learning Management System</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="soe" id="soe" />
                        <label htmlFor="soe">Stability of Electricity</label>
                        </div>
                        <div className="radioGroup--1">
                        <input type="checkbox" name="sos" id="sos" />
                        <label htmlFor="sos">Socialization of Students and Faculty</label>
                        </div>
                    </div>



                    </div>
                    <div className="comparative__form--title">
                        organization x summaries
                    </div>
                    <div className='solutiontitle'>
                                This section collects summarized solutions for organization x disruptors. Write a summary of how organization x addressed the following disruptor categories.
                            </div>
                    <div  className="organizationinfo__form--formGroup">
                      <label htmlFor="">Access to Connectivity for students</label>
                      <input type="text" name="" id="" placeholder='Your Answer' />
                    </div>
                    <div  className="organizationinfo__form--formGroup">
                      <label htmlFor="">Digital Competences(Faculty)</label>
                      <input type="text" name="" id="" placeholder='Your Answer' />
                    </div>
                    </div>
                    <div className="buttonGroup">
                    <button type="submit" className="submit">Submit</button>
                </div>

                    </form>

                    <div className="buttonGroup1">
                      <Link to ='/disruption' className='link'><button type="button" className="btn">Back</button></Link>
                      <button type="button" className="btn">to Dashboard</button>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Comparative