import React,{useState, useContext} from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./disruption.scss";
import { Link } from 'react-router-dom';
import DisruptionContext from '../../components/contexts/DisruptionContext';
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
function Disruption() {
    const navigate = useNavigate()
    const {handleAddDisruption}= useContext(DisruptionContext)

    const [list, setList] = useState([])
    const [disruptionData, setDisruptionData] = useState({})
    const [message, setMessage] = useState('')
    const [file, setFile] = useState(null)
///creating an object setField to store all the data 



const setField = (field, value) => {
    setDisruptionData({
        ...disruptionData,
        [field]:value
    })
}
let index = 1;
console.log(disruptionData)

    const handleError =(e) => {
        if(e.target.value === ''){
            setMessage(null)
        }else if (e.target.value !== '' && e.target.value.length > 400){
            setMessage("The description should be less than 100 words")
        }else{
            setMessage(null)
        }
        // setText(e.target.value)

    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file", file)
            setField("file",filename)

            try{
                // await axios.post("http://localhost:5000/api/upload", data)
            }
            catch(err){
                
            }

        }

        try {
            //function to handle submit
            handleAddDisruption(disruptionData)
            navigate("/comparative")

        } catch (error) {
        console.log(error)
        }

    }

    const handleChange = (e) => {

        const data = [...list]

        const index = data.indexOf(e.currentTarget.value)

        if(index === -1){
            data.push(e.currentTarget.value)
        }
        else{
            data.splice(index, 1)
        }
        setList(data)
    }
  return (
    <div className="homeContainer">
    <div className="sidebar">
        <Sidebar />
    </div>
    <div className="homeContainer__content">
        <Navbar />

    <div className="disruption">
        <form action="" className="disruption__form" onSubmit={handleSubmit}>

            <div className="disruption__form--title">
                describe disruption
            </div>
            <div  className="disruption--formGroup">
                    <label htmlFor="">Describe the disruption you are currently facing. Statement should be clear. Ensure to include any facts. (100 words MAX)<span style={{color:"red"}}>*</span></label>
                    <textarea name="" id="" placeholder='Your Answer'  rows={4} onChange={(e)=>{setField('disruptionDescription', e.target.value); handleError(e)}} style={{padding:".6rem"}} />

                    <div className="message" style={{color: "red", fontSize:"12px"}}>{message}</div>
                </div>
                

                <div className="stakeholder__form--formGroup">



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
                        
                        {/* <div className="radioGroup">
                        <p className="radioGroup--heading">Choose all the group affected by the decision you seek to make.</p>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('student','student');handleChange(e)}} type="checkbox" name="student" id="student"   value="Student"/>
                            <label htmlFor="student">Student</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('staff','staff');handleChange(e)}}  type="checkbox" name="staff" id="staff" value="Staff"/>
                            <label htmlFor="staff">Staff</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('faculty','faculty');handleChange(e)}}  type="checkbox" name="faculty" id="faculty" value="Faculty"/>
                            <label htmlFor="faculty">Faculty</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('bot','board of trustees');handleChange(e)}}  type="checkbox" name="bot" id="bot" value="Board of Trustees"/>
                            <label htmlFor="bot">Board of Trustees</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('hera','Higher Education Regulatory Authority');handleChange(e)}}  type="checkbox" name="hera" id="hera" value="Higher Education Regulatory Authority"/>
                            <label htmlFor="hera">Higher Education Regulatory Authority</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('investors','investors');handleChange(e)}}  type="checkbox" name="investors" id="investors" value="Investors"/>
                            <label htmlFor="investors">Investors</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('tm','top management');handleChange(e)}}  type="checkbox" name="tm" id="tm" value="Top Management"/>
                            <label htmlFor="tm">Top Management</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('suppliers','suppliers');handleChange(e)}}  type="checkbox" name="suppliers" id="suppliers" value="Suppliers(Contractors)"/>
                            <label htmlFor="suppliers">Suppliers(Contractors)</label>
                            </div>
                            <div className="radioGroup--1">
                            <input onChange={(e)=>{setField('moe','Ministry of Education');handleChange(e)}}  type="checkbox" name="moe" id="moe" value="Ministry of Education"/>
                            <label htmlFor="moe">Ministry of Education</label>
                            </div>
                        </div> */}
                    </div>



                    <div className="stakeholder__form--title">
                        disruption ranking
                    </div>
                    <div className="matrixGroup">
                    <p className="matrixGroup--heading">Please rank the severity of the disruptor categories selected.</p>
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

                                {list.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item}</td>
                                    <td>
                                        <input type="radio" name={item} id={item} onChange={(e)=>setField(`${item}_`.replace(/\s+/g, '_').toLowerCase().replace(/[{()}]/g, '_'), 'High Power, High Interest')}/>
                                    </td>
                                    <td><input type="radio" name={item} id={item} onChange={(e)=>setField(`${item}_`.replace(/\s+/g, '_').toLowerCase().replace(/[{()}]/g, '_'), 'High Power, Low Interest')}/></td>
                                    <td>
                                    <input type="radio" name={item} id={item} onChange={(e)=>setField(`${item}_`.replace(/\s+/g, '_').toLowerCase().replace(/[{()}]/g, '_'), 'Low Power, High Interest')}/>
                                    </td>
                                    <td>
                                    <input type="radio" name={item} id={item} onChange={(e)=>setField(`${item}_`.replace(/\s+/g, '_').toLowerCase().replace(/[{()}]/g, '_'), 'Low Power, Low Interest')}/>
                                    </td>
                                </tr>
                                ))}
                               
                            </tbody>
                        </table>
                        </div>
                <div className="disruption__form--title">
                    policies
                </div>
                <div className="yesNo">
                    <p className="yesNo--heading">Are there any policies in place to support this decision making process</p>
                    <div className="radioYgroup">
                    <input type="radio" name="yes_no" id="radio" onChange={(e)=>setField('policies', e.currentTarget.value)}/>
                    <label htmlFor='radio'>Yes</label>
                    </div>
                    <div className="radioYgroup">
                    <input type="radio" name="yes_no" id="radio" onChange={(e)=>setField('policies', e.currentTarget.value)}/>
                    <label htmlFor='radio'>No</label>
                    </div>

                </div>

                <div className="yesNo">

                            <label htmlFor="file" className='yesNo--heading'>Please upload your policies</label>
                            <input type="file" name="" id="file" onChange={(e)=>setFile(e.target.files[0])}/>

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