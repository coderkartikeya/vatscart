import React from "react";
import Nav from "./Nav";
import Card_1 from "./Card_1";
import { useState } from "react";
import { useEffect } from "react";
import './css/main.css';
import { NavLink } from "react-router-dom";
import Card_2 from "./Card_2";



const Main =()=>{
    const random=0;
    
    const[cat,getCat]=useState([])
    const [pro,getPro]=useState([])
    useEffect(()=>{
        const fetchCat=async()=>{
            const url =`https://fakestoreapi.com/products/categories`;
            const response=await fetch(url);
            const resj=await response.json();
            // console.log(resj.categories);
            
            getCat(resj);
            
        };

        fetchCat();


        const fetPro=async()=>{
            const url=`https://dummyjson.com/products`;
            const response=await fetch(url);
            const resj=await response.json();
            // console.log(resj.products)
            getPro(resj.products);



        }
        fetPro();

    },[])
    return (
        <>
            <Nav/>
        
        
        <div className="whole-main">

        
        
        <div  className="menu">
        
        {cat.map((events)=>{
            return(
                <div className="menu-cate">
                <NavLink  exact to='/about' state={{aboutProps:{name:`${events}`}}} style={{textDecoration:'none',color:'black'}}><Card_1  title={events}/></NavLink>

                
                </div>
                
            )


        })}


        </div>
        <div className="filter">


        </div>

        <div className="products">
        {
            pro.map((events)=>{
                return(
                    <div style={{width:'200px' ,padding:'5px',}}>

                    <NavLink exact to='/product' state={{apitype:'dummy',
                    id:`${events.id}`}} style={{textDecoration:'none' }}>
                        <Card_2 img={events.thumbnail} title={events.title} price={events.price} rating={events.rating}/>
                    </NavLink>
                    

                    </div>
                    
                )

            })
        }

        </div>
        
        

        

        </div></>

    )
}

export default Main;