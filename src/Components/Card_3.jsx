import React from "react";
import './css/card_3.css'

const Card_3 = (props)=>{
    return(
        <div className="card_3">
        <div className="card_3-image">
            <img src={props.img} alt="Image"/>

        </div>

        <div className="card_3-content">
            <h3>{props.tit}</h3>
            <h3>{props.rag}★ ({props.cnt})</h3>
            <br/>
            <h3>${props.p_rc}</h3>

        </div>


        </div>

    )
}

export default Card_3;