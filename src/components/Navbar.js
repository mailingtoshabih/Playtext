import React from 'react'

const Navbar = (props) => {

      return (

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

                  <div className="container-fluid">

                  <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <div className={`form-check form-switch my-2 mx-3 text-${props.mode === "dark" ? "light" : "dark" }`}>
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Lights</label>
                        </div>
                        

                  </ul> 


                        
                        <button className="btn btn-warning mx-2" >Donate $$</button>
                  

                  </div>

                  </div>
            </nav>

      )
}

export default Navbar