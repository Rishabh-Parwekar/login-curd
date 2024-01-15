import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                const passPattern =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if(!email.match(emaiPattern) ){
                    alert('valid id required')
                }
                else if(!password.match(passPattern)){
                    alert('please enter atleast 8 charatcer with number, symbol, small and capital letter')
                }
                else{
               if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }}
              
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <>
        <div className="col-md-10 mx-auto col-lg-5 my-5 py-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light">
        <h1 className="text-primary text-center mb-5">Sign up</h1>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" onChange={(e) => { setEmail(e.target.value) }} placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" onClick={submit} type="submit">Sign up</button>
          <hr className="my-4"/>
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small><Link to="/">Login Page</Link>
        </form>
      </div>
        </>
    )
}

export default Login