import React from './Banner';

import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

const Banner = () => {
    return (
        <>
            <section>
                <Carousel variant="light">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner1.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>

                        </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner2.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner3.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner4.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner5.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner/banner6.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <Figure>
                                <Figure.Image
                                    width={220}
                                    height={180}
                                    alt="171x180"
                                    src="images/logo1.png"
                                /></Figure>
                            <h1 className="text-white">Welcome to Everhug: Clothing & Accessories</h1>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );
}

export default Banner;