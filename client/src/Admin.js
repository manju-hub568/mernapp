import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usercontext } from './App';
import './css/Admin.css';
import Login from './picture/login.svg';

export default function Admin () {

    const {state, dispatch} = useContext(usercontext)

    const history = useHistory();

    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');

    const submitAuth = async (e) => {
        e.preventDefault();    

    const data = await fetch('/login', {
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email,password
        })
    })
        if(data.status === 201) {
            dispatch({type:'USER', payload:true})
            history.push('/');
        }else {
            alert('wrong credentials');
        }
    }
 
    return (
            <>
                <div className = 'sect'>
                    <div className = 'box'>
                        <form method = 'POST' onSubmit = {submitAuth}>
                        <div className = 'container'>
                            <div className = 'row'>
                                <div className = 'col-xl-6 text-center sub-bx'>
                                    <div className = 'container-box'>
                                        <img class="img-fluid" src={Login} alt="Chania" />
                                    </div>
                                </div>
                                <div className = 'col-xl-6 text-center sub-bx2'>
                                    <div className = 'container-box2'>
                                        <strong className = 'sign-in'>Sign In</strong>
                                    <div className = 'input-txt'>
                                        <label className = 'icon'>
                                        <i class="zmdi zmdi-account"></i>
                                        </label>
                                        <input
                                         type = 'text' id = 'txt' name = 'name' placeholder = ' username'
                                         value = {email}
                                         onChange = {(e) => setMail(e.target.value)}
                                         required
                                          />
                                    </div>
                                    <div className = 'input-txt'>
                                    <label className = 'icon'>
                                        <i class="zmdi zmdi-lock"></i>
                                        </label>
                                        <input
                                         type = 'password' id = 'txt' name = 'pass' placeholder = ' password'
                                         value = {password}
                                         onChange = {(e) => setPassword(e.target.value)}
                                         required
                                          />
                                    </div>
                                    <div className = 'btns'>
                                        <button className = 'btn btn-primary'>submit</button>
                                    </div>
                                    <div className = 'social'>
                                        <h6>Or login with</h6>
                                        <label>
                                        <i class="zmdi zmdi-facebook"></i>
                                        </label>
                                        <label style = {{backgroundColor:'rgb(74, 74, 211)',border:'1px solid rgb(74, 74, 211)'}}>
                                        <i class="zmdi zmdi-linkedin"></i>
                                        </label>
                                        <label style = {{backgroundColor:'red',border:'1px solid red'}}>
                                        <i class="zmdi zmdi-google-old"></i>
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </>
    );
}