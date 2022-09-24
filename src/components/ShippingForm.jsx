import React from 'react'
import { useState } from 'react'
import "./Form.css";
function ShippingForm(props) {
  const [title, setTitle] = useState('')
  const [weight, setWeight] = useState('')
  const [color, setColor] = useState('')
  const [destination, setDestination] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      weight: weight,
      color: color,
      destination: destination,
      name: name,
    }
    props.addToListCallback(data)
  }

  return (
    <center className='cencol'>
      <div className='outerdiv'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ margin: 0 }}> SHIPPING FORM</h1>
          <br></br>
          <input type="text" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} />
          <br></br>
          <br></br>
          <input type="text" placeholder="Title" value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <br></br>
          <br></br>
          <input type="number" placeholder="weight" value={weight}
            onChange={(e) => setWeight(e.target.value)} />
          <br></br>
          <label>color</label>
          <br></br>
          <input className='colsize' type="color"
            onChange={(e) => setColor(e.target.value)} /><br />
          <br></br>
          <input type="text" placeholder="Destination" value={destination}
            onChange={(e) => setDestination(e.target.value)} />
          <br></br>
          <br></br>
          <button>Submit</button>

        </form>
      </div>
    </center>



  )
}

export default ShippingForm