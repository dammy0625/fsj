import React from 'react';
import "./image.css"
function Image(props){
    return(
        <>
        <div className="container" >
            <img src={props.src} alt= {props.alt} />
            <h3 >{props.art}</h3>
            <p>{props.artist} </p>
        </div>
        </>
    )
}
export default Image