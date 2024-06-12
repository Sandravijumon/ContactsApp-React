import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data,changeData]=useState(
        {
           "firstName":""
        }
    )
    const [result,setResult]=useState(
        []
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
       <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={data.firstName} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                </div>
            </div>
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {result.map((value,index)=>{
        return <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    })}
    
  </tbody>
</table>

            </div>
        </div>
    
  )
}

export default Search