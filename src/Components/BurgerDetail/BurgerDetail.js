import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useBurgerDetails from '../../hooks/useBurgerDetails';

const BurgerDetail = () => {
    // const navigate=useNavigate();
    const {burgerId}=useParams();
    const [burger]=useBurgerDetails(burgerId)
    // useEffect(()=>{
    //     const url=`http://localhost:5000/service/${burgerId}`;
        
    //      fetch(url)
    //     .then(response=>response.json())
    //     .then(data=>setBurgerDtails(data))
    // },[])
    // const handleProceed=(burgerId)=>
    // {
    //     navigate(`/checkout/:${burgerId}`)
    // }
    return (
        <div>
            <h2>{burger.Name}</h2>

            <div>
                <Link to={`/checkout/${burgerId}`}>
                <button>Proceed CheckOut</button>
                </Link>
               
            </div>
            
        </div>
    );
};

export default BurgerDetail;
