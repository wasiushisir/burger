import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../firebase.init';
import MultipleLogin from '../Components/MultipleLogin/MultipleLogin';

const Registration = () => {

  const emailRef = useRef('');
  const passRef = useRef('');
  const confirmpassRef = useRef('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [agree,setAgree]=useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error1,

  ] = useCreateUserWithEmailAndPassword(auth);



  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmpassword = confirmpassRef.current.value;


    if (password !== confirmpassword) {
      setError('your password does not match');
      return;
    }


    if (password.length < 6) {
      setError('password must be 6 character long');
      return;
    }

    if(agree)
    {
      createUserWithEmailAndPassword(email, password);

    }

    







  }

  if (user) {
    navigate('/home');
  }




  return (


    <div className='w-50 mx-auto mt-5'>
      <h2 className='text-primary text-center'>Please Register!!!!!!!</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={confirmpassRef} type="password" placeholder="Confirm-Password" />
        </Form.Group>
        <p className='text-danger'>{error}</p>
        <p className='text-danger'> {error1?.message}</p>
        <p>Already  have an account <Link className='pe-auto text-decoration-none' to='/login'>Please Login</Link></p>
       
        <div class="mb-3 form-check">
    <input onClick={()=>setAgree(!agree)} type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className={agree?'text-primary':'text-danger'} for="exampleCheck1">Check me out</label>
  </div>

        <Button disabled={!agree} className='btn btn-primay d-block w-50 mx-auto' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <MultipleLogin></MultipleLogin>


    </div>

  );

};
<MultipleLogin></MultipleLogin>



export default Registration;
