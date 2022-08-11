import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./disruption.scss";
import { Link } from 'react-router-dom';
function Disruption() {
  return (
    <div className="homeContainer">
    <div className="sidebar">
        <Sidebar />
    </div>
    <div className="homeContainer__content">
        <Navbar />

    <div className="disruption">
        <form action="" className="disruption__form">

            <div className="disruption__form--title">
                describe disruption
            </div>
            <div  className="disruption--formGroup">
                    <label htmlFor="">Describe the disruption you are currently facing. Statement should be clear. Ensure to include any facts. (100 words MAX)</label>
                    <input type="text" name="" id="" placeholder='Your Answer' />
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


            <div className="disruption__form--title">
                disruptor ranking
            </div>
            <div className="matrixGroup">
            <p className="matrixGroup--heading">Please rank the severity of the disruptor categories selected</p>
                <table className="table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Low</td>
                            <td>Moderate</td>
                            <td>High</td>
                            <td>Critical</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Access to Connectivity(Students)</td>
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
                        <td>Digital Competencies(Faculty)</td>
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
                        <td>Stability of Electricity</td>
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
                        <td>Socialization of Students and Faculty</td>
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
                <div className="disruption__form--title">
                    policies
                </div>
                <div className="yesNo">
                    <p className="yesNo--heading">Are there any policies in place to support this decision making process</p>
                    <div className="radioYgroup">
                    <input type="radio" name="yes_no" id="radio" />
                    <label htmlFor='radio'>Yes</label>
                    </div>
                    <div className="radioYgroup">
                    <input type="radio" name="yes_no" id="radio" />
                    <label htmlFor='radio'>No</label>
                    </div>

                </div>
                <div className="buttonGroup">
                    <button type="submit" className="submit">Submit</button>
                </div>
        </form>
        <div className="buttonGroup1">
        <Link to ='/stakeholder' className='link'><button type="button" className="btn">Back</button></Link>
        <Link to ='/comparative' className='link'><button type="button" className="btn">Examine Existing Solutions</button></Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Disruption