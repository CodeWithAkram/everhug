import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footertop = () => {
    return (
        <>
            <section className="mt-5 pt-5 pb-5 footertop">
                <Container>
                    {/* <h1 className="text-center mb-5 service-title">Connect us</h1> */}
                    <Row>
                        <Col xs={12} md={4}>
                            <h2>Contact us</h2>
                            <p></p>
                            <h4>Corporate Office Address</h4>
                            <p>Office 1, Tower B Suncity success Tower, Golf course Extension Road Sector 62 Noida, Uttar Pradesh, 110099</p>
                            <p>zafar@everhug.com</p>
                            <p>+91 1111 401 791 <br />
                                +91 1111-466-955</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>About us</h2>
                            <p>What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>Why Choose us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footertop;