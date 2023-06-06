import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import profile from '../../assets/image/Sample_User_Icon.png'
import authentication from '../../assets/image/authenticate.png'
import { NavLink } from 'react-router-dom'
import { RemoveSession, GetUserDetail } from '../../helpers/SessionHelper'
import { AiOutlineLogout, AiOutlineUser, AiOutlineMenu, AiFillDashboard } from 'react-icons/ai'
import { LogoutAlert } from '../../helpers/LogoutAlert';
import { SuccessToast } from '../../helpers/FormHelper'

const MasterLayout = (props) => {
    let sideNavRef = useRef();
    let contentRef = useRef();
    let topNavRef = useRef();

    const OnMenuClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        const topNav = topNavRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
            topNav.classList.add('top-nav-close')
            topNav.classList.remove('top-nav-open')
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
            topNav.classList.add('top-nav-open')
            topNav.classList.remove('top-nav-close')
        }
    };

    const Logout = async () => {
        const res = await LogoutAlert();
        if (res.isConfirmed) {
            RemoveSession();
            SuccessToast("Successfully Logout")
        }
    }
    return (
        <div>
            <Navbar className='fixed-top px-0 shadow-sm'>
                <Container fluid={true}>
                    <Navbar.Brand>
                        <div ref={(div) => topNavRef = div} className='top-nav-open'>
                            <h4 className='text-white p-0 m-0'><a onClick={OnMenuClickHandler}><AiOutlineMenu></AiOutlineMenu></a></h4>
                        </div>
                    </Navbar.Brand>

                    <div className='float-right h-auto d-flex align-items-center'>
                        <div className='user-dropdown'>
                            <img src={profile} className='icon-nav-img icon-nav' alt='logo'></img>
                            <div className='user-dropdown-content'>
                                <div className='mt-4 text-center'>
                                    <img src={profile} alt='logo' className='icon-nav-img'></img>
                                    <h6>{GetUserDetail()?.name}</h6>
                                    <hr className='user-dropdown-divider p-0'></hr>
                                    <NavLink to='/Dashboard/Profile' className='side-bar-item'>
                                        <AiOutlineUser className='side-bar-item-icon'></AiOutlineUser>
                                        <span className='side-bar-item-caption'>Profile</span>
                                    </NavLink>
                                    <a className='side-bar-item'>
                                        <AiOutlineLogout className='side-bar-item-icon'></AiOutlineLogout>
                                        <span onClick={Logout} className='side-bar-item-caption'>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) => sideNavRef = div} className='side-nav-open'>
                <NavLink to='/' className='d-flex justify-content-center sticky-top bg-white'>
                    <img src={authentication} className='icon-nav-img-lg mt-3'></img>
                </NavLink>

                <NavLink to='/Dashboard' className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"}>
                    <AiFillDashboard className='side-bar-item-icon'></AiFillDashboard>
                    <span className='side-bar-item-caption'>Dashboard</span>
                </NavLink>

                <NavLink to='/Profile' className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"}>
                    <AiOutlineUser className='side-bar-item-icon'></AiOutlineUser>
                    <span className='side-bar-item-caption'>Profile</span>
                </NavLink>

                <a className='side-bar-item'>
                    <AiOutlineLogout className='side-bar-item-icon'></AiOutlineLogout>
                    <span onClick={Logout} className='side-bar-item-caption'>Logout</span>
                </a>
            </div>

            <div ref={(div) => contentRef = div} className='content'>
                {props.children}
            </div>
        </div>
    );
};

export default MasterLayout;