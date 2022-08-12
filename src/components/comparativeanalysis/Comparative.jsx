import React, {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import "./comparative.scss"
import Dropdown from '../dropdown/Dropdown';
import { Link } from 'react-router-dom';


function Comparative() {

  const [comparativeList, setComparativeList] = useState([])
  const handleChange = (e) => {

    const data = [...comparativeList]
    const index = data.indexOf(e.currentTarget.value)

    if(index === -1){
      data.push(e.currentTarget.value)
    }
    else{
      data.splice(index,1)
    }

    setComparativeList(data)
  }


  //function to handle the repeat of components in the page

  const [number, setNumber] = useState(0)
  const handleChangeRpt = (e) =>{
    const valueOfRadio = +e.currentTarget.value
    setNumber(valueOfRadio)
  }

  let repeatArray = [...Array(number)]
  
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
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="1"/>
                        <label htmlFor="num">1</label>
                        </div>
                        <div className="formgroup">
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="2"/>
                        <label htmlFor="num">2</label>
                        </div>
                        <div className="formgroup">
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="3"/>
                        <label htmlFor="num">3</label>
                        </div>
                        <div className="formgroup">
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="4"/>
                        <label htmlFor="num">4</label>
                        </div>
                        <div className="formgroup">
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="5"/>
                        <label htmlFor="num">5</label>
                        </div>
                        <div className="formgroup">
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="6"/>
                        <label htmlFor="num">6</label>
                        </div>
                        <div className="formgroup">
                        <input onChange={handleChangeRpt}type="radio" name="number_radio" id="num" value="0"/>
                        <label htmlFor="num">None</label>
                        </div>
                            </div>

                    {repeatArray.map((item,index)=>(
                      <div className="organizationGroup" key={index}>
                      <div className="comparative__form--title">
                          Organization {index + 1} information
                      </div>
                              <div  className="comparative__form--formGroup">
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
                      <input onChange={handleChange} type="checkbox" name="mol" id="mol" value="Mode of Learning(Asynchronous)" />
                      <label htmlFor="mol">Mode of Learning(Asynchronous)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="atcst" id="atcst" value="Access to Connectivity(Students)" />
                      <label htmlFor="atcst">Access to Connectivity(Students)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="atcf" id="atcf" value="Access to Connectivity(Faculty)" />
                      <label htmlFor="atcf">Access to Connectivity(Faculty)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="atcsf" id="atcsf"  value="Access to Connectivity(Staff)"/>
                      <label htmlFor="atcsf">Access to Connectivity(Staff)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="adt" id="adt"  value="Access to Digital Tools"/>
                      <label htmlFor="adt">Access to Digital Tools</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="dcst" id="dcst" value="Digital Competences(Students)" />
                      <label htmlFor="dcst">Digital Competences(Students)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="dcf" id="dcf" value="Digital Competencies(Faculty)" />
                      <label htmlFor="dcf">Digital Competencies(Faculty)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="dcsf" id="dcsf"  value="Digital Competencies(Staff)"/>
                      <label htmlFor="dcsf">Digital Competencies(Staff)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="relms" id="relms"  value="Robustness of Existing Learning Management System"/>
                      <label htmlFor="relms">Robustness of Existing Learning Management System</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="soe" id="soe"  value="Stability of Electricity"/>
                      <label htmlFor="soe">Stability of Electricity</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name="sos" id="sos" value="Socialization of Students and Faculty" />
                      <label htmlFor="sos">Socialization of Students and Faculty</label>
                      </div>
                      </div>
  
  
  
                      </div>
  
  
                      <div className="comparative__form--title">
                          organization x summaries
                      </div>
                      <div className="radioGroup1">
                      
                      
                      <div className='solutiontitle'>
                                  This section collects summarized solutions for organization x disruptors. Write a summary of how organization x addressed the following disruptor categories.
                              </div>
                              {comparativeList.map((item, index)=>(
                        <div key={index}>        
                        <label htmlFor="">{item}</label>
                        <input type="text" name="" id="" placeholder='Your Answer' />
                        </div>
                              ))}
                        
                      </div>
                      </div>
                    ))}
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