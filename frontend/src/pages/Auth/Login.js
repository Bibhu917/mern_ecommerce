import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import  toast  from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
  const [userData,setUserData] = useState({email:"",password:""})
  const [auth,setAuth] = useAuth()
  const nav= useNavigate()

  const handleChange = (e) => {
    setUserData({...userData,[e.target.id]: e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const data ={
      email:userData.email,
      password:userData.password
    }
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', data)
      if(res && res.data.success){
        toast.success(res.data && res.data.message)
        setAuth({...auth, 
          user:res.data.userEmail,
          token:res.data.token
        })
        localStorage.setItem('user',JSON.stringify(res.data))
        nav('/dashboard')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
    }
  }
  return (
    <Layout title={'Login - Ecommer App'}>
      <div className='register'>
       <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" onChange={handleChange} required/>
       </div>
       <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" onChange={handleChange} required/>
       </div>
       <button type="submit" class="btn btn-primary d-grid col-3 mx-auto">Submit</button>
      </form>
      </div>
    </Layout>
  )
}

export default Login