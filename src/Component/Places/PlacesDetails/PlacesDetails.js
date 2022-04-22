import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PlacesDetails = (props) => {
    const {id,name,city,country,img,price,description } = props.place;
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{id} {name}</Card.Title>
            <Card.Text>
                {description.slice(0,90)}
            </Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroupItem><span>City: {city}</span></ListGroupItem>
                <ListGroupItem><span>Country: {country}</span></ListGroupItem>
                <ListGroupItem>Price: {price}</ListGroupItem>
                <ListGroupItem><Button>Book Now</Button></ListGroupItem>
            </ListGroup>
            <NavLink to={`/details/${id}`} className='btn btn-primary'>View Details</NavLink>
            </Card.Body>
            
        </Card>
        </Col>
    );
};

export default PlacesDetails;