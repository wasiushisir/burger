import React from 'react';
import logo2 from '../../img/logo1.13.png'
import logo3 from '../../img/logo2.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MultipleLogin = () => {
    const [signInWithGoogle, user2, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1,  error2] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    if(user2||user1)
                {
                    navigate('/home')
                }

    return (
        <div>
            <div className='d-flex align-items-center' >
                <div className='w-50 bg-primary ' style={{ height: '1px' }}>

                </div>
                <p className='px-2 mt-2'>
                    or

                </p>
                <div className='w-50 bg-primary ' style={{ height: '1px' }}>

                </div>
                


              


            </div>

            <p className='text-danger text-center'>{error1?.message} {error2?.message}</p>

            <button onClick={()=>signInWithGoogle()} className='btn btn-info w-50 mx-auto d-block '><span className='pe-1'><img style={{ height: '30px' }} src={logo2} alt="" /></span>
                Google SignIn</button>
            <button onClick={()=>signInWithGithub()} className='btn btn-info w-50 mx-auto d-block mt-3'><span className='pe-1'><img style={{ height: '30px' }} src={logo3} alt="" /></span>
                Github SignIn</button>
                
              

        </div>













    );
};

export default MultipleLogin;