import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import authentication from '../../assets/image/authenticate.png'
import Carousel from 'react-bootstrap/Carousel';
import authentication2 from '../../assets/image/Authentication.png'

const Home = () => {
    return (
        <div>
            <Navbar bg='light' expand='lg' variant='light'>
                <Container className='p-2' fluid={true}>
                    <Navbar.Brand href="#home" className='font-weight-bolder'>
                        <img src={authentication} className='icon-nav-img mb-0'></img>
                    </Navbar.Brand>
                    <NavLink to='/Login' className='btn btn-warning mb-0 mx-10 font-weight-bolder'>Login</NavLink>
                </Container>
            </Navbar>

            <div>
                <p className='m-5 home-paragraph'>Secure Application by <span className='font-weight-bolder home-span'>Authenticating</span> Your User</p>
            </div>

            <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={authentication2}
                            alt="First slide"
                            height={250}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={authentication2}
                            alt="Second slide"
                            height={250}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={authentication2}
                            alt="Third slide"
                            height={250}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Home;