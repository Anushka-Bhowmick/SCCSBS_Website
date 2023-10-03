import axios from "axios";
axios.defaults.baseURL=process.env.REACT_APP_API_URL
export const getAllEvents=()=>async dispatch=>{

    dispatch({type: "GET_EVENTS_REQUEST"})


try{
    const response =await axios.get('/api/events/getallevents')
    console.log(response);
    dispatch({type: "GET_EVENTS_SUCCESS",payload:response.data})
}catch (error){
   dispatch( {type: "GET_EVENTS_FAILED",payload:error})
}

}