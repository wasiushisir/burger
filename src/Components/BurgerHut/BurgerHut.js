import React, { useEffect, useState } from 'react';
import Burger from '../Burger/Burger';
import './BurgerHut.css';

const BurgerHut = () => {
    const [burgers,setBurgers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(response=>response.json())
        .then(data=>setBurgers(data))
    },[])
     return (
        <div className='burgerHut-container'>
            {
                // burgers.map(burger=>console.log(burger))
            }

            {
                burgers.map(burger=><Burger key={burger._id} burger={burger}></Burger>)


            }
            
                                    

                

            
            
        </div>
    );
};

export default BurgerHut;