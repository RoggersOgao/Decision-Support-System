import React, {useState, useContext, useEffect} from 'react'
import "./organizationInfo.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Dropdown from '../../components/dropdown/Dropdown';
import Radio from '../../components/radioButton/Radio';
import { Link } from 'react-router-dom';
import OrganizationContext from '../../components/contexts/OrganizationContext';


function OrganizationInfo() {

//declaring the context



const {handleAdd, dispatch} = useContext(OrganizationContext)

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

 console.log(form)
const [name, setName] = useState("")
const [type, setType] = useState("")
const [region, setRegion] = useState("")
const [country, setCountry] = useState("")
const [rating, setRating] = useState("")
const [entity, setEntity] = useState("")
const [number, setNumber] = useState("")
const [decision, setDecision] = useState("")
const [decision2, setDecision2] = useState("")
const [decisionDate, setDecisionDate] = useState("")
const [numberG, setNumberG] = useState("")
const [globalError, setGlobalError] = useState("")



const handleNegative = (e) => {
 

  if(e.target.value <= 0){
    setNumber("Please enter a number that is greater than 0")
  }else{
    setNumber(null)
  }
}

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

const handleentity = (val) => {
  const {entity} = form
  if (entity !== '' ){
    setEntity(null)
  }
}

const handleDecisionRatification = (val) => {
  const {decisionRatification} = form
  if (decisionRatification !== ''){
    setDecision(null)
  }
}

const handleorganizationRatifier = (val) => {
  const {organizationRatifier} = form
  if(organizationRatifier !== ''){
    setDecision2(null)
  }
}

const handledecisionDate = (val) => {
  const {decisionDate} = form
  if(decisionDate !== ''){
    setDecisionDate(null)
  }
}

const handleNumber = (e) => {
const {number} = form
  if(number !== ''){
    setNumberG(null)
  }
  
}

const handleChange = (e) => {
 const { 
  
  NoStudents,
  NoFaculty,
  NoStaff,

} = form

// if (organizationName !== '' && organizationType !== '' && organizationRegion !== '' && country !== '' && economicRating !== '' && entity !== '' ){
//   handleAdd(form)
// }
  

    if(e.target.value === ''){
      setName(null)
    }
    else if(e.target.value !== '' && e.target.value.length <= 3 ){
      setName("The Name should be atleast 3 chars")
    }
    else if(e.target.value.length > 3){
      setName(null)
    }
   
    
    console.log(type)
}
const handleSubmit = (e) =>{
  e.preventDefault()

  const {organizationName,
    organizationType,
    organizationRegion,
    country,
    economicRating,
    NoStudents,
    NoFaculty,
    NoStaff,
    entity,
    decisionRatification,
    organizationRatifier,
    decisionDate,
    number,
  } = form

  
    if (!organizationName || organizationName === ''){
      setName("Please select the name of your organization")
    }
    if (!organizationType || organizationType === ''){
      setType("Please select the type of your organization")
    }
    if (!organizationRegion || organizationRegion === ''){
      setRegion("Please select the region of your organization")
    }
    if (!country || country === ''){
      setCountry("Please select the country")
    }
    if (!economicRating || economicRating === ''){
      setRating("Please select the rating")
    }
    if (!entity || entity === ''){
      setEntity("Please select an option!!")
    }
    if (!decisionRatification || decisionRatification === ''){
      setDecision("Please select an option!!")
    }
    if (!organizationRatifier || organizationRatifier === ''){
      setDecision2("Please select an option!!")
    }
    if (!decisionDate || decisionDate === ''){
      setDecisionDate("please select an Option!!")
    }
    if(!number || number === ''){
      setNumberG("Please set a number!!")
    }
    if (organizationName !== '' && organizationType !== '' && organizationRegion !== '' && country !== '' && economicRating !== '' && entity !== '' ){
      handleAdd(form)
      setForm({})
    }
    else{
      setGlobalError("Please fill out all the required fields before submitting the Form!!")
    }
   
}

  return (
    <div className="homeContainer">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="homeContainer__content">
                <Navbar />
                <div className="organizationinfo">
                  <form action="" className="organizationinfo__form" onSubmit={handleSubmit} >

                    <div className="organizationinfo__form--title">
                      organization information
                    </div>


                    {/* organization name */}
                    <div  className="organizationinfo__form--formGroup">
                      <label htmlFor="">What is the name of your organization? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <input  
                      type="text" 
                      name="" 
                      id="" 
                      placeholder='Your Answer'
                      value={form.organizationName || ''}
                      onChange={(e)=>{setField('organizationName', e.target.value); handleChange(e)}}
                      
                      /> 
                    <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{name}</span>
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
                      <label htmlFor="">Number of students </label>
                      <input type="number" name="" id="" value={form.NoStudents || ""}onChange={(val)=> setField('NoStudents', +val.target.value)} />
                    </div>

                     {/* number of Faculty */}
                     <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Number of faculty </label>
                      <input type="number" name="" id="" value={form.NoFaculty || ""} onChange={(val)=> setField('NoFaculty', +val.target.value)} />
                    </div>

                     {/* number of Staff */}
                     <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Number of staff </label>
                      <input type="number" name="" id="" value={form.NoStaff || "" }onChange={(val)=> setField('NoStaff', +val.target.value)} />
                    </div>
                      
                    {/* entity for making the decision */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Who need to make the final decision? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <Radio type="finalDecision" select={(val)=>{setField('entity', val); handleentity(val)}}/>
                      <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{entity}</span>
                    </div>

                    {/* yes or no decision ratification */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Does this decision need to be ratified by an external organization? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <Radio type="ratification" select={(val)=>{setField('decisionRatification', val); handleDecisionRatification(val)}}/>
                      <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{decision}</span>
                    </div>

                    {/* organization ratifier */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="">Choose the organization that needs to ratify the decision? <span style={{color:"red", fontSize:"16px"}}>* </span></label>
                      <Radio type="organization" select={(val)=>{setField('organizationRatifier', val); handleorganizationRatifier(val)}}/>
                      <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{decision2}</span>
                    </div>

                      {/* date */}
                    <div className="organizationinfo__form--formGroup">
                      <label htmlFor="date">By when do you need to make the decision <span style={{color:"red", fontSize:"16px"}}>* </span> </label>
                      <div className="dateGroup">
                        <div className="dateGroup--row1">
                        <p className="dateGroup-label">(Days|Weeks|Months)</p>
                      <Dropdown 
                          type="decisionDate" 
                          select={(val)=>{setField('decisionDate',val); handledecisionDate(val)}}/>

                        </div>
                        <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{decisionDate}</span>

                        {/* number input */}
                        <div className="dateGroup--row1">
                        <p className="dateGroup-label">(Number of choice above) </p>
                      <input type="number" name="" id=""value ={form.number || ""} onChange={(e) => {setField('number',+e.target.value); handleNegative(e); handleNumber(e)}}/>
                        </div>
                        <span style={{color:"red", fontSize:"11px", marginTop:"10px", display:"block"}}>{number}</span>
                        <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{numberG}</span>
                      </div>
                    </div>

                    <div className="buttonGroup">
                      <button type="submit" className="submit">Submit</button>
                    </div>

                    <span style={{color:"red", fontSize:"11px", marginTop:"10px"}}>{globalError}</span>
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