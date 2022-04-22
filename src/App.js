import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AuthProvider from './Context/AuthProvider.js';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SinglePlace from './Component/Places/SinglePlace/SinglePlace';
import Login from './Component/Login/Login.js';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.js';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route exact path='/home'>
              <Home></Home>
          </Route>
          <Route exact path='/login'>
              <Login></Login>
          </Route>
          <PrivateRoute exact path = '/details/:placeId' >
              <SinglePlace></SinglePlace>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
