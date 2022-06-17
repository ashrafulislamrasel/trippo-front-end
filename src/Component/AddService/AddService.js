import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    

    const onSubmit = data => {
        console.log(data)
        
        axios.post('http://localhost:5000/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Inserted!')
                    reset();
                }
                console.log(res);
                
        })
    };

    return (
        <div className='container'>
            <h3 className='text-center p-5'>ADD A SERVICE</h3>
            <form className='addService w-50 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control mb-3' {...register("name",)}  placeholder="service name"/>
                <input className='form-control mb-3' {...register("description")} placeholder="description"/> 
                <input className='form-control mb-3' type="text" {...register("city")} placeholder="city"/>
                <input className='form-control mb-3' type="text" {...register("country")} placeholder="country" />
                <input className='form-control mb-3' type="text" {...register("img")} placeholder="Image Url"/>
                <input className='form-control mb-3' type="number" {...register("price")} placeholder="price"/>
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddService;