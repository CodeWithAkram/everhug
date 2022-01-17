import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import Footer from "./Footer";
import Footertop from "./Footertop";
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";

const Contactus = () => {
    return (
        <>
             <Helmet>
                <title>Welcome to Everhug Contact page</title>
                <meta name="description" content="Welcome to Everhug Contact page" />
            </Helmet>

            <Menu />
            <Banner />
            <section className="mt-5 mb-5">
                <Container className="about">
                    <h1 className="text-center mb-5 service-title">Reach us at!</h1>
                    <Row>
                        <Col xs={12} md={4}>
                            <h2>Corporate Office Address</h2>
                            <p>Office 1, Tower B Suncity success Tower, Golf course Extension Road Sector 62 Noida, Uttar Pradesh, 110099</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>Mail us</h2>
                            <p>zafar@everhug.com</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>Call us</h2>
                            <p>+91 1111 401 791 <br />
                                +91 1111-466-955</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footertop />
            <Footer />
        </>
    )
}

export default Contactus;
