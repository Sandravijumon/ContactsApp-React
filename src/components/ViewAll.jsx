import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {
                "firstName":"Sandra", 
                "lastName":"Vijumon", 
                "email":"san@gmail.com", 
                "mobileNo":"7894561236", 
            }
        ]
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile No</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((value,index)=>{
        return  <tr>
        <th scope="row">{value.firstName}</th>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td>{value.mobileNo}</td>
      </tr>
    })
   }
  </tbody>
</table>
                </div>
            </div>
        </div>
    l</div>
  )
}

export default ViewAll