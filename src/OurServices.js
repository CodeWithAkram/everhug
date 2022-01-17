import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import Footer from "./Footer";
import Footertop from "./Footertop";
import { Helmet } from "react-helmet";

import { Card, Row, Col, Container, Modal, Button } from 'react-bootstrap';

const OurServices = () => {


    return (
        <>
           <Helmet>
                <title>Welcome to Our Services page</title>
                <meta name="description" content="Welcome to White Pigeon Holidays Contact page" />
            </Helmet>
            <Menu />
            <Banner />
            <section className="mt-5 mb-5">
                <Container>
                    <h1 className="text-center mb-5 service-title">Services</h1>
                    <p>Explore the unexpected with Helia’s curated culture trips.​ Delve into the lifestyle and the fascinating history of the locals while discovering delectable cuisine, breathtaking architecture, and delightful experiences.</p>
                   
                    <Row xs={1} md={3} lg={4} className="g-4 mt-5">
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="images/taj-mahal.jpg" />
                                        
                                    <Card.Body className="card-body-margin">
                                        <Card.Title className="card-title-text">India</Card.Title>
                                        <Card.Text className="card-text-new">
                                            North India
                                        </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footertop />
            <Footer />
        </>
    )
}

export default OurServices;
