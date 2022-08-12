import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./stakeholder.scss"
import { Link } from 'react-router-dom';

function Stakeholder() {

    const [temp, setTemp] = useState([]);

    function handleChange(e) {
    //    let a = e.currentTarget.value
    //    setTemp((temp)=>[...temp, a])

       const data = [...temp]
       const index = data.indexOf(e.currentTarget.value)

       if(index === -1){
        data.push(e.currentTarget.value)
       }
       else{
        data.splice(index, 1)
       }

       setTemp(data)
    }    
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
                            <input onChange={handleChange} type="checkbox" name="student" id="student"   value="Student"/>
                            <label htmlFor="student">Student</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="staff" id="staff" value="Staff"/>
                            <label htmlFor="staff">Staff</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="faculty" id="faculty" value="Faculty"/>
                            <label htmlFor="faculty">Faculty</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="bot" id="bot" value="Board of Trustees"/>
                            <label htmlFor="bot">Board of Trustees</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="hera" id="hera" value="Higher Education Regulatory Authority"/>
                            <label htmlFor="hera">Higher Education Regulatory Authority</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="investors" id="investors" value="Investors"/>
                            <label htmlFor="investors">Investors</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="tm" id="tm" value="Top Management"/>
                            <label htmlFor="tm">Top Management</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="suppliers" id="suppliers" value="Suppliers(Contractors)"/>
                            <label htmlFor="suppliers">Suppliers(Contractors)</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={handleChange} type="checkbox" name="moe" id="moe" value="Ministry of Education"/>
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

                                {temp.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item}</td>
                                    <td>
                                        <input type="radio" name={item} id={item} />
                                    </td>
                                    <td><input type="radio" name={item} id={item} /></td>
                                    <td>
                                    <input type="radio" name={item} id={item} />
                                    </td>
                                    <td>
                                    <input type="radio" name={item} id={item} />
                                    </td>
                                </tr>
                                ))}
                               
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