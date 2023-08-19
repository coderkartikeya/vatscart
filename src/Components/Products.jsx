import React from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useState,useEffect} from "react";
import { useNavigate} from "react-router-dom";
import './css/product.css';
import Data from './Data';
import { useCartData } from "../context/context";

// import { useEffect } from "react";


const Products=()=>{
    const random=0;
    const {state,dispatch}=useCartData();
    

    const location=useLocation();
    const [p1,getp1]=useState({});

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://fakestoreapi.com/products/${location.state.id}`;
            const response=await fetch(url);
            const resj=await response.json();
            getp1(resj);
            // console.log(p1);

        }
        fetchApi();


        

    },[]);

    
    
    
    
    return(
        <>
        <Nav/>
        <div className="product_main">
        <div className="product_image">
        <img src={p1.image} alt ='image'/>
        <button onClick={()=>{
            dispatch({
                type:'add_to_cart',
                payload:{
                    title:p1.title,
                    describe:p1.description,
                    pric_e:p1.price,
                    img:p1.image
                    
                }
            })
        }}>Add To Cart</button>

        </div>

        <div className="product_info">
            <h2>{p1.title}</h2><br/>
            <h5>Description</h5>
            <h3>{p1.description}</h3><br/>
            <h5>Category </h5>
            <h3>{p1.category}</h3><br/>
            <h5>Price</h5><h3>${p1.price}</h3>
            {/* <h5>Rating</h5> */}
            {/* <h3>{p1.rating.count}</h3> */}

        </div>

        </div>

        </>
    )
}

export default Products;