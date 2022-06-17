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
import MyOrders from './Component/MyOrders/MyOrders.js';
import AllOrders from './Component/AllOrders/AllOrders.js';
import AddService from './Component/AddService/AddService.js';
import Footer from './Component/Footer/Footer.js';
import Services from './Component/Services/Services.js';


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
          <Route exact path = '/Services' >
              <Services></Services>
          </Route>
          <Route exact path = '/my-orders' >
              <MyOrders></MyOrders>
          </Route>
          <Route exact path = '/add-service' >
              <AddService></AddService>
          </Route>
          <PrivateRoute exact path = '/all-orders' >
              <AllOrders></AllOrders>
          </PrivateRoute>
          <Route exact path='/login'>
              <Login></Login>
          </Route>
          <PrivateRoute exact path = '/details/:placeId' >
              <SinglePlace></SinglePlace>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
