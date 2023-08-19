import React from "react";
import './css/card_2.css';

const Card_2=(props)=>{
    return(
        <div className="card_2">
        <img src={props.img} alt='product'/>
        <div style={{display:'flex' ,flexDirection:'row' ,justifyContent:'space-between'}}>
        <h3>{props.title}</h3>

        <h3> ${props.price}</h3>

        </div>
        
        

        </div>

    )
}

export default Card_2;