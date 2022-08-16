import React,{useState, useContext} from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./disruption.scss";
import { Link } from 'react-router-dom';
import DisruptionContext from '../../components/contexts/DisruptionContext';
import axios from 'axios'
function Disruption() {

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