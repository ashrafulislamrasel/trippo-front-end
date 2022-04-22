import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const handleSingInWithGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_uri)
        })
        .finally(() => setIsLoading(false))
    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input {...register("firstName")} type="email" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Pass</label>
                    <input  {...register("lastName")}  type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                </div>
                <input type="submit" />
            </form>
            <h3>Or Login With Google</h3>
            =============================<br/>
            <button onClick={handleSingInWithGoogle}>LOGIN WITH GOOGLE</button>
        </Container>
    );
};

export default Login;