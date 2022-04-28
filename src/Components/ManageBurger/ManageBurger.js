import React from 'react';
import Useburger from '../../hooks/Useburger';
import './ManageBurger.css';

const ManageBurger = () => {
    const[burgers,setBurgers]=Useburger();
    const handleDelete=(id)=>{
        const proceed=window.confirm('Are you sure you wanna delete')
        if(proceed)
        {
            const url=`http://localhost:5000/service/${id}`;
            fetch(url,{
                method:'DELETE',

            })
            .then(response=>response.json())
            .then(data=>console.log(data))
            const remaining=burgers.filter(burger=>burger._id!==id)
            setBurgers(remaining);
        }
    }
    return (
        <div className='manage-burger'>
            <h2>manage burger</h2>
            {
                burgers.map(burger=><div key={burger._id}>
                    <h5>Name:{burger.Name} <button onClick={()=>handleDelete(burger._id)}>X</button></h5>
                </div>)
            }
            
        </div>
    );
};

export default ManageBurger;