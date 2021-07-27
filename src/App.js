import Graph from "./Graph.jsx";
import Input from "./Input";
import {useState} from "react";
import ErrorBoundary from "./ErrorBoundary";
import Nav from "./Navbar"

function App(){
  const[graphplot,setGraph]=useState("0");
  function graphProp(funct) {
     setGraph(funct);
     console.log(graphplot);
  }
  return(<div >
  <div className="header"><Nav /></div>
  <ErrorBoundary>
  <div className="sidebar"><Input plot={graphProp}></Input></div>
  <div className="content-1"><Graph graphToPlot={graphplot}/></div>
  </ErrorBoundary>
  </div>);
}


export default App; 
