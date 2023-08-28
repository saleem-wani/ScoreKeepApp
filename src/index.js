import React, { createRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

let score = 0;
let wicket = 0;
let balwiseScore=[];
let hit=0;
let inputRef=React.createRef();

function addWicket() {
  hit="W";


    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }


const addScore = (num) => {
   hit=num;
   console.log(hit);
  
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }


const ScoreButtons=()=>(

  <div>
  <button onClick={() => addScore(0)}>0</button>
  <button onClick={() => addScore(1)}>1</button>
  <button onClick={() => addScore(2)}>2</button>
  <button onClick={() => addScore(3)}>3</button>
  <button onClick={() => addScore(4)}>4</button>
  <button onClick={() => addScore(5)}>5</button>
  <button onClick={addWicket}>wicket</button>
</div>
)

const Result=()=>(
  <div>
  {balwiseScore.map((res,index)=>
  (
    <>
    {index%6===0? <br/>:null}
    <span key={index}>{res===0?<strong>.</strong>:res}</span>&nbsp; &nbsp; &nbsp;</>
   ))}
   
  </div>
)
function handleSubmit(event){
  event.preventDefault();
  if(hit==="W"){
    wicket+=1;
  }
  else{
  score+=hit;
  }
  balwiseScore.unshift(
    // <span>{hit}{","}{inputRef.current.value}</span>
    <span>{`${hit}, ${inputRef.current.value}`}</span>
  );
  hit=0;
inputRef.current.value="";
  
 
  root.render(
    <React.StrictMode>
      <App />
   
  
    </React.StrictMode>
  )
}
const Form=()=>(
  <form  onSubmit={handleSubmit}>
    <input value={hit}/>
    <input ref={inputRef}/>
    <button>submit</button>
  </form>
)

const App = () => (
  <>
    <h1>SCORE KEEPER</h1>
    <h2>
      SCORE{score}/{wicket}
    </h2>
    <ScoreButtons/>
    <br/>
    <Form/>
    <hr/>
    {balwiseScore.map((res,index)=>(
      <p key={index}>{res}</p>
    ))}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
 

  </React.StrictMode>
);
