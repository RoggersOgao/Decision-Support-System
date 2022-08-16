import React, {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import "./comparative.scss"

import { Link } from 'react-router-dom';
import Summnary from '../summary/Summnary';


function Comparative() {

  

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

                    
                    <Summnary list={number} repeatArray={repeatArray}/>

                   
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