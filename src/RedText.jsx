import React from 'react';

function RedText(props) {
    const {children} = props
    const color = { color : 'red'}
    
    return(
      <span 
        style={color} 
      >
         { children }
      </span>
    );
  }

  export default RedText;