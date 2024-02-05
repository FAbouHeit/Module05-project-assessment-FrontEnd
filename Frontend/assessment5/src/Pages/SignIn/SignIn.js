import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () =>{
    try{
      setError(false);
      setLoading(true);
      axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/user/signin`, {email, password})
     
    } catch (error){
      console.log("error");
      setError(true);
    } finally {
      setLoading(false);
      navigate('/');
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Sign In</button>
      </form>
    </main>
  )
}
