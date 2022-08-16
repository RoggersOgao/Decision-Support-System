const OrganizationReducer = (state, action)=> {
    switch(action.type){

        case "ORGANIZATION_DATA":
            return{
                ...state,
                organizationInfo:action.payload
            }
        default:
            return state
    }
}

export default OrganizationReducer