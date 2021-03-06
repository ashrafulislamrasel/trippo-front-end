import React from 'react';
import {Row} from 'react-bootstrap';
import usePlaces from '../../Hooks/useState';
import './Places.css'
import PlacesDetails from './PlacesDetails/PlacesDetails';
const Places = () => {
    const { places } = usePlaces()
    console.log(places);
    
    const handleBooking = places => {
        console.log(places);
    }
    return (
        <>
        <section className='banner'>
            <div className='banner_overlay'>
                <div className="container">
                    <h1 className='banner_content'>Spirit of Exploration</h1>
                </div>
            </div>
        </section>
        <section id='places'>
            <div className="container">
                <h3>Places You Can visit</h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        places.slice(0, 6).map(place =>
                            <PlacesDetails
                                key={place.id}
                                place={place}
                                handleBooking={handleBooking}
                        ></PlacesDetails>)
                    }
                </Row>
                
            </div>
        </section>
    </>
    );
};

export default Places;