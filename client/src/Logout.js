import React, {useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { usercontext } from './App';

export default function Logout () {

    const history = useHistory();

    const {state, dispatch} = useContext(usercontext)

    useEffect(() => {
        fetch('/logout', {
            method:'GET',
            headers: {
                Accept : 'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            dispatch({type:'USER', payload:false})
            history.push('/admin', {replace:true});
            if(res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
        </>
    );
}