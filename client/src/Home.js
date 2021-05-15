import React, {useEffect, useContext, useState } from 'react';
import './css/Home.css';

export default function Home () {
    
    const [midname, setMidname] = useState('we are the mern developers');

    const callPage = async () => {
        try {
            const res = await fetch('/about', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
})
        const result = await res.json();
        setMidname(result.name);

            if(!result.status === 200) {
                const error = new Error(result.erro);
                throw error;
            }
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callPage();
    }, []);

    return (
        <>
            <div className = 'home-bnd'>
                <div className = 'nam'>
                    <h3>welcome</h3>
                    <h1>{midname}</h1>
                    </div>
                <div className = 'bckr'>
                    <div className = 'b1'>
                    </div>
                    <div className = 'b2'>
                    </div>
                </div>
            </div>
        </>
    );
}