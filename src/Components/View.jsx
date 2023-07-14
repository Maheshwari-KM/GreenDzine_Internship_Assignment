import React, { useEffect, useState } from 'react'
import '../App.css'

const View = () => {

// set the local state for storing api data and search query String value
    const [employees,setEmployees]=useState({})
    const [query,setQuery]=useState('')

// use Effect method will use for fetching the data and perform side effect and animation purpose.
//here i hava fetching the data from the given api with the help of fetch method and storing into the local state
useEffect(()=>{
  fetch("https://reqres.in/api/users?page=2")
  .then((res)=>res.json())
  .then((data)=>setEmployees(data))
  .catch((err)=>console.log(err))
},[])


  return (
  <div className='main-container'>
    <div className='search-input' >
    <input type='text' name='search' placeholder='Search by employee firstName' onChange={(e)=>{setQuery(e.target.value.toLowerCase())}}></input>
    </div>
    {/* here i was perform the filter and map method the given requirement*/}
    {employees.data && employees.data.filter((emp)=>emp.first_name.toLowerCase().includes(query)).map((employee,index)=>{
            return(
                <div key={index} className='sub-container'>
                    <h5>{employee.id}</h5>
                    <img className='avarat-image' src={employee.avatar} alt='avatars' />
                    <h6>{employee.first_name}</h6>
                </div>
                )
    })}
     
  </div>
  )
}

export default View