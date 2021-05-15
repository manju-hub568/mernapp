import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { usercontext } from './App';

export default function Navbar () {

    const {state, dispatch} = useContext(usercontext);

    const RenderMenu = () => {
        if(state){
            return (
                <>
                                <li className="nav-item">
                                <NavLink to = '/' className = "nav-link active text-primary">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/about' className = "nav-link active text-primary">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/contact' className = "nav-link active text-primary">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/logout' className = "nav-link active text-primary">Logout</NavLink>
                                </li>
                </>
            )
        } else {
            return (
                <>
                                <li className="nav-item">
                                <NavLink to = '/' className = "nav-link active text-primary">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/about' className = "nav-link active text-primary">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/contact' className = "nav-link active text-primary">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/admin' className = "nav-link active text-primary">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/register' className = "nav-link active text-primary">Register</NavLink>
                                </li>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <div className = 'heading'>
                            <div className = 'round'>
                                <div className = 'sub-round'>
                                </div>
                            </div>
                            <div>
                                <strong><font style = {{color:'blue'}}>Ma</font>nju</strong>
                            </div>
                        </div>
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style = {{marginLeft:'auto'}}>
                                {/* <li className="nav-item">
                                <NavLink to = '/' className = "nav-link active text-primary">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/about' className = "nav-link active text-primary">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/contact' className = "nav-link active text-primary">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/logout' className = "nav-link active text-primary">Logout</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/admin' className = "nav-link active text-primary">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to = '/register' className = "nav-link active text-primary">Register</NavLink>
                                </li> */}
                                <RenderMenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}