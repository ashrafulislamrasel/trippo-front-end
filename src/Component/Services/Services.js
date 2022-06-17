import React from 'react';
import { Row } from 'react-bootstrap';
import usePlaces from '../../Hooks/useState';
import PlacesDetails from '../Places/PlacesDetails/PlacesDetails';

const Services = () => {
    const { places } = usePlaces()
    console.log(places);
    
    const handleBooking = places => {
        console.log(places);
    }
    return (
        <section id='places'>
            <div className="container">
                <h3>Places You Can visit</h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        places.map(place =>
                            <PlacesDetails
                                key={place.id}
                                place={place}
                                handleBooking={handleBooking}
                        ></PlacesDetails>)
                    }
                </Row>
                
            </div>
        </section>
    );
};

export default Services;