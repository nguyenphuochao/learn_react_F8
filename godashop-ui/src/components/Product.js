import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ item, handleAddToCart }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <div className="card-price text-danger fw-bold">{item.price}</div>
                <Card.Text>
                   {item.desc}
                </Card.Text>
                <Button variant="primary" onClick={() =>handleAddToCart(item.id)}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product
