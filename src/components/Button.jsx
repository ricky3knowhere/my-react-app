import React,{ useState } from 'react';

function Button({children}) {

  const [active,setActive] = useState(false)
  
  function handleClick() {
      setActive(!active)
    }

    return(
      <button 
        onClick={handleClick} 
      >
         { children }
         :
         {
           active ? ' active' : ' not active'
         }
      </button>
    );
  }

  export default Button;