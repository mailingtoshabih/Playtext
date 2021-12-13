
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'



//-----------------------------------------------------------------------------------

function App() {

  const [mode, setMode] = useState("light");        // dark mode state

  //---------------------------------------------------------------------------------

  const toggleMode =() =>{

    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#161a1d';
    
    }
    
    else{
      setMode("light");
      document.body.style.backgroundColor = '#ffffff';
      //e9ecef
    }
  }

  //--------------------------------------------------------------------------------------




  return (
    <>
    
    

    {/* <Alert/> */}

    
      <Navbar title={"Playtext"} mode={mode} toggleMode={toggleMode}/>



      <div className="container my-3">
        
        <TextArea heading="Text Utility" mode={mode}/>
            
      </div>
    
    </>
  );
}

export default App;
