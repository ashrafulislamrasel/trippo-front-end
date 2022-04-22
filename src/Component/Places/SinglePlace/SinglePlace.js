import React from 'react';
import './SinglePlace.css';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Places from '../../../places.json';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
const SinglePlace = () => {
    const {user}=useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {placeId} = useParams()
    const place = Places.filter(place => place.id === placeId)
    //  const {id,name,city,country,img,price,description } = props.place;
    return (
        <section id='singleService'>
            <Container>
                <Row>
                    <Col sm={6}>
                        {
                            place.map(place => (                  
                                <Card key={place.id} >
                                    <Card.Img variant="top" className='single-image' src={place.img} />
                                    <Card.Body>
                                        <Card.Title>{place.name}</Card.Title>
                                        <Card.Text>
                                        {place.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>City: {place.city}</ListGroupItem>
                                        <ListGroupItem>Country: {place.country}</ListGroupItem>
                                        <ListGroupItem>Price {place.price}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            ))
                            }
                    </Col>
                    <Col sm = {6}>
                        <div className='p-5'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input {...register("name")} type="text" className="form-control" placeholder="Your Name" value={user.displayName}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">E-mail</label>
                                    <input {...register("email")} type="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email Address" value={user.email}/>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">massage</label>
                                    <textarea  {...register("massage")}  type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                                </div>
                                <input type="submit" value='Place Order' />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SinglePlace;