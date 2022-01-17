import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Ourstory = () => {
    return (
        <>
            <section className="mt-5 mb-5">
                <Container fluid>
                    <h1 className="text-center mb-5 service-title">Women Xrated Innerwears by Evrhug</h1>
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

            <section className="mt-5 mb-5">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <figure>
                                <img
                                    src="images/banner-mid.jpg"
                                    alt="painty"
                                    className="about-img" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mt-5 mb-5 story">
                <Container>
                    <h1 className="text-center mb-5 story-title">Full & Fablous Crafted to Share and Support</h1>
                    <Row>
                        <Col xs={12} md={6} className="text-center">
                            <h1>Everhug</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Col>
                        <Col xs={12} md={6}><figure><img src="images/side3.jpg" alt="banner" className="ourstory-img" /></figure></Col>

                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Ourstory;