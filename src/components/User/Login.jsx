import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmpty } from '../../helpers/FormHelper';
import { UserLoginRequest } from '../../APIRequest/UserAPIRequest';

const Login = () => {
    let emailRef = useRef()
    let passwordRef = useRef()
    const navigate = useNavigate()

    const OnUserLogin = async () => {
        const email = emailRef.value;
        const password = passwordRef.value;

        if (IsEmpty(email)) {
            ErrorToast("Email is required")
        }
        else if (IsEmpty(password)) {
            ErrorToast("Password is required")
        }
        else {
            const res = await UserLoginRequest(email, password)
            if (res === true) {
                navigate('/dashboard')
            }
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 center-screen'>
                    <div className='card w-100'>
                        <div className='card-body'>
                            <h4>Login</h4>
                            <hr className='bg-dark'></hr>
                            <div className='col-lg-8 text-start form-group mx-7'>
                                <label className='form-label'>Email</label>
                                <input ref={(input) => emailRef = input} type='email' placeholder='Enter email' className='form-control'></input>
                            </div>

                            <div className='col-lg-8 text-start form-group mx-7'>
                                <label className='form-label'>Password</label>
                                <input ref={(input) => passwordRef = input} type='password' placeholder='Enter Password' className='form-control'></input>
                            </div>

                            <div className='col-lg-8 form-group mx-7'>
                                <button onClick={OnUserLogin} className='btn btn-success w-100 mt-3'>Login</button>
                            </div>

                            <div className='form-group'>
                                <NavLink to='/Registration' className='font-weight-bolder'><span className='text-xx font-weight-bolder'>Don't have an account !</span><span className='text-info font-weight-bolder text-xx'> Click</span></NavLink>
                                <br></br>
                                <NavLink className='font-weight-bolder mt-2 text-info text-xx'>Forgot Password</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;