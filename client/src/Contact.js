import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './css/Contact.css';

export default function Contact () {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const callPage = async () => {
        try {
            const res = await fetch('/about', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
})
        const result = await res.json();

            if(!result.status === 200) {
                const error = new Error(result.erro);
                throw error;
            }
        }catch(err) {
            history.push('/admin');
        }
    }

    useEffect(() => {
        callPage();
    }, []);

    const submitContact  = async (e) => {
        e.preventDefault();

        const res = await fetch('/contact', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        })

        if(res.status === 201){
            window.alert('sent successfully');
        }else{
            window.alert('not sent');
        }

        setName('');
        setMail('');
        setPhone('');
        setMessage('');

    }

    return (
        <>
            <div className = 'cnt-brd'>
                <div className = 'inf-box'>
                    <strong className = 'sign-in' style = {{padding:'15px'}}>contact</strong>
                    <div className = 'container cont'>
                        <div className = 'row'>
                            <div className = 'col-xl-4'>
                                <div className = 'name' id = 'inf'>
                                <input type = 'text' id = 'inftxt' name = 'name' placeholder = '&#xf007; Name'
                                value = {name}
                                onChange = {(e) => setName(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className = 'col-xl-4'>
                                <div className = 'name' id = 'inf'>
                                <input type = 'text' id = 'inftxt' name = 'email' placeholder = '&#xf0e0;  Email'
                                value = {email}
                                onChange = {(e) => setMail(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className = 'col-xl-4'>
                                <div className = 'name' id = 'inf'>
                                <input type = 'text' id = 'inftxt' name = 'phone' placeholder = '&#xf095;  phone'
                                value = {phone}
                                onChange = {(e) => setPhone(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'container mt-4'>
                        <div className = 'row'>
                            <div className = 'col-xl-12' style = {{textAlign:'center'}}>
                                <textarea className = 'txtar' id = 'msg' name = 'message' placeholder = 'Message'
                                    onChange = {(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className = 'bnt' style = {{padding:'10px'}}>
                        <button className = 'btn btn-primary' style = {{marginLeft:'80px'}} onClick = {submitContact}>submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}