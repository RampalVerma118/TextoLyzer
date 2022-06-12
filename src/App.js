import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert.js";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
       setAlert( {
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }

  const togglemode=()=>{
    if(mode==="dark"){
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert(" Light mode has been Enabled!","success" )
      // document.title="Enabled Dark Mode"
      // setInterval(() => {
      //   document.title="Best for Your Text"
      // }, 2000);
      // setInterval(() => {
      //   document.title="install TextoLyzer Now"
      // }, 1500);
    }
    else{
  
      setmode("dark")
      document.body.style.backgroundColor="#090f37"
      showAlert(" Dark mode has been Enabled!","success" )
      // document.title="Enabled Light Mode"
    }
  
  }
  
  return (
    <>
     <Router>
      <Navbar title="TextoLyzer" about="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
       
          <div className="container my-4">
           <Switch>
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
              <Route exact path="/">
              <TextForm showAlert={showAlert} Head="Try TextoLyzer-Word Counter,Character Counter,Uppercase,Lowercase" mode={mode}  />
              </Route>
            </Switch>
            
          </div>
      </Router>
      
    </>
  );
}

export default App;
