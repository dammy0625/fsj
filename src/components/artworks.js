import React from 'react';
import "./front.css";
import Image from "./image";
import miguel from "./miguel.jpg";
import chidinma from "./chidinma.jpg";
import dave from "./dave.jpg";
import grandma from "./grandma.jpg";
import litu from "./lituboy.jpg";
import {BrowserRouter as Router ,  Link } from "react-router-dom"

function Art(){
    return(
        <div className="cont" >
        <Router>
        <Link to="/miguel">
            <Image src={miguel} alt="naive" art="Focus"
            artist="dammy" />
            </Link>
            </Router>
            
             <Link to="/naive"><Image src={chidinma} alt="naive" art="Naive"
            artist="ope" /></Link>

            <Link to="/hope"><Image src={grandma} alt="naive" art="Hope"
            artist="dammy" /></Link>
        
            <Link to="/dave" ><Image src={dave} alt="naive" art="Dave"
            artist="lateef" /></Link>

            <Link to="/joy" >
            <Image src={litu} alt="naive" art="Joy"
            artist="dammy" />
            </Link>
            </div>
    )
}
export default Art