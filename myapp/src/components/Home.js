import React from "react"
import {useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"

function Home (){
    const location=useLocation()

    return (
        <>
        <div className="container my-5">
  <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
    <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
    <svg className="bi mt-5 mb-3" width="48" height="48"><use to="#check2-circle"></use></svg>
    <h1 className="text-body-emphasis">Hello {location.state.id} <br /> and welcome to the home</h1>
   
    <Link className="btn btn-primary me-1" type="button" to="/">Login Page</Link>
    <Link className="btn btn-primary " type="button"  to="/signup">Sign up Page</Link>
    
  </div>
</div>
        </>
    )
}

export default Home