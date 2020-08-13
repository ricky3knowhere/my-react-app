import React, { useState } from 'react';

// import Button from './components/Button.jsx';
// import RedText from './components/RedText.jsx';
// import Input from './components/input.jsx';
import {
  BrowserRouter,
  Switch,  
  Route,
  // Link,
  Redirect
} from 'react-router-dom'

import './App.css';
import AppPage from './page/RootPage';
import LoginPage from './page/LoginPage';

// import UserPage from './page/UserPage';
// import SettingPage from './page/SettingPage';


// function Navigation() {
//   return(
//     <Fragment>
//         <Link to ="/">Root</Link> |
//         <Link to ="/user">User</Link> |
//         <Link to ="/setting">setting</Link>
//     </Fragment>
//   )
// }

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  function handleClickLogIn() {
    setIsLoggedIn(!isLoggedIn)
  }

  function handleClickLogOut() {
    setIsLoggedIn(!isLoggedIn)
  }

  return(
    <div className="App">

     <BrowserRouter>
        <Switch>
          <Route path ="/" component ={AppPage} exact >
            {
              isLoggedIn
              ? <AppPage onClickLogOut ={handleClickLogOut} />
              : <Redirect to ="/login" />
            }
          </Route>

          <Route path ="/login">
          {
              isLoggedIn
              ? <Redirect to ="/" />
              : <LoginPage onClickLogIn ={handleClickLogIn}/>
            }
          </Route>

        </Switch>
      </BrowserRouter>
     </div>
  );
}
export default App;