import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Banner from '../../images/banner.png'
import GeneralIcon from '../../components/icons/GeneralIcom';
import './index.css';
import Button from 'react-bootstrap/Button';
import Product from '../../components/Product';


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
                            <GeneralIcon />
                            <h4 className='pre-title'>Best Quality Products</h4>
                            <h2 className='title'>Join The Pharmaoic Movement!</h2>
                            <p className='content'>Content goes here Content goes here Content goes here...</p>
                            <Button className='shop-now-btn'>Shop now</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className='best-products'>
            <h1>Best Products</h1>
            <GeneralIcon />
            <Row className="justify-content-center" lg={4} style={{ marginTop: '16px'}}>
                <Product />
                <Product />
                <Product />
                <Product />
            </Row>
        </Container>
    </>
}

export default Home;