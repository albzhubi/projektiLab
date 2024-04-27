import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Banner from '../../images/banner.png'

const Home = () => {
    return <>
        <div className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        {/* First column with image */}
                        <Image src={Banner} alt="Banner Image" fluid />
                    </Col>
                    <Col xs={12} md={6}>
                        {/* Second column with title, subtitle, and content */}
                        <div className="banner-content">
                            <h2>Title</h2>
                            <h4>Subtitle</h4>
                            <p>Content goes here...</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

export default Home;