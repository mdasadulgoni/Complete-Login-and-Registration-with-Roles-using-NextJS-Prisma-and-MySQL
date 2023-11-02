//1 Import Area
"use client"
import React, { useState } from 'react'


//2 define Area 
function page() {
  // 2.1 Hooks Area 
  const [payload , setPayload] = useState("home")

  //2.2 Defination Area
  let submit = (e)=>{
    console.log("home");
    if(payload === "home"){
      // go to the systemadmin dashboard Page
      window.location.href = 'http://localhost:3000';
      // redirect('/systemadmin/dashboard') 
    }
  }
  // 2.3 Return Statment
  return (
    <div className='container'>
      <div className="card border-0">
        <div className='card-header border-0'><h1>Account Manager Dashboard Page</h1></div>
        <div className="card-body border-0 pb-5 pt-5">
        <button className="btn btn-success bt-syle" onClick={submit}>Go to the Login Page</button>
        </div>
        <div className='card-footer text-center border-0'><h6>ovoserve web services private limited in government of india</h6></div>
      </div>
    </div>
  )
}
//Export Area
export default page
