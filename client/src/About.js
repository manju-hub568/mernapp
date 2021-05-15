import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './css/About.css';

export default function About () {

    const history = useHistory();

    const [userData, setData] = useState('');

    const callPage = async () => {
        try {
            const res = await fetch('/about', {
                method:'GET',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                credentials:'include'
            })
        const result = await res.json();
        setData(result);

            if(!res.status === 200) {
                const error = new Error(res.erro);
                throw error;
            }
        }catch(err) {
            history.push('/admin');
        }
    }

    useEffect(() => {
        callPage();
    }, [])

    return (
        <>
            <div className = 'abt'>
                <div className = 'box'>
                <strong className = 'sign-in'>About</strong>
                <div className = 'name'>
                    <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-xl-6'>
                                <label className = 'title'>ID</label>
                            </div>
                            <div className = 'col-xl-6'>
                                <label className = 'field text-primary'>{userData._id}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'name'>
                <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-xl-6'>
                                <label className = 'title'>Name</label>
                            </div>
                            <div className = 'col-xl-6'>
                                <label className = 'field text-primary'>{userData.name}</label>
                            </div>
                        </div>
                    </div>                                 
                </div>
                <div className = 'name'>
                <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-xl-6'>
                                <label className = 'title'>Email</label>
                            </div>
                            <div className = 'col-xl-6'>
                                <label className = 'field text-primary'>{userData.email}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'name'>
                <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-xl-6'>
                                <label className = 'title'>phone</label>
                            </div>
                            <div className = 'col-xl-6'>
                                <label className = 'field text-primary'>{userData.phone}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'name'>
                <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-xl-6'>
                                <label className = 'title'>Address</label>
                            </div>
                            <div className = 'col-xl-6'>
                                <label className = 'field text-primary'>{userData.address}</label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}