import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useBurgerDetails from '../../hooks/useBurgerDetails';
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Checkout = () => {
    const [user] = useAuthState(auth);
    const {burgerId}=useParams();
    const nameRef=useRef();
    const emailRef=useRef();
    const burgerRef=useRef();
    const addressRef=useRef();
    const phoneRef=useRef();
    
    // const [burger,setBurgerDtails]=useState({});
    // useEffect(()=>{
    //     const url=`http://localhost:5000/service/${burgerId}`;
        
    //      fetch(url)
    //     .then(response=>response.json())
    //     .then(data=>setBurgerDtails(data))
    // },[burgerId])

     const [burger]=useBurgerDetails(burgerId)

     if(user)
     {
        //  console.log(user);
     }


     const handleUserForm=(event)=>
     {
         event.preventDefault();
         const name=nameRef.current.value;
         const email=emailRef.current.value;
         const burger=burgerRef.current.value;
         const address=addressRef.current.value;
         const phone=phoneRef.current.value;
         console.log(name,email,burger,address,phone);

         const order={name,email,burger,address,phone};


        //  fetch('http://localhost:5000/order',{
        //      method:'POST',
        //      headers:{
        //          'content-type':'application/json'
        //      },

        //      body:JSON.stringify(order)
        //  })

        //  .then(response=>response.json())
        //  .then(data=>console.log(data))

        axios.post('http://localhost:5000/order',order)
        .then(response=>{console.log(response)

          const {data}=response;
          if(data.insertedId)
          {
             toast('your order is booked!!!!!!!!!')
            
          }
        
        })
        

         event.target.reset();

     }
   
    return (
        <div>
            {/* <h2>This is checkout :{burgerId}</h2> */}
             <h2 className='text-center'>This is checkout Name :{burger?.Name}</h2> 
             <div className='w-50 mx-auto'>
             <form onSubmit={handleUserForm}>
             <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" ref={nameRef} class="form-control" id="exampleInputName" value={user?.displayName} aria-describedby="emailHelp"required readOnly disabled/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" ref={emailRef} class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" required  autoComplete='off'/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputService" class="form-label">Burger</label>
    <input type="text" ref={burgerRef} class="form-control" id="exampleInputEmail1" value={burger?.Name} aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputAddress" class="form-label"> Address</label>
    <input type="text" ref={addressRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  autoComplete='off'/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone No</label>
    <input type="number" ref={phoneRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required autoComplete='off'/>
    <div id="emailHelp" class="form-text"></div>
  </div>
 
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             </div>
            
        </div>
         
    );
};

export default Checkout;