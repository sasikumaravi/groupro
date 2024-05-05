import axios from 'axios'
import React, { useState } from 'react'
import '../App.css'
export default function Material() {
    const[name,setName]=useState()
    const[description,setDescription]=useState()
    const[cost,setCost]=useState()
    const submit=(e)=>{
        axios.post("http://localhost:3002/material",{name,description,cost})
        .then(x=>{alert("Data added successfully")})
        .catch(y=>{alert("Data not yet sended")})
        e.preventDefault()
    }

  return (
    <div className='form'>
        <h1>Materials</h1>
        <form onSubmit={submit}>
          <table>
            <tr>
              <td><label>Project Name</label></td>
              <td><input type='text' onChange={(x)=>setName(x.target.value)}/></td>
            </tr>
            <tr>
              <td><label>Description</label></td>
              <td><textarea onChange={(x)=>setDescription(x.target.value)}/></td>
            </tr>
            <tr>
              <td><label>Cost/month</label></td>
              <td><input type='number' onChange={(x)=>setCost(x.target.value)}/></td>
            </tr>
            <tr>
              <td colSpan="2"><button type='submit'>submit</button></td>
            </tr>
          </table>
        </form>
    </div>
  )
}
