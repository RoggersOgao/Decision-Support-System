import React ,{useState} from 'react'
import "./radio.scss"
function Radio({type, select}) {

    const [selected, setSelected] = useState('')
    //create a function to handle change when a radio button is checked


    const handleChange = (e) => {
        setSelected(e.currentTarget.value)// string
        select(e.currentTarget.value)
        
    }



    let data;
  
    switch(type){
        case 'finalDecision':
            data = [{
                   name:'finalDecision',
                   id:'senate',
                   options:'Senate',
                   value:'senate',
                },
                {
                    name:'finalDecision',
                    id:'council',
                    options:'Council',
                    value:'council',
                },
                {
                    name:'finalDecision',
                    id:'committee',
                    options:'committee',
                    value:'committee', 
                }
            ]
            break
            case 'ratification':
            data = [{
                   name:'ratification',
                   id:'yes',
                   options:'Yes',
                   value:'yes',
                },
                {
                    name:'ratification',
                    id:'no',
                    options:'No',
                    value:'no',
                }
            ]
            break
            case 'organization':
            data = [{
                   name:'organization',
                   id:'ra',
                   options:'Regulatory Authority',
                   value:'Regulatory Authority',
                   class:"organization"
                },
                {
                    name:'organization',
                    id:'moe',
                    options:'Ministry of Education',
                    value:'Ministry of Education',
                    class:"organization"
                },
                {
                    name:'organization',
                    id:'ofp',
                    options:'Office of the President/Prime Minister',
                    value:'Office of the President/Prime Minister',
                    class:"organization"
                }
            ]
            break
        default:
            break
    }
  return (

    <div className="container">
{data.map((item,index)=> (
    <div className={`board ${item.class}`} key={index}>   

            <div className='checkboxItems'>
                <input 
                type="radio" 
                className='radiobuttonGroup'
                name={item.name}
                id={item.id} 
                value={item.value}
                checked={selected === `${item.value}`}
                onChange={handleChange}
                
                
                />
                <label htmlFor={item.id}>{item.options}</label>
            </div>
    </div>
        ))}
    </div>
    
  )
}

export default Radio