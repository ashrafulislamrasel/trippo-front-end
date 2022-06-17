import React, { useEffect, useState } from 'react';
import './SinglePlace.css';
import axios from 'axios';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { getStoredCart } from '../../../utilities/fakedb';
const SinglePlace = (props) => {
    const {user}=useAuth()
    
    const {placeId} = useParams()
    const [place, setPlaces] = useState([])

    
    
    useEffect(() => {
        const url = `http://localhost:5000/places/${placeId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    // const handleBooking = place => {
    //     const newCart = [...cart, place]
    //     setCart(newCart)
    //     addToDb(place._id)
    // }
    
    const {price, name} = place;
    // useEffect(() => {
    //     const savedCart = getStoredCart();
    //     console.log(savedCart);
    // }, [place])
    
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const savedCart = getStoredCart()
        data.cart = savedCart;
        axios.post('http://localhost:5000/allorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Successfully Placed!')
                    reset();
                }
                console.log(res);
            })
        console.log(data);
    };
    return (
        <section id='singleService'>
            <Container>
                <Row>
                    <Col md = {6}>                        
                        <Card >
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
                    </Col>
                            
                    <Col md = {6}>
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
                                    <label className="form-label">Service Name</label>
                                    <input {...register("serviceName")} type="text" className="form-control" placeholder="Place Name" value={name} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Service Price</label>
                                    <input {...register("price")} type="text" className="form-control" placeholder="Your Email Address" value={price} autoFocus />
                                </div>
                                
                                <div className="mb-3">
                                    <label  className="form-label">Massage</label>
                                    <textarea  {...register("massage")}  type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                                </div>
                                <input type="submit" value='Place Order' />
                                <div className="mb-3 hide">
                                    <label className="form-label">Order Status</label>
                                    <input {...register("status")} type="text" className="form-control" value={'proceccing'} readOnly/>
                                </div>
                            </form>
                        </div>
                    </Col>
                    {/* <Col md={4}>
                        <h1>Order Details</h1>
                        <h3>Item Added: {cart.length}</h3>
                        <h3>Price : {total}</h3>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default SinglePlace;