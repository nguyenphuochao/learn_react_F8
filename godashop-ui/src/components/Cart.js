import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/CartContext';
import { convertMoney } from '../helper/util';

function Cart() {
    const context = useContext(CartContext);

    const cart = JSON.parse(localStorage.getItem('cart'));

    const handleDeleteCart = (id) => {
        const index = cart.findIndex(item => item.id === id);
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <Modal size="xl" show={context.show} onHide={context.handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart &&
                            cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img src={item.image} alt="" width={50} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{convertMoney(item.price)}</td>
                                    <td>{convertMoney(Number(item.price) * Number(item.qty))}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDeleteCart(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }

                        <tr>
                            <td colSpan={6}>Total : </td>
                            <td className="text-danger fw-bold fs-5">10000</td>
                        </tr>

                    </tbody>

                </Table>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={context.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={context.handleClose}>
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Cart
