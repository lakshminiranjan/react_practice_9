//onChange = event handling used primarily with form elements ex.<input><textframe>,select,radio,Triggers the function every time the value of the input changes
import React,{useState} from 'react'

function MyComponent() {

  const [name ,setName] = useState("Guest");
  const [quantity ,setQuantity] = useState(1);
  const [comment ,setComment] = useState("");
  const [payment ,setPayment] = useState("");
  const [shipping,setShipping] = useState("");

  function handlenameChange(event){
    setName(event.target.value);
  }

  function handlequantityChange(event){
    setQuantity(event.target.value);
  }

  function handlecommentChange(event){
    setComment(event.target.value);
  }
  function handlepaymentChange(event){
    setPayment(event.target.value);
  }
  function handleshippingsChange(event){
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handlenameChange} />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handlequantityChange} type='number'/>
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handlecommentChange} placeholder='Enter delivery instructions'/>
      <p>Comment : {comment}</p>
      <select value={payment} onChange={handlepaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard" className="">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      <label> <br /><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleshippingsChange} />Pick Up</label>
      <label >
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleshippingsChange} />
        Delivery</label>
        <p>Shipping :{shipping}</p>
    </div>
  )
}

export default MyComponent