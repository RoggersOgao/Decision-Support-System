import React, {useState, useEffect,useRef} from 'react'
import "./dropdown.scss"
import {FaCaretDown} from 'react-icons/fa'

import countries from '../../countries'
function Dropdown({type,select}) {
  //  
  const [choose, setChoose] = useState('Choose')
    const [click, setClick] = useState(false)
  
    const menuRef = useRef()
    let data;

switch(type){
  case "typeOfOrganization":
    data = {
      options: ['University','Research Institute', 'College', 'Commission of Higher Education'],
    }
    break
  case "region":
    data = {
      options: ['Afica', 'South America', 'Middle East', 'Asia', 'Europe'],
    }
    break

  case 'country':
    data = {
      options: countries
    }
    break
  case 'rating':
    data = {
      options: ['HIC = high icome-country', 'UMIC = upper middle-income country', 'LMIC =  lower middle-income country', 'LIC = low-income country']
    }
    break
 case 'decisionDate':
  data ={
    options: ['Days','Weeks','Months', 'Years']
  } 
    break
  default:
}

    // const options = ['University','Research Institute', 'College', 'Commission of Higher Education']
    const handleClick = (e) => {
      e.preventDefault()
      setClick(!click)
    }


    useEffect(()=>{
      let handler = (e)=>{
        const el2 = menuRef.current.contains(e.target)
        if(!el2) {
          setClick(false)
        }
      }
      document.addEventListener("mousedown",handler)

      return () => {
        document.removeEventListener("mousedown", handler)
      }
      
    },[menuRef])

    
  return (
    <>
    <button onClick={handleClick} className="dropdownContainer">{choose} <FaCaretDown /></button>
    {click && (
      <ul className= "dropdownlist" ref={menuRef} >
        {data.options.map((option,index)=>(
      <li key={index} onClick={(e)=>{
        setChoose(option)
        select(option || '')
        setClick(false)
    }}>{option}</li>
        ))}
      
    </ul>
    )}
  </>
  )
}

export default Dropdown