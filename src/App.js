import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState('null');

  const showAlert =(message,type) =>{
    setAlert({
       msg: message,
       type:type,
      })
  }

  const toggleMode=() =>{
     if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor ='grey';
     showAlert("Dark mode on" , "success");
    }
  
    else {
     document.body.style.backgroundColor = 'white';
     setMode('light');
     showAlert("Light mode on" , "success");
    }
  } 

  return (
     <> 
        {/* <Navbar title="Textutils" aboutText="About Textutils" />   */}
        {/* <Navbar />     */}
        <Navbar title="Textutils" mode={mode}  toggleMode={toggleMode}/>  
        <Alert  alert={alert}/>

        <div className="container">
        <TextForm  heading="Plz enter text here"  mode={mode}/>
        {/* <About /> */}
        </div>
    </>
  );
}

export default App;
