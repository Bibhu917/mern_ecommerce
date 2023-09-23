import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { useAuth } from '../../context/auth'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [auth,setAuth] = useAuth()
    const [categoryData,setCategoryData] = useState([])

    useEffect(() => {
      const fetchCategoryData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/category/listOfCategory");
          const responseData = response.data.categoryList;
          setCategoryData(responseData);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
  
      fetchCategoryData();
    }, []);

  return (
    <Layout title={'Dashboard-Ecomme app'}>
    {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
      <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
      {categoryData.map((catgry) => (
        <Link to="/productlist" key={catgry.id}> 
        <div className="card" style={{width:"18rem"}}>
        <img class="card-img-top" src={catgry.image} alt="" key={catgry.id}/>
        <div className="card-body">
          <h2 className="card-text">{catgry.name}</h2>
        </div>
      </div>
      </Link>
      ))}
      </div>
    </Layout>
  )
}

export default Dashboard

