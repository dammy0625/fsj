import React from 'react';
import "./front.css";
import {  Link} from "react-router-dom"



function Front(){
    

    return(
        <>
        <Link to="addresss" ><div className="ham" >
            <div></div>
            <div></div>
        </div></Link>
        
        <h1 className="fountain" >Fountain Art Studio</h1>
        <h3 className="art" >2020 exhibition show in lagos</h3>
        <h1 className="explore" >Explore</h1>
        <h5 className="event" >event date <br></br>oct 20 2021</h5>
        <ul className="unor" >
           <Link to="/"> <li>Art works</li></Link>
            <Link to="/artists" ><li>Artists</li></Link>
            <Link to="/upcoming" ><li>Upcoming events</li></Link>
        </ul>

        

            
           
        </>
    )
}
export default Front