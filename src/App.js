import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import MyOrders from './pages/MyOrders'
import ItemsList from './pages/ItemsList'
import Dashboard from './pages/Dashboard'
import CheckOut from './pages/CheckOut'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound';
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/orders' component={MyOrders} />
            <Route exact path='/itemslist' component={ItemsList} />
            <Route exact path='/checkout' component={CheckOut} />
            <Route exact path='/cart' component={Cart} />
            <Route exact component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
