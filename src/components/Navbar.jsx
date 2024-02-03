import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Flavor Wheels</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav me-auto">
                    <li className='nav-item'>
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {
                        (localStorage.getItem("authToken")) ?
                        <li className='nav-item'>
                            <Link className="nav-link active" aria-current="page" to="/">My Orders</Link>
                        </li>
                        :
                        ""
                    }
                </ul>

                    {
                        (!localStorage.getItem("authToken")) ?
                        <div className='d-flex'>
                            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
                        </div>
                        : 
                        <div>
                            <div className='btn bg-white text-success mx-2'>
                                Cart
                            </div>
                            <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                Logout
                            </div>
                        </div>
                    }
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar;
