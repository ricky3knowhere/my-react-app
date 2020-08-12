import React,{ useState } from 'react';
import axios from 'axios'

function Input() {
    const [name,setValue] = useState('');
    const [address, setAddress] = useState('');
    
    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleAddressChange(event) {
      setAddress(event.target.value)
  }

    const handleClick = (e) => {
      // alert(`Hello, My name is ${value} \nI come from ${address}`)
      const data = {
        name,
        address
      }

      axios.post('http://192.168.100.224:4000/',data)
    
    }
    return(
      <div>
          Name :<input 
            style = {{margin : '10px'}}
            onChange = {handleChange}
            value = {name}
          />
          Address <input 
            style = {{margin : '10px'}}
            onChange = {handleAddressChange}
            value = {address}
          />
          <button onClick={handleClick}>Kirim</button>
    
      </div>
    )
  }

  export default Input;