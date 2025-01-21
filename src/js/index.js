//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let numero=0 

setInterval(()=>{
    numero++
    ReactDOM.createRoot(document.getElementById('app')).render(<Home digito={numero}/>);
},1000)
//render your react application

