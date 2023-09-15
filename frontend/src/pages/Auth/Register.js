import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  toast  from 'react-hot-toast';

const Register = () => {
  const [userData,setUserData] = useState({})
  const nav= useNavigate()
  
  const handleChange = (e) => {
    setUserData({...userData,[e.target.id]: e.target.value})
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      name:userData.name,
      email:userData.email,
      password:userData.password,
      phone:userData.phone,
      address:userData.address
    }
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register',data)
      if(res && res.data.success) {
        toast.success(res.data && res.data.message)
        nav('/login')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <Layout title='Register - Ecommer App'>
     <div className='register'>
      <h1>signup</h1>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Name: </label>
       <input type="text" class="form-control" id="name" onChange={handleChange} placeholder='Enter your name..' required/>
      </div>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address: </label>
       <input type="email" class="form-control" id="email" onChange={handleChange} placeholder='Enter your email..' required/>
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password: </label>
       <input type="password" class="form-control" id="password" onChange={handleChange} placeholder='Enter your password..' required/>
      </div>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Phone: </label>
       <input type="number" class="form-control" id="phone" onChange={handleChange} placeholder='enter your phone  number' required/>
      </div>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Address: </label>
       <input type="text" class="form-control" id="address" onChange={handleChange} placeholder='enter your address' required/>
      </div>
      <button type="submit" class="btn btn-primary d-grid col-4 mx-auto ">Submit</button>
      </form>
      </div>
    </Layout>
  )
}

export default Register