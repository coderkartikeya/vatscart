import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import './css/about.css';
import Card_3 from "./Card_3";

const About=()=>{
    
    

    const location=useLocation();
    const [show,getShow] = useState([]);
    // console.log(location.state.aboutProps.name);
    const categ=location.state.aboutProps.name;
    

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://fakestoreapi.com/products/category/${categ}`;
            const response=await fetch(url);
            const resj=await response.json();
            getShow(resj);

            

        }
        fetchApi();

    },[])
    return(
        <div className="about_main">
        <Nav/>
        <div className="about_product">
            {show.map((events)=>{
                return(
                    <div className="ma-pr-ab">
                        <NavLink exact to='/products' style={{textDecoration:'none'}} state={{apiType:'fakestore',id:`${events.id}`}}>
                            <Card_3 img={events.image} tit={events.title} 
                            p_rc={events.price} rag={events.rating.rate} cnt={events.rating.count}/>
                        </NavLink>

                        

                    </div>
                )
            })}
        </div></div>


    )
}

export default About;