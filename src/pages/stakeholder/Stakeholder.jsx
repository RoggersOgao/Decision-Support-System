import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./stakeholder.scss"
import { Link } from 'react-router-dom';

function Stakeholder() {
  return (
    <div className="homeContainer">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="homeContainer__content">
                <Navbar />

            <div className="stakeholder">
                <form action="" className="stakeholder__form">

                    <div className="stakeholder__form--title">
                        stakeholder analysis
                    </div>


                    <div className="stakeholder__form--formGroup">
                        
                        <div className="radioGroup">
                        <p className="radioGroup--heading">Choose all the group affected by the decision you seek to make.</p>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="student" id="student"  />
                            <label htmlFor="student">Student</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="staff" id="staff" />
                            <label htmlFor="staff">Staff</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="faculty" id="faculty" />
                            <label htmlFor="faculty">Faculty</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="bot" id="bot" />
                            <label htmlFor="bot">Board of Trustees</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="hera" id="hera" />
                            <label htmlFor="hera">Higher Education Regulatory Authority</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="investors" id="investors" />
                            <label htmlFor="investors">Investors</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="tm" id="tm" />
                            <label htmlFor="tm">Top Management</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="suppliers" id="suppliers" />
                            <label htmlFor="suppliers">Suppliers(Contractors)</label>
                            </div>
                            <div className="radioGroup--1">
                            <input type="checkbox" name="moe" id="moe" />
                            <label htmlFor="moe">Ministry of Education</label>
                            </div>
                        </div>
                    </div>


                    <div className="stakeholder__form--title">
                        power interest matrix
                    </div>
                    <div className="matrixGroup">
                    <p className="matrixGroup--heading">Select the Power (Influence) - Interest for each stakeholder.</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>High Power, High Interest</td>
                                    <td>High Power, Low Interest</td>
                                    <td>Low Power, High Interest</td>
                                    <td>Low Power, Low Interest</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Students</td>
                                    <td>
                                        <input type="radio" name="student" id="student" />
                                    </td>
                                    <td><input type="radio" name="student" id="student" /></td>
                                    <td>
                                    <input type="radio" name="student" id="student" />
                                    </td>
                                    <td>
                                    <input type="radio" name="student" id="student" />
                                    </td>
                                </tr>
                                <tr>
                                <td>Faculty</td>
                                    <td>
                                        <input type="radio" name="faculty" id="faculty" />
                                    </td>
                                    <td><input type="radio" name="faculty" id="faculty" /></td>
                                    <td>
                                    <input type="radio" name="faculty" id="faculty" />
                                    </td>
                                    <td>
                                    <input type="radio" name="faculty" id="faculty" />
                                    </td>
                                </tr>
                                <tr>
                                <td>Top Management</td>
                                    <td>
                                        <input type="radio" name="tm" id="tm" />
                                    </td>
                                    <td><input type="radio" name="tm" id="tm" /></td>
                                    <td>
                                    <input type="radio" name="tm" id="tm" />
                                    </td>
                                    <td>
                                    <input type="radio" name="tm" id="tm" />
                                    </td>
                                </tr>
                                <tr>
                                <td>Ministry of Education</td>
                                    <td>
                                        <input type="radio" name="moe" id="moe" />
                                    </td>
                                    <td><input type="radio" name="moe" id="moe" /></td>
                                    <td>
                                    <input type="radio" name="moe" id="moe" />
                                    </td>
                                    <td>
                                    <input type="radio" name="moe" id="moe" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="buttonGroup">
                            <button type="submit" className="submit">Submit</button>
                        </div>
                </form>
                <div className="buttonGroup1">
                    
                <Link to ='/organizationinfo' className='link'><button type="button" className="btn">Back</button></Link>
                <Link to ='/disruption' className='link'><button type="button" className="btn">Explain your Disruptor</button></Link>
                </div>
            </div>
            </div>
            </div>
  )
}

export default Stakeholder