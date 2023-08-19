import React from "react";
import Data  from "./Data"; 
import { info } from "./Data";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Nav from "./Nav";
import './css/resume.css';

import { useCartData} from "../context/context";
import Card_cart from "./Card_cart";

const Cart =()=>{
    // const {state}=useCartData();
    // console.log(state.cart);

    let cartinfo=localStorage.getItem('vatsCart');
    let actual=JSON.parse(cartinfo);
    let total=0;

    
    return(
        <>
            <div className="main_cart">
            <Nav/>
            <Container sx={{
                paddingTop:{
                    xs:'70px',
                    lg:'70px'
                },
                display:'grid',
                gridTemplateColumns:{
                    xs:'auto ',
                    lg:'auto auto'
                },
                gap:{
                    xs:'20px'
                },
                width:'90vw',
                p:'10px'
            }}>
            <div>{total}</div>
                {actual?(actual.map((events)=>{
                    
                    return(
                        <Card_cart name={events.title} info={events.describe} pric_e={events.price} image={events.img} />
                    )

                })):<></>}
            </Container>

        
            </div>
        </>
    )
}

export default Cart;