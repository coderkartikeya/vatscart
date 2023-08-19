import React from "react";
import './css/nav.css';
import { NavLink } from "react-router-dom";
import { AiOutlineSearch,AiOutlineShoppingCart} from "react-icons/ai";

// 

const Nav=()=>{
    return (
        <div className="nav">
            <div className="nav-title">
                <h1>𝓥𝓪𝓽𝓼 𝓢𝓽𝓸𝓻𝓮</h1>
                <div className="search">
                <div className="search_icon"><AiOutlineSearch style={{fontSize:'30px'}}/></div>
                
                <input type="search" placeholder="Search"/>
                    
                </div>

            </div>
            <div className="cart">
            <NavLink exact to='/cart' style={{textDecoration:'none',color:'white'}}><AiOutlineShoppingCart/></NavLink>
            

            </div>

        </div>

    )
}

export default Nav;