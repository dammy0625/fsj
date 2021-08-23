import React,{useState} from 'react';
import "./back.css"

function Com(props){
    var [show,setShow] = useState(0)
    return(
       <div>
           <h1 className="focus" >{props.dl}</h1>

           <div className="glass" >
               <p className="artist" >Artist ;</p>

               <h1 className="name" >{props.artist} </h1>
               <p className="desc" >{props.desc} </p>

               <div className="follow" onClick={
                   ()=>{
                       setShow( show + 1)
                   }
               } ><h6>Rate</h6><div>{show} </div> </div>
           </div>
           
           <div className="size" > <p>size</p> </div>
           <h2 className="siz" >{props.size} </h2>

       </div>
    )
}
export default Com