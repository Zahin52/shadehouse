import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Home from './components/Home/Home'
import Notfound from './components/notfound/notfound'
import Register from './components/register/Register'
import Login from './components/login/Login'
import AuthProvider from './context/authProvider'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import MyBookings from './components/dashboard/MyOrders/MyOrders'
import OrderForm from './components/OrderForm/OrderForm'
import About from './components/about/about'
import AddDestination from './components/dashboard/AddProducts/AddProducts'
import ExploreProducts from './components/exploreProducts/ExploreProducts'
import Dashboard from './components/dashboard/Dashboard/Dashboard';

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route exact path="/about">
                     <About />
                  </Route>
                  <Route exact path="/exploreProducts">
                     <ExploreProducts />
                  </Route>                 
                  <PrivateRoute exact path="/services/:id">
                     <OrderForm />
                  </PrivateRoute>
                  <PrivateRoute  path="/dashboard">
                     <Dashboard />
                  </PrivateRoute>
                  <PrivateRoute exact path="/myBookings">
                     <MyBookings />
                  </PrivateRoute>
                  <PrivateRoute exact path="/addDestination">
                     <AddDestination />
                  </PrivateRoute>
                  <Route exact path="/signup">
                     <Register />
                  </Route>
                  <Route exact path="/login">
                     <Login />
                  </Route>
                  <Route path="*">
                     <Notfound />
                  </Route>
               </Switch>
               
            </Router>
         </AuthProvider>
      </div>
   )
}

export default App
