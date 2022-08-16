import {createContext, useState, useEffect} from 'react'

import axios from 'axios'
const OrganizationContext = createContext()

export const OrganizationProvider = ({children}) => {

    const [organization, setOrganization] = useState([])



//declare the handle add function for organization information

const dss = axios.create({
    baseURL: "http://localhost:5000/api/",
    header:{
        'content-type':'application/json'
    }
})


useEffect(()=>{
handleAdd()
},[])
const handleAdd = async(form) => {

    const response  = await dss.post('/organizationInfos',form)
    .then(function (response) {
            console.log(response);
          })
          setOrganization(response.data)

    
}
//creating a function to handle get requests from the application.
    return <OrganizationContext.Provider value={{
        handleAdd,
    }}>
        {children}
    </OrganizationContext.Provider>
}

export default OrganizationContext