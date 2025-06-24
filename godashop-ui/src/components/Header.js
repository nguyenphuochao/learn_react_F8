import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import products from '../services/product';

let timeout = null;

function Header({ totalCart, handleDeleteCart, handleChangeQty }) {
    const [modalCart, setModalCart] = React.useState(false);
    const handleClose = () => setModalCart(false);
    const handleShow = () => setModalCart(true);

    const [search, setSearch] = useState([]);

    const handleSearch = (e) => {

        if (e.target.value === '') {
            console.log('data');
            setSearch([]);
            return;
        }

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            const search = products.filter((item) => {
                const name = e.target.value.toLowerCase();
                return item.name.toLocaleLowerCase().includes(name);
            });
            setSearch(search);
        }, 500)

    }

    const handleSearchForm = () => {

    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{
                position: 'sticky',
                top: 0,
                zIndex: 999
            }}>
                <Container>
                    <Navbar.Brand href="#">Godashop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Product</Nav.Link>
                            <Nav.Link href="#action3">Contact</Nav.Link>
                        </Nav>
                        <Nav className="me-2">
                            <Nav.Link href="#" className="text-danger fs-5 fw-bold">{totalCart}</Nav.Link>
                            <Button onClick={() => handleShow(true)}>Cart</Button>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onKeyUp={(e) => handleSearch(e)}
                            />
                            {search.length > 0 &&
                                <>
                                    <ul style={{
                                        position: 'absolute',
                                        top: '50px',
                                        background: '#ede4e4',
                                        width: '205px',
                                        listStyle: 'none',
                                        padding: '10px'
                                    }}>
                                        {
                                            search.map(item =>
                                                <li className="mt-2">
                                                    <img src={item.image} width={'20px'} alt={item.name} />
                                                    {item.name} - {item.price}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </>
                            }

                            <Button variant="outline-success" onClick={handleSearchForm}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* CartModal */}
            <Cart show={modalCart} handleClose={handleClose} handleDeleteCart={handleDeleteCart} handleChangeQty={handleChangeQty} />
        </>
    )
}

export default Header
