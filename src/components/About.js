import React  from "react";

export default function About(props) {
  // const [myStyle, setMySyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle={
    color:props.mode ==="dark"?"White":"black",
    backgroundColor:props.mode ==="dark"?"black":"white"
  } 
  

  return (
    <div className="container my-4" style={myStyle}>
      <h1> About Us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong> Textolyzer Services</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==="dark"?"#655f7d":"white"}}>
              TextoLyzer application is very usefull where you can Analyze and convert your text like Uppercase,Lowercase,Copy to clipboard,etc.
              This will also gives you a way to analyze your text quickly and efficiently.Be it Word count,Character Count and also count reading time.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==="dark"?"#655f7d":"white"}}>
              TextoLyzer application is free to use for your text thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==="dark"?"#655f7d":"white"}}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Opera. It suits to count characters in Facebook, Blog, Books, Excel Document, pdf Document, essays, etc. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
