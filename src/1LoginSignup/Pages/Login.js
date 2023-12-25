import React from 'react'
import { useState } from 'react';
export default function Login() {
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const loginUser=(e)=>{
        console.log("FKK");
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={loginUser}>
            <label>Enter email</label>
            <input type='email' placeholder='Enter email' value={data.email} onChange={(e)=>setData({...data, email: e.target.value})}/> <br/> <br/>
            <label>Enter password</label>
            <input type='password' placeholder='Enter password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/> <br/> <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
