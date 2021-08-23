import React from 'react';
import "./address.css";
import {  Link} from "react-router-dom"



function Add(){
    

    return(
        <>
        
        <h1 className="fount" >Fountain Art Studio</h1>
        <h5 className="event" >event date <br></br>oct 20 2021</h5>
        <ul className="un" >
           <Link to="/"> <li>Art works</li></Link>
            <Link to="/artists" ><li>Artists</li></Link>
            <Link to="/upcoming" ><li>Upcoming events</li></Link>
        </ul>

        <div className="co" >
            
        <h3 className="address" > Address </h3>
        <h5 className="igand" >igando rd. ijegun Lasgos Nigeria</h5>

        <h3 className="em" >E-mail</h3>
        <h5 className="muyi" >muyiwalateef@gmail.com</h5>

        <h3 className="cut" >customer-care</h3>
        <h5 className="care" >+234-9876543210</h5>
        </div>
         
         
        

            
           
        </>
    )
}
export default Add