export const getAllEventsReducer=(state={events : []},action)=>{

    switch(action.type)
    {
        case 'GET_EVENTS_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_EVENTS_SUCCEESS':return{
            events : action.payload
        }
        case 'GET_EVENTS_FAILED':return{
            error : action.payload,
            loading:false
        }
        default : return state
        
    }
}