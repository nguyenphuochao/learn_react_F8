import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Cart({ show, handleClose }) {

    const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const [total, setTotal] = useState(totalCart);

    function totalCart() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].qty
        }
        return total
    }

    console.log(total);

    const handleDeleteCart = (id) => {
        const index = cart.findIndex(item => item.id === id);
        const newCart = cart;
        newCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setTotal(totalCart());
    }

    return (
        <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <input type="number" className='w-50' value={item.qty} />
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{Number(item.price) * Number(item.qty)}</td>
                                    <td>
                                        <Button variant="danger btn-sm" onClick={() => handleDeleteCart(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Cart
