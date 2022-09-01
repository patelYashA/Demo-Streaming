import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">DEMO Streaming</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <span className="navbar-text position-absolute end-0">
                            <Link className="navbar-brand" to="/login">Login</Link>
                            <button className='btn btn-secondary'>Start your free trial</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar