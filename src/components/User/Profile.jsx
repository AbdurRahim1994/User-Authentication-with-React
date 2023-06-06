import React, { useEffect, useRef } from 'react';
import profile from '../../assets/image/Sample_User_Icon.png'
import { useSelector } from 'react-redux';
import { UserPasswordUpdateWithLoginRequest, UserProfileDetailRequest, UserUpdateRequest } from '../../APIRequest/UserAPIRequest';
import { ErrorToast, IsEmpty } from '../../helpers/FormHelper';
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    let nameRef = useRef();
    let emailRef = useRef()
    let oldPasswordRef = useRef();
    let newPasswordRef = useRef();
    let confirmPasswordRef = useRef()

    useEffect(() => {
        UserProfileDetailRequest();
    }, [])

    const profileData = useSelector((state) => state?.profile?.Profile)

    const OnUserUpdate = async () => {
        const name = nameRef.value;
        const email = emailRef.value;

        if (IsEmpty(name)) {
            ErrorToast("Name is required")
        }
        else if (IsEmpty(email)) {
            ErrorToast("Email is required")
        }
        else {
            const res = await UserUpdateRequest(name, email)
            console.log("Res", res)
            if (res === true) {
                navigate('/Dashboard')
            }
        }
    }

    const OnPasswordUpdate = async () => {
        const oldPassword = oldPasswordRef.value;
        const newPassword = newPasswordRef.value;
        const confirmPassword = confirmPasswordRef.value;

        if (IsEmpty(oldPassword)) {
            ErrorToast("Old password is required")
        }
        else if (IsEmpty(newPassword)) {
            ErrorToast("New password is required")
        }
        else if (IsEmpty(confirmPassword)) {
            ErrorToast("Confirm password is required")
        }
        else if (newPassword !== confirmPassword) {
            ErrorToast("Password do not match")
        }
        else {
            const res = await UserPasswordUpdateWithLoginRequest(oldPassword, newPassword);
            if (res === true) {
                navigate('/Dashboard')
            }
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='card mt-5' style={{ minHeight: 650 }}>
                                    <div className='card-body'>
                                        <h4 className='font-weight-bolder'>Personal Details</h4>
                                        <div>
                                            <img src={profile} height={150} width={150} className='ms-8'></img>
                                            <hr className='bg-dark'></hr>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label'>Name</label>
                                            <input ref={(input) => nameRef = input} defaultValue={profileData?.name} type='text' className='form-control animated fadeInUp'></input>
                                        </div>

                                        <div className='form-group'>
                                            <label className='form-label'>Email</label>
                                            <input ref={(input) => emailRef = input} defaultValue={profileData?.email} type='text' disabled={true} className='form-control animated fadeInUp'></input>
                                        </div>

                                        <div>
                                            <button onClick={OnUserUpdate} className='btn btn-success w-100 mt-3'>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='card mt-5' style={{ minHeight: 650 }}>
                                    <div className='card-body'>
                                        <h4 className='font-weight-bolder'>Change Password</h4>

                                        <div>
                                            <img src={profile} height={150} width={150} className='ms-8'></img>
                                            <hr className='bg-dark'></hr>
                                        </div>

                                        <div className='form-group'>
                                            <label className='form-label'>Old Password</label>
                                            <input ref={(input) => oldPasswordRef = input} type='password' className='form-control animated fadeInUp'></input>
                                        </div>

                                        <div className='form-group'>
                                            <label className='form-label'>New Password</label>
                                            <input ref={(input) => newPasswordRef = input} type='password' className='form-control animated fadeInUp'></input>
                                        </div>

                                        <div className='form-group'>
                                            <label className='form-label'>Confirm Password</label>
                                            <input ref={(input) => confirmPasswordRef = input} type='password' className='form-control animated fadeInUp'></input>
                                        </div>

                                        <div>
                                            <button onClick={OnPasswordUpdate} className='btn btn-success w-100 mt-3'>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;