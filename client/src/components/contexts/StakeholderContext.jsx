import {createContext, useState, useEffect} from 'react'

import axios from 'axios'
const StakeholderContext = createContext()

export const StakeholderProvider = ({children}) => {


    const [stakeholder, setStakeholder] = useState([])

    const Stakedss = axios.create({
        baseURL: "http://localhost:5000/api/"
    })


    const handleAddStakeholder = (form) => {


        const response = Stakedss.post(`/stakeholders`, form)
        setStakeholder(response.data)
        
    }
//creating a function to handle get requests from the application.
    return <StakeholderContext.Provider value={{
        handleAddStakeholder,
    }}>
        {children}
    </StakeholderContext.Provider>
}

export default StakeholderContext