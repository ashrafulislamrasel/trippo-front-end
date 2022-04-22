import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isloading} = useAuth()
    if(isloading){
     return <Spinner animation="border" variant="primary" className='m-auto' />
    }
    return (
        <Route {...rest}
        render={({ location }) =>  user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;