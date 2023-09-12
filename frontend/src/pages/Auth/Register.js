import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import axios from 'axios'

const Register = () => {
  const [userData,setUserData] = useState({})
  
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
      const res = await axios.post('http://localhost:8080/auth/signup',data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title='Register - Ecommer App'>
     <div className='register'>
      <h1>signup</h1>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Name: </label>
       <input type="text" class="form-control" id="name" onChange={handleChange} placeholder='Enter your name..'/>
      </div>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address: </label>
       <input type="email" class="form-control" id="email" onChange={handleChange} placeholder='Enter your email..'/>
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password: </label>
       <input type="password" class="form-control" id="password" onChange={handleChange} placeholder='Enter your password..'/>
      </div>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Phone: </label>
       <input type="number" class="form-control" id="phone" onChange={handleChange} placeholder='enter your phone  number'/>
      </div>
      <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Address: </label>
       <input type="text" class="form-control" id="address" onChange={handleChange} placeholder='enter your address'/>
      </div>
      <button type="submit" class="btn btn-primary d-grid col-4 mx-auto ">Submit</button>
      </form>
      </div>
    </Layout>
  )
}

export default Register