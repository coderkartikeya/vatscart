import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import About from "./About";
import Product from './Product';
import Products from './Products';
import Cart from "./Cart";

const App=()=>{
    return (
        <>
        
        <Routes>
            <Route exact path="/" Component={Login}/>
            <Route exact path='/main' Component={Main}/>
            <Route exact path='/about' Component={About}/>
            <Route exact path='/product' Component={Product}/>
            <Route exact path='/products' Component={Products}/>
            <Route exact path='/cart' Component={Cart}/>

            
            
        </Routes>


        </>

    )
}

export default App;