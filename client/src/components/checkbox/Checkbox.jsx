import React, {useState} from 'react'
function Checkbox(type, select) {

    const [selected, setSelected] = useState([])

    const handleChange = (e) => {
        setSelected(e.currentTarget.value)// string
        select(e.currentTarget.value)
    }
let data;
    switch(type){
        case "disruption":
          data = {
            options: ['Mode of Learning(Asynchronous)','Access to Connectivity(Students)','Access to Connectivity(Faculty)','Access to Connectivity(Staff)','Access to Digital Tools','Digital Competences(Students)','Digital Competencies(Faculty)','Digital Competencies(Staff)','Robustness of Existing Learning Management System','Stability of Electricity','Socialization of Students and Faculty'],
          }
          
          break
        
        default:
      }
  return (
    <div className="radioGroup">

        
                <p className="radioGroup--heading">{data.title}</p>
                    <div className="radioGroup--1">

                        {data.options.map((item, index)=>(
                    <>
                    <input 
                    key={index}
                    onChange={handleChange} 
                    type="checkbox" 
                    name={item} 
                    id={item} 
                    checked={selected === {item}}
                    value={item}
                    />

                    <label htmlFor={item}>{item}</label>
                    </>
                        ))}
                    </div>
                    
                </div>
  )
}

export default Checkbox