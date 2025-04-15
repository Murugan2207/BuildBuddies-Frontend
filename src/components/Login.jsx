import React, { useState } from "react";

export default function Login() {

    const [emailId,setEmailId]=useState("")
    const[password,setPassword]=useState("")
    const handleEmailid=(e)=>{
        setEmailId(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
  return (
    <div className="flex justify-center my-10">
      <div className="  card bg-base-200 w-96 shadow-sm justify-center">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>
            <input
              type="text"
              className="input"
              placeholder="Please Enter Valid Email ID"
              value={emailId}
              onChange={handleEmailid}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              placeholder="Please Enter Valid Password"
              value={password}
              onChange={handlePassword}
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button className=" btn btn-primary justify-center">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
