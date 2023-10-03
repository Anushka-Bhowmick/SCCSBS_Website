import React, {useState} from "react";
import {Modal} from 'react-bootstrap'
export default function Event({ event }) {
  const [quantity, setquantity] = useState(1)
   const [type, settype] = useState('online')
   const[show, setShow]= useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(false);
  return (
    <div style={{margin:'100px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
      <h1>{event.name}</h1>
      <img
        src={event.image}
        className="img-fluid"
        style={{ height: "200px", width: "300px" }}
      />
      </div>
      <div className="flex-container">
        <div className="w-100">
          <p>Types</p>
          <select value={type} onChange={(e)=>{settype(e.target.value)}}>
            {event.Type.map(Types => {
              return <option value={Types}>{Types}</option>
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Tickets</p>
          <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
            {[...Array(10).keys()].map((x,i)=>{
              return <option value={i+1}>{i+1}</option>
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
            <h1 className="mt-1">Price: {event.prices[0][type]*quantity} /-</h1>

        </div>
        <div className=" w-100 m-1">
            <button className="btn">ATTEND</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal> 


    </div>
  );
}
