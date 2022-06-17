import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ALLOrderDetao = (props) => {
    const { name, serviceName,status } = props.allOrder
    
    const handleDelete = id => {
        const url = `http://localhost:5000/all-orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
       
        <Col>
            <Card>
                <Card.Body>
                <Card.Title>Client Name: {name}</Card.Title>
                <Card.Text>
                    Places want to visit: {serviceName}
                </Card.Text>
                <Card.Text>
                    Order Status: {status}
                </Card.Text>
                <button onClick = {() => handleDelete(props.allOrder._id)
                }
                className = 'btn btn-primary'> Delete 
                </button>
                </Card.Body>
            
        </Card>
            </Col>
    );
};

export default ALLOrderDetao;