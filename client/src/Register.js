import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './css/Register.css';
import Regist from './picture/Register.svg';

export default  function Register () {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        if(password === cpassword){

        const res = await fetch('/send', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:name, email:email, phone:phone, address:address, password:password, Cpassword:cpassword
            })
        })

        const data = await res.json();
        console.log(data);
        

        setName('');
        setMail('');
        setPhone('');
        setAddress('');
        setPassword('');
        setCpassword('');

        const Hist = () => {
            return history.push('/Admin');
       }
        Hist();

        }else {
            alert('password not matching');
        }
    }

    return (
        <>
            <div className = 'reg-brd'>
            <div className = 'reg-box'>
            <div className = 'container'>
                            <div className = 'row'>
                                <div className = 'col-xl-6 text-center sub-bx2'>
                                    <form method = 'POST' onSubmit = {submitForm}>
                                        <strong className = 'sign-in'>Sign Up</strong>
                                    <div className = 'input-txt'>
                                        <label className = 'icon'>
                                        <i class="zmdi zmdi-account"></i>
                                        </label>
                                        <input
                                         type = 'text' id = 'txt' name = 'name' placeholder = ' Enter Name'
                                         value = {name}
                                         onChange = {(e) => setName(e.target.value)}
                                          />
                                    </div>
                                    <div className = 'input-txt'>
                                    <label className = 'icon'>
                                        <i class="zmdi zmdi-email"></i>
                                        </label>
                                        <input
                                         type = 'text' id = 'txt' name = 'pass' placeholder = ' Enter Email / Username'
                                         value = {email}
                                         onChange = {(e) => setMail(e.target.value)}
                                          />
                                    </div>
                                    <div className = 'input-txt'>
                                        <label className = 'icon'>
                                        <i class="zmdi zmdi-phone"></i>
                                        </label>
                                        <input
                                         type = 'text' id = 'txt' name = 'name' placeholder = ' Enter Phone'
                                         value = {phone}
                                         onChange = {(e) => setPhone(e.target.value)}
                                          />
                                    </div>
                                    <div className = 'input-txt'>
                                    <label className = 'icon'>
                                        <i class="zmdi zmdi-home"></i>
                                        </label>
                                        <input
                                         type = 'text' id = 'txt' name = 'pass' placeholder = ' Enter Address'
                                         value = {address}
                                         onChange = {(e) => setAddress(e.target.value)}
                                          />
                                    </div>
                                    <div className = 'input-txt'>
                                    <label className = 'icon'>
                                        <i class="zmdi zmdi-lock"></i>
                                        </label>
                                        <input
                                         type = 'password' id = 'txt' name = 'pass' placeholder = ' Enter password'
                                         value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className = 'input-txt'>
                                    <label className = 'icon'>
                                        <i class="zmdi zmdi-lock"></i>
                                        </label>
                                        <input
                                        type = 'password' id = 'txt' name = 'pass' placeholder = ' confirm password'
                                        value = {cpassword}
                                         onChange = {(e) => setCpassword(e.target.value)}
                                          />
                                    </div>
                                    <div className = 'btns'>
                                        <button className = 'btn btn-primary'>submit</button>
                                    </div>
                                    </form>
                                </div>
                                <div className = 'col-xl-6 text-center sub-bx'>
                                    <div className = 'container-box'>
                                        <img class="img-fluid" src={Regist} alt="Chania" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}