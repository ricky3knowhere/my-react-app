import React from 'react';
import './App.css';
import Button from './Button.jsx';
import RedText from './RedText.jsx';
import Input from './input.jsx';

function App() {
  return(
    <div className="App">
      Hallo
      
      <Button
        text='dicky'
       >
         <RedText>
         Ricky
         </RedText>
       </Button> 
       <Input />
    </div>
  );
}
export default App;
