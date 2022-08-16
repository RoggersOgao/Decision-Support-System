import {createContext, useState} from 'react'
import axios from 'axios'
const DisruptionContext = createContext()


export const DisruptionProvider = ({children}) => {


    const [disruptionData, setDisruptionData] = useState([]) 


    const dssDisruption = axios.create({
        baseURL:"http://localhost:5000/api/",
        header:{
            'content-type':'application/json'
        }
    })

    
    const handleAddDisruption = async(formData) => {

        const response = dssDisruption.post(`/disruptions`, formData)

        setDisruptionData(response.data)
    }
    return <DisruptionContext.Provider value={{
        handleAddDisruption
    }}> 

        {children}
        
    </DisruptionContext.Provider>
}

export default DisruptionContext