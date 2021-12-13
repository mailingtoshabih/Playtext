import React, {useState} from 'react'

// usestate is a hook

export default function TextArea(props) {

      const [text, setText] = useState("");

      const [extract, setExtract] = useState("");




      const handleOnChange = (event) => {
            setText(event.target.value);    
      }


      // extraction's onchange method
      // const handleOnExtract = (event) => {
      //       setExtract(event.target.value);    
      // }




      //--------------------------------------------------------------------------------------

      const toUpperCaseClick = () => {
            
            let newText = text.toUpperCase();
            setText(newText);
      }


      const toLowerCaseClick = () => {
            
            let newText = text.toLowerCase();
            setText(newText);
      }


      const removeExtraSpaces = () => {
            
            let newText = text; 
            newText = newText.replace(/\s{2,}/g, ' ').trim();
            setText(newText);
      }


      const removeAllSpaces = () => {

            let newText = text; 
            newText = newText.replace(/ /g,'');
            setText(newText);
      }


      const capitalizeEachWord = () => {
            
            
            let newText = text.toLowerCase().split(" ");

            for (let i = 0; i < newText.length; i++) {

                  newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);     
            }

            newText = newText.join(" ");

            setText(newText);
      }


      const removeAllSymbols = () => {
            
            let newText = text; 
            newText = newText.replace(/[^\w\s]/g, '')
            setText(newText);
      }
      
      
      const removeAllNumbers = () => {
            
            let newText = text; 
            newText = newText.replace(/[0-9]/g, '');
            setText(newText);
      }



      const extractNumbers = () => {
            
            let newText = text;

            newText = newText.split("");

            let finalText = "";

            for (let i of newText){

                  if ( (i.charCodeAt(0) < 58 && i.charCodeAt(0) > 47) || (i === " ") || (i === ".") ){

                        finalText += i;
                  }

                  finalText = finalText.replace(/\s{2,}/g, ' ').split(" ").join("\n");
           
                  setExtract(finalText);
            }
      }
      



      const extractEmails = () => {
            
            let newText = text;

            if(newText.includes("@")){

                  newText = newText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
                  
                  setExtract(newText.join('\n'));
            }
            
      }



      const lineByLine = () => {
            
            let newText = text;

            newText = newText.replace(/\s{2,}/g, ' ').trim();

            if (newText){

                  let lines = newText.split(".");
                  let finalText = "";

                  for( let line of lines){
      
                        if (line.charAt(0) === " ") line = line.replace(" ", "");
                        finalText += line + "\n";
                  }
      
                  setText(finalText);
            }
      }
      
      const wordLineByLine = () => {
            
            let newText = text;

            newText = newText.replace(/\s{2,}/g, ' ').trim();

            if (newText){

                  let lines = newText.split(" ");
                  let finalText = "";
      
                  for( let line of lines){
      
                        if (line.charAt(0) === " ") line = line.replace(" ", "");
                        finalText += line + "\n";
                  }
      
                  setText(finalText);
            }
      }



      
      


      


      const resetTextarea = () => {
            setText("");
      }
      
      const resetExtractions = () => {
            setExtract("");
      }


      
      
      

      return (
            <>
            <div className="container">


                  <h3 style={ {color : props.mode === "dark" ? "white" : "black" } }><strong>{props.heading}</strong></h3>

                  <div className="my-3">
                        <textarea className="form-control" id="myBox" rows="14" value={text} onChange={handleOnChange}  placeholder="Enter, Paste or Drag and Drop your text here..." 
                        style={ {backgroundColor : props.mode === "dark" ? "#dee2e6" : "white" } }  ></textarea>
                  </div>





                  <button className="btn btn-primary my-3 mx-3" onClick={toUpperCaseClick} >Convert to Uppercase</button>
                  
                  <button className="btn btn-primary my-3 mx-3" onClick={toLowerCaseClick} >Convert to Lowercase</button>

                  <button className="btn btn-primary my-3 mx-3" onClick={removeExtraSpaces} >Remove Extra Spaces</button>

                  <button className="btn btn-primary my-3 mx-3" onClick={removeAllSpaces} >Remove All Spaces</button>

                  <button className="btn btn-primary my-3 mx-3" onClick={capitalizeEachWord} >Capitalize Each Word</button>

                  <button className="btn btn-primary my-3 mx-3" onClick={removeAllSymbols} >Remove All Symbol</button>


                  <button className="btn btn-primary my-3 mx-3" onClick={removeAllNumbers} >Remove All Numbers</button>

                  <button className="btn btn-primary my-3 mx-3"  onClick={extractNumbers}>Extract Numbers</button>

                  <button className="btn btn-primary my-3 mx-3" onClick={extractEmails} >Extract Emails</button>


                  <button className="btn btn-primary my-3 mx-3" onClick={lineByLine} >Print Sentence line-by-line</button>

                  <button className="btn btn-primary my-3 mx-3" onClick={wordLineByLine} >Print Words line-by-line</button>

                  
                  <button className="btn btn-success mx-3 my-3" onClick={() => {navigator.clipboard.writeText(text)}} >Copy Text</button>

                  <button className="btn btn-danger my-3 mx-2" onClick={resetTextarea} >Reset</button>


            </div>





            <div className="container my-3">
            
                  <span className={`badge rounded-pill ${ props.mode === 'light' ? "bg-dark" : "bg-light text-dark" }`}>
                  
                        {text.length} characters
                  </span>

                  <span className={`badge rounded-pill ${ props.mode === 'light' ? "bg-dark" : "bg-light text-dark" } mx-3`}>
                  
                        Approx read time : {Math.round( (text.length) * 0.10 )} sec 
                  </span>







                  <hr/>

                  <h3 className='heading my-1' style={ {color : props.mode === "dark" ? "white" : "black"} }><strong>Extractions</strong></h3>

                  <span className={`badge rounded-pill ${ props.mode === 'light' ? "bg-danger" : "bg-danger" } `}> Beta </span>
                  <span className={`badge rounded-pill ${ props.mode === 'light' ? "bg-danger" : "bg-danger" } mx-3`}> Read-only </span>




                  <div className="my-3">
                        <textarea className="form-control" id="myBox" rows="10" value={extract}  readOnly = {true}  placeholder="Emails and Numbers will be extracted here..." 
                        style={ {backgroundColor : props.mode === "dark" ? "#dee2e6" : "white" } }  ></textarea>
                  </div>

                  <button className="btn btn-success" onClick={() => {navigator.clipboard.writeText(extract)}} >Copy</button>

                  <button className="btn btn-danger mx-2" onClick={resetExtractions} >Reset</button>

                  
            </div>
            



            </>
      )
}
