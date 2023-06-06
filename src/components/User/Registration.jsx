import React, { useRef } from 'react';
import { ErrorToast, IsEmpty } from '../../helpers/FormHelper';
import { UserRegistrationRequest } from '../../APIRequest/UserAPIRequest';
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    const navigate = useNavigate();

    const OnUserRegistration = async () => {
        const name = nameRef.value;
        const email = emailRef.value;
        const password = passwordRef.value

        if (IsEmpty(name)) {
            ErrorToast("Name is required")
        }
        else if (IsEmpty(email)) {
            ErrorToast("Email is required")
        }
        else if (IsEmpty(password)) {
            ErrorToast("Password is required")
        }
        else {
            const res = await UserRegistrationRequest(name, email, password);
            if (res === true) {
                navigate('/Login')
            }
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 center-screen'>
                    <div className='card w-100'>
                        <div className='card-body'>
                            <h4>Sign Up</h4>
                            <hr className='bg-dark'></hr>
                            <div className='row'>
                                <div className='form-group col-lg-10 text-start mx-5'>
                                    <label className='form-label'>Name</label>
                                    <input ref={(input) => nameRef = input} type='text' placeholder='Enter name' className='form-control animated fadeInUp'></input>
                                </div>

                                <div className='form-group col-lg-10 text-start mx-5'>
                                    <label className='form-label'>Email</label>
                                    <input ref={(input) => emailRef = input} type='email' placeholder='Enter email' className='form-control animated fadeInUp'></input>
                                </div>

                                <div className='form-group col-lg-10 text-start mx-5'>
                                    <label className='form-label'>Password</label>
                                    <input ref={(input) => passwordRef = input} type='password' placeholder='Enter Password' className='form-control animated fadeInUp'></input>
                                </div>

                                <div className='form-group col-lg-10 mx-5'>
                                    <button onClick={OnUserRegistration} className='btn btn-success w-100 mt-2'>Registration</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;