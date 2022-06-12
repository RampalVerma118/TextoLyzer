import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("eg: hii how can i help you");
  const changeUpCase = () => {
    // console.log("change to Upper Case;"+text)
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert(" Converted to Uppercase!", "success");
  };
  const changeLowerCase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert(" Converted to Lowercase!", "success");
  };
  const changeClearCase = (event) => {
    // let newText="";
    settext(event.target.value);
    props.showAlert(" All text are cleard!", "success");
  };
  const CopyText = (event) => {
    
    navigator.clipboard.writeText(text);
    props.showAlert(" Text Copied to Clipboard!", "success");
  };
  const handleSpace = (event) => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert(" Extra Spaces are Removed!", "success");
  };

  const handleonchange = (event) => {
    // console.log("On Change ")
    settext(event.target.value);
  };

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "skyblue" : "black" }}
      >
        <h1 className="mb-4"> {props.Head} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Text Here "
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#181515",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={changeUpCase}>
          
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={changeLowerCase}>
         
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={changeClearCase}>
          
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={CopyText}>
          
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleSpace}>
          
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 style={{ color: props.mode === "dark" ? "skyblue" : "black" }}>

          Text Summary
        </h2>

        <p>
          
          <b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> words, and <b>{text.length} </b>
          characters(including spaces)
        </p>
        <p>
          <b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </b> Minuts Read Time
        </p>

        <h3 style={{ color: props.mode === "dark" ? "skyblue" : "black" }}>
          
          Preview
        </h3>
        <p> {text.length>0?text:"Nothing to Preview!"} </p>
      </div>
    </>
  );
}
