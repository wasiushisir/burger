import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate=useNavigate();
    const [user]=useAuthState(auth)
    const [orders,setOrders]=useState([])
    useEffect(()=>{

        const getOrders=async()=>
        {
        const email=user?.email;
        
        const url=(`http://localhost:5000/order?email=${email}`)
       try{
        const {data}= await axios.get(url,{
            headers:{
                authorization: `Beareer ${localStorage.getItem('accessToken')}`
            }

        });
        setOrders(data)
        

       }
       catch(error){

        console.log(error?.message);
        if(error.response.status===401||error.response.status===403)
        {
            signOut(auth);
            navigate('/login')


        }

       }

        }
        getOrders()
      

       
    },[user])


    return (
        <div>
            <h2>Your Order:{orders.length}</h2>
            
        </div>
    );
};

export default Order;