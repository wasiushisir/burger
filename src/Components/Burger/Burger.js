import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Burger.css'

const Burger = ({burger}) => {
    // console.log(burger);
    const {_id,img,Name,Review,Ratings}=burger;
    console.log(_id);
    const navigate=useNavigate();
    const handleBurger=(id)=>
    {
        navigate(`/burger/${id}`);

    }
    return (
        <div className='bu'>
            <img src={img} alt="" />
            <h3>Name:{Name}</h3>
            <p>Review:{Review}</p>
            <p>Ratings:{Ratings}</p>
            <button onClick={()=>handleBurger(_id)}>CheckOut</button>
            
        </div>
    );
};

export default Burger;
