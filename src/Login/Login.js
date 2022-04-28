import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import MultipleLogin from '../Components/MultipleLogin/MultipleLogin';
import auth from '../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import axios from 'axios';

const Login = () => {
  const navigate=useNavigate();
    const emailRef=useRef('');
    const passRef=useRef('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
      auth
    );
    const handleRegister= async(event)=>
    {
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        //console.log(email,password);
        await signInWithEmailAndPassword(email,password);


        const {data}=await axios.post(`http://localhost:5000/login`,{email});
        // console.log(data);
        localStorage.setItem('accessToken',data)
        navigate('/home');
        


    }

    if(user)
    {
      

    }

    const handleResetPassword= async()=>
    {
      const email=emailRef.current.value;
      await sendPasswordResetEmail(email);
          alert('Sent email');

    } 
 




    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-primary text-center'>Please Login!!!!!!!</h2>
            <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passRef} type="password" placeholder="Password" />
  </Form.Group>
  <p className='text-danger'> {error?.message} {error2?.message} </p>
  {/* <p className='text-danger'> {error2?.message} </p> */}
  
 <p>Do not have an account <Link className='pe-auto text-decoration-none text-primary' to='/registration'>Please Register</Link></p>
  <p>Have you forgotten your password!! <Link to='/registration' className='pe-auto text-decoration-none text-primary' onClick={handleResetPassword}>Please Reset your password</Link></p> 
{/*  <button
        onClick={async () => {
          const email=emailRef.current.value;
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}
      >
        Reset password
      </button> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<MultipleLogin></MultipleLogin>
            
            
        </div>
    );
};

export default Login;
