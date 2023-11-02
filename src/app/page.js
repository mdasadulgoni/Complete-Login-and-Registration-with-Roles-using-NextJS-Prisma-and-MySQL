"use client"
import { redirect } from "next/navigation";
// 1. Import Area

import { useState } from "react";



// 2. Defination Area
function Home() {
  // 2.1 Hooks Area 
  // let title = "Login System"
  const [title , setTitle] = useState('Login System')
  const [payload , setPayload] = useState({email:"systemadmin@gmail.com",password:"systemadmin@gmail.com", role:"systemadmin"})

  // 2.2 Defination Area
  let submit = (e)=>{
    console.log("Hi");
    if(payload.role === "systemadmin"){
      // go to the systemadmin dashboard Page
      window.location.href = '/systemadmin/dashboard';
      // redirect('/systemadmin/dashboard') 
    }
    if(payload.role === "reseller"){
      // go to the reseller dashboard Page
      window.location.href = '/reseller/dashboard';
      // redirect('reseller/dashboard') 
    }
    if(payload.role === "enduser"){
      // go to the enduser dashboard Page
      window.location.href = '/enduser/dashboard';
      // redirect('enduser/dashboard') 
    }
    if(payload.role === "accountmanager"){
      // go to the accountmanager dashboard Page
      window.location.href = '/accountmanager/dashboard';
      // redirect('accountmanager/dashboard') 
    }
  }
  let handleChange = (e)=>{
    console.log(e.target.value);
    if(e.target.value === "systemadmin"){
      setPayload({
                  ...payload,
                  email:"systemadmin@gmail.com",
                  password:"systemadmin@gmail.com",
                  role:"systemadmin"
                })
    }
    if(e.target.value === "reseller"){
      setPayload({
                  ...payload,
                  email:"reseller@gmail.com",
                  password:"reseller@gmail.com",
                  role:"reseller"
                })
    }
    if(e.target.value === "enduser"){
      setPayload({
                  ...payload,
                  email:"enduser@gmail.com",
                  password:"enduser@gmail.com",
                  role:"enduser"
                })
    }
    if(e.target.value === "accountmanager"){
      setPayload({
                  ...payload,
                  email:"accountmanager@gmail.com",
                  password:"accountmanager@gmail.com",
                  role:"accountmanager"
                })
    }
  }


  // 2.3 Return Statment 
  return (
    <>
      <div className="container ">
        <div className="card customcss">
          <div className="card-header text-center bg-dark text-info"><h3>{title}</h3></div>
          <div className="card-body">
            <form>
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Role Select</label>
                  <select className="form-control" onChange={handleChange}>
                    <option value="systemadmin">System Admin</option>
                    <option value="reseller">Reseller</option>
                    <option value="enduser">End User</option>
                    <option value="accountmanager">Accout Manager</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={payload.email}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                  <input type="password" className="form-control" id="password" value={payload.email}/>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer text-center bg-dark">
            <button className="btn btn-success" onClick={submit}>Login Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
// 3. Export Area 
// 3.1 Default Export 
export default Home;
// 3.2 Named Export
