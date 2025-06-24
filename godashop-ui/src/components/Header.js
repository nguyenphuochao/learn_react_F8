import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';

const products = [
    {
        id: 1,
        name: "iPhone X",
        price: 2500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 2,
        name: "iPhone 11",
        price: 3500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-trang.png",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 3,
        name: "iPhone 12",
        price: 4500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/329135/iphone-16-pink-600x600.png",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 4,
        name: "iPhone 13",
        price: 5500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-plus-thumb-xanh-600x600.jpg",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 5,
        name: "iPhone 14",
        price: 6500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-vang-126gb-thumb-600x600.jpg",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 6,
        name: "iPhone 15",
        price: 7500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 7,
        name: "iPhone 16",
        price: 8500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
        desc: "Thông tin sản phẩm"
    },
    {
        id: 8,
        name: "iPhone 17",
        price: 9500000,
        image: "https://cdn.tgdd.vn/Products/Images/42/334864/iphone-16e-white-thumb-600x600.jpg",
        desc: "Thông tin sản phẩm"
    }
];

let timeout = null;

function Header() {
    const context = useContext(CartContext);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{
                position: 'sticky',
                top: 0,
                zIndex: 999
            }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Godashop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/news">News</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="me-2">
                            <Nav.Link href="#" className="text-danger fs-5 fw-bold">1</Nav.Link>
                            <Button onClick={context.handleShow}>Cart</Button>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                            <>
                                <ul style={{
                                    position: 'absolute',
                                    top: '50px',
                                    background: '#ede4e4',
                                    width: '287px',
                                    listStyle: 'none',
                                    padding: '10px'
                                }}>

                                    <li key={1} className="mt-2">
                                        <img src={'https://cdn.tgdd.vn/Products/Images/42/334864/iphone-16e-white-thumb-600x600.jpg'} width={'50px'} alt={''} />
                                        {'Sản phẩm A'} - {'10000000'}
                                    </li>

                                </ul>
                            </>

                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Cart Modal */}
            <Cart />
        </>
    )
}

export default Header
