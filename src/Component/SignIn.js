import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css';
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
    const[mail,setMail]=useState('')
    const[password,setPassword]=useState('')
    const[list,setList]=useState([])
    const[errMsg,setErrMsg]=useState('')
    const navigate=useNavigate()
    
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
        .then(res=>{setList(res.data)})
        .catch(err=>alert("some error bro"))
    },[])
  const check=(e)=>{
    const user=list.find(x=>x.email===mail)
    if(user){
        if(user.password===password){
            navigate('/main')
        }
        else{
            setErrMsg('wrong password bro...')
        }
    }
    else{
        setErrMsg('incorrect mail bro...')
    }
    e.preventDefault()
  }
        
  return (
    <div className='abc-in'>
        <form className='bcd-in' onSubmit={check}>
            <h1>Login page</h1>
            <label>Email</label>
            <input type='email' onChange={(e)=>{setMail(e.target.value)
            }}/><br></br>
            <label>Password</label>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)
            }}/><br></br>
            <button type='submit'>Log in</button>
        </form><br></br>
        {errMsg}
    </div>
  )
}

