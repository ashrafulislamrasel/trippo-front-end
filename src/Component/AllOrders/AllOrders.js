import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import ALLOrderDetao from './ALLOrderDetao;s/ALLOrderDetao;s';

const AllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
         const url = `http://localhost:5000/all-orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    },[])


    return (
        <div className='container'>
            All Orders
        <Row xs={1} md={2} className="g-4">
            
            {
                allOrders.map(allOrder =><ALLOrderDetao 
                key={allOrder._id}
                allOrder={allOrder}
                ></ALLOrderDetao>)
            }
            
       
       
                
        </Row>
            
            
        </div>
    );
};

export default AllOrders;