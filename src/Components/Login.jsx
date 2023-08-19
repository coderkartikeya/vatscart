import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './css/login.css';
import { useState } from "react";



const Login=()=>{
    const navigate=useNavigate()

    const [name,getName]=useState('');
    const [pass,getPass]=useState('');


    const list=[
        {
            'name':'kartikeya',
            'password':'1234',
        }
    ];

    const Main=()=>{
        for (let i=0;i<list.length;i++){
            if(list[i].name===name && list[i].password===pass){
                navigate('/main')
                break;
            
            
            }

            else{
                alert('password or login donot match with registerd')
            }

        }
    }

    // const open=()=>{
    //     navigate('/menu');
    // };
    return(
        <div className="main-div flex">
            <div className="login">

                <form>
                <label>User Id</label><br/>
                    <input type="text" onChange={(event)=>{getName(event.target.value)}}/> <br/>
                    <label>Password</label><br/>
                    <input type="password" onChange={(event)=>{getPass(event.target.value)}}/><br/>
                    <button onClick={Main}>Login</button>

                </form>
                    
                

            </div>
        
        

        </div>

    )
}

export default Login;