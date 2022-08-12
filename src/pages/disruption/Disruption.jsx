import React,{useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./disruption.scss";
import { Link } from 'react-router-dom';
function Disruption() {

    const [list, setList] = useState([])
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
                        {list.map((items,index)=>(
                        <tr key={index}>
                            <td>{items}</td>
                            <td>
                                <input type="radio" name={items} id={items} />
                            </td>
                            <td><input type="radio" name={items} id={items} /></td>
                            <td>
                            <input type="radio" name={items} id={items} />
                            </td>
                            <td>
                            <input type="radio" name={items} id={items} />
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