import { createContext, useContext } from "react";
import faker from 'react-fakers';
import { useReducer } from "react";
import { cartReducer } from "./reduces";
import { useEffect,useState } from "react";


const Cart=createContext();

const Context=({children})=>{
    // const getCartData=()=>{
    //     let newCartData=localStorage.getItem('vatsCart');
    //     if(newCartData==[]){
    //         return [];
    //     }

    //     else{
    //         return JSON.parse(newCartData);
    //     }
    // };


    
    
    const initialState={
        
        cart:[],
        
    };

    const [state,dispatch]=useReducer(cartReducer,initialState);

    // // const addtocart=(amount,data)=>{
    // //     dispatch(state,{type:'Add_to_cart',payload:{amount,data}})

    // // }

    useEffect(()=>{
        localStorage.setItem('vatsCart',JSON.stringify(state.cart));

    },[state.cart])




    
    return (
        <Cart.Provider value={{state,dispatch}}> 
            {children}
        </Cart.Provider>
    )
}

const useCartData=()=>{
    return useContext(Cart);
}

export {Context};
export {useCartData};

