import React, {useState} from 'react'
import Dropdown from '../dropdown/Dropdown';


function Summnary({list,repeatArray,comparativeList,handleChange}) {

    

 

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  
  const setField = (field, value) => {
  
    setForm({
      ...form,
      [field]:value
    })
  
    if(!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
   }


const [type, setType] = useState("")
const [region, setRegion] = useState("")
const [country, setCountry] = useState("")
const [rating, setRating] = useState("")
  const handletype =(val) =>{
    const {organizationType} = form
    if(organizationType !== ''){
      setType(null)
    } 
  }
  const handleRegion =(val) =>{
    const {organizationRegion} = form
    if (organizationRegion !== ''){
      setRegion(null)
    } 
  }
  const handleCountry =(val) =>{
    const {country} = form
    if (country !== ''){
      setCountry(null)
    } 
  }
  const handleEconomicRating = (val) => {
    const {economicRating} = form
    if (economicRating !== ''){
      setRating(null)
    } 
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
                      
                    {/* organization type */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">What is the type of your organization? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                          <Dropdown 
                          type="typeOfOrganization" 
                          select={(val)=>{setField('organizationType',val); handletype(val)}}/>

                            <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{type}</span>
                    </div>

                    {/* organization region */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">In which Region is your institution/university found in? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <Dropdown 
                      type="region" 
                      select={(val)=>{setField('organizationRegion',val); handleRegion(val)}}/>
                      <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{region}</span>
                    </div>

                    {/* Country Located in */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">In what country is your institution located in? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <Dropdown type="country"
                      select={(val)=>{setField('country',val);handleCountry(val)}}
                      />
                      <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{country}</span>
                    </div>

                    {/* economic rating */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Choose the economic rating of your country? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <Dropdown 
                      type="rating"
                      select={(val)=>{setField('economicRating',val); handleEconomicRating(val)}}
                      />
                      <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{rating}</span>
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

                      {/* mode of learning  */}
                      <div className="radioGroup--1">
                      <input onChange={(e)=>handleChange(e)} type="checkbox" name={`mol${index}`} id={`mol${index}`} value={`Mode of Learning(Asynchronous): organization ${index + 1}`} />
                      <label htmlFor={`mol${index}`}>Mode of Learning(Asynchronous)</label>
                      </div>
                      {/* access to connectivity (students) */}
                      <div className="radioGroup--1">
                      <input onChange={(e, index)=>handleChange(e, index)} type="checkbox" name={`atcst${index}`}  id={`atcst${index}`}  value={`Access to Connectivity(Students): organization ${index + 1}`} />
                      <label htmlFor={`atcst${index}`}>Access to Connectivity(Students)</label>
                      </div>

                      {/* Access to connectivity (faculty) */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`atcf${index}`}  id={`atcf${index}`} value={`Access to Connectivity(Faculty): organization ${index + 1}`} />
                      <label htmlFor={`atcf${index}`}>Access to Connectivity(Faculty)</label>
                      </div>

                      {/* access to connectivity (Staff) */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`atcs${index}`}  id={`atcs${index}`}  value={`Access to Connectivity(Staff): organization:${index + 1}`}/>
                      <label htmlFor={`atcs${index}`} >Access to Connectivity(Staff)</label>
                      </div>

                      {/* Access to Digital tools */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`adt${index}`}  id={`adt${index}`}   value={`Access to Digital Tools: organization ${index + 1}`}/>
                      <label htmlFor={`adt${index}`}>Access to Digital Tools</label>
                      </div>

                      {/* digital competences (students) */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`dcst${index}`}  id={`dcst${index}`}  value={`Digital Competences(Students): organization ${index + 1}`} />
                      <label htmlFor={`dcst${index}`}>Digital Competences(Students)</label>
                      </div>

                      {/* Digital competencies(faculty) */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`dcf${index}`}  id={`dcf${index}`} value={`Digital Competencies(Faculty): organization ${index + 1}`} />
                      <label htmlFor={`dcf${index}`}>Digital Competencies(Faculty)</label>
                      </div>
                      
                      {/* digital competences (staff) */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`dcsf${index}`}  id={`dcsf${index}`} value={`Digital Competencies(Staff): organization ${index + 1}`}/>
                      <label htmlFor={`dcsf${index}`} >Digital Competencies(Staff)</label>
                      </div>

                      {/* Robustness of existing learning management system */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`relms${index}`} id={`relms${index}`} value={`Robustness of Existing Learning Management System: organization ${index + 1}`}/>
                      <label htmlFor={`relms${index}`}>Robustness of Existing Learning Management System</label>
                      </div>

                      {/* Stability of Electricity */}
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`soe${index}`} id={`soe${index}`} value={`Stability of Electricity: organization ${index + 1}`}/>
                      <label htmlFor={`soe${index}`}>Stability of Electricity</label>
                      </div>
                      <div className="radioGroup--1">
                      <input onChange={handleChange} type="checkbox" name={`sos${index}`}  id={`sos${index}`} value={`Socialization of Students and Faculty: organization ${index + 1}`} />
                      <label htmlFor={`sos${index}`}>Socialization of Students and Faculty</label>
                      </div>
                      </div>
  
  
  
                      </div>
  
                      
                      </div>

                    ))}

<div className="comparative__form--title">
                          organization summaries
                      </div>
                      <div className="radioGroup1">
                      
                      
                      <div className='solutiontitle'>
                                  This section collects summarized solutions for organization's disruptors. Write a summary of how organization x addressed the following disruptor categories.
                              </div>
                              {comparativeList.map((item, index)=>(
                                    <div key={index}>        
                                    <label htmlFor="">{item}</label>
                                    <input type="text" name="" id="" placeholder='Your Answer' />
                                    </div>
                                          ))}
                              
                        
                      </div>
    </div>
  )
}

export default Summnary