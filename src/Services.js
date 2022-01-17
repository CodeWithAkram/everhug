import React, { useState } from 'react';

import { Card, Row, Col, Container, Modal, Button } from 'react-bootstrap';

const Services = () => {

        return (
        <>
        
            <section className="mt-5 mb-5">
                <Container>
                    <h1 className="text-center mb-5 service-title">Everhug Latest & Trending Products</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <Row xs={1} md={2} lg={3} className="g-4 mt-5">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="images/side2.jpg" />

                                <Card.Body>
                                    <Card.Title><h2>₹499</h2></Card.Title>
                                    <Card.Text>
                                        <p>Taabu Brown Beauty Leopard Print Polyamide Bikini Panty</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="images/side1.jpg" />

                                <Card.Body>
                                    <Card.Title><h2>₹299</h2></Card.Title>
                                    <Card.Text>
                                        <p>Taabu Black Beauty Leopard Print Polyamide Bikini Panty</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="images/h1.jpg" />

                                <Card.Body>
                                    <Card.Title><h2>₹399</h2></Card.Title>
                                    <Card.Text>
                                        <p>Taabu Pink Beauty Leopard Print Polyamide Bikini Panty</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Services;