import React, {useState} from 'react'
import Dropdown from '../dropdown/Dropdown';

function Summnary({list,repeatArray}) {

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

  return (

    
    <div className="container">
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
                        {/* number of students */}
                        <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Number of students</label>
                      <input type="number" name="" id=""  />
                    </div>

                     {/* number of Faculty */}
                     <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Number of faculty</label>
                      <input type="number" name="" id=""  />
                    </div>

                     {/* number of Staff */}
                     <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Number of staff</label>
                      <input type="number" name="" id=""  />
                    </div>
                      <div className="disruption__form--formGroup">
  
                  
                      <div className="radioGroup">
                      
                      <p className="radioGroup--heading">Choose all the group affected by the decision you seek to make.</p>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`mol${index}`} id={`mol${index}`} value={`Mode of Learning(Asynchronous)${index + 1}`} />
                      <label htmlFor={`mol${index}`}>Mode of Learning(Asynchronous)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`atcst${index}`}  id={`atcst${index}`}  value="Access to Connectivity(Students)" />
                      <label htmlFor={`atcst${index}`}>Access to Connectivity(Students)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`atcf${index}`}  id={`atcf${index}`} value="Access to Connectivity(Faculty)" />
                      <label htmlFor={`atcf${index}`}>Access to Connectivity(Faculty)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`atcs${index}`}  id={`atcs${index}`}  value="Access to Connectivity(Staff)"/>
                      <label htmlFor={`atcs${index}`} >Access to Connectivity(Staff)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`adt${index}`}  id={`adt${index}`}   value="Access to Digital Tools"/>
                      <label htmlFor={`adt${index}`}>Access to Digital Tools</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`dcst${index}`}  id={`dcst${index}`}  value="Digital Competences(Students)" />
                      <label htmlFor={`dcst${index}`}>Digital Competences(Students)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`dcf${index}`}  id={`dcf${index}`} value="Digital Competencies(Faculty)" />
                      <label htmlFor={`dcf${index}`}>Digital Competencies(Faculty)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`dcsf${index}`}  id={`dcsf${index}`} value="Digital Competencies(Staff)"/>
                      <label htmlFor={`dcsf${index}`} >Digital Competencies(Staff)</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`relms${index}`} id={`relms${index}`} value="Robustness of Existing Learning Management System"/>
                      <label htmlFor={`relms${index}`}>Robustness of Existing Learning Management System</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`soe${index}`} id={`soe${index}`} value="Stability of Electricity"/>
                      <label htmlFor={`soe${index}`}>Stability of Electricity</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`sos${index}`}  id={`sos${index}`} value="Socialization of Students and Faculty" />
                      <label htmlFor={`sos${index}`}>Socialization of Students and Faculty</label>
                      </div>
                      </div>
  
  
  
                      </div>
  
                      <div className="comparative__form--title">
                          organization {index +1} summaries
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
    </div>
  )
}

export default Summnary