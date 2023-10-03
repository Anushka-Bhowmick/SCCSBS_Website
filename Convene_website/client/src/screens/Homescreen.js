import React ,{useState, useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {getAllEvents} from '../actions/eventActions'
import events from "../eventsdata";
import Event from './../components/Event';
import { getAllEventsReducer } from './../reducers/eventReducers';
export default function Homescreen() {
  const dispatch = useDispatch()

  const eventsstate = useSelector(state=>state.getAllEventsReducer)
  
  useEffect(()=>{
    dispatch(getAllEvents)
  },[])

  return (
    <div>
       <div className="row">

            {events.map(events=>{
                
                return <div className="col-md-4">
                    <div>
                        <Event event={events}/>
                    </div>
                </div>
            })

            }

       </div>
    </div>
  )
}
