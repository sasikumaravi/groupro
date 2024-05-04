import axios from 'axios'
import React, { useState } from 'react'
export default function Material() {
    const[name,setName]=useState()
    const[description,setDescription]=useState()
    const[cost,setCost]=useState()
    const submit=(e)=>{
        axios.post("http://localhost:3001/material",{name,description,cost})
        .then(x=>{alert("Data added successfully")})
        .catch(y=>{alert("Data not yet sended")})
        e.preventDefault()
    }

  return (
    <div className='form'>
        <h1>Materials</h1>
        <form onSubmit={submit}>
            <label>Project Name</label>
            <input type='text' onChange={(x)=>setName(x.target.value)}/><br></br>
            <label>Description</label>
            <textarea onChange={(x)=>setDescription(x.target.value)}/><br></br>
            <label>Cost/month</label>
            <input type='number' onChange={(x)=>setCost(x.target.value)}/><br></br>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
