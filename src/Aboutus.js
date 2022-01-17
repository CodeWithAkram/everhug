import React from "react";
import Menu from './Menu';
import Banner from './Banner';
import Footer from "./Footer";
import Footertop from "./Footertop";
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";

const Aboutus = () => {
    return (
        <>
            <Helmet>
                <title>About us page - White Pigeon Holidays</title>
                <meta name="description" content="this is for about us page" />
            </Helmet>
            <Menu />
            <Banner />

            <section className="mt-5 mb-5">
                <Container fluid>
                    <h1 className="text-center mb-5 service-title">About us</h1>
                    <Row>
                        <Col xs={12} md={6} className="about bg-light">
                            <h1>What is Lorem Ipsum?</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /><br />

                                Why do we use it?<br />
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <figure>
                                <img
                                    src="images/side5.jpg"
                                    alt="lake udaipur"
                                    className="about-img" />
                            </figure>
                        </Col>

                    </Row>
                </Container>
            </section>
            <Footertop />
            <Footer />
        </>
    )
}

export default Aboutus;