import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar';
import PersonalList from './components/PersonalList';
import ItemModal from './components/ItemModal'
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Error404 from './components/Error404';
import { loadUser } from './actions/authActions';
import FooterPage from './components/FooterPage'

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class  App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store = {store}>
      <div className="App">
        <AppNavBar />
        <Container>
        <ItemModal />
        <BrowserRouter>
        <Switch>
          <Route path="/" component = {PersonalList}/>
          <Route component={Error404} />
        </Switch>
        </BrowserRouter>
        </Container>
        <FooterPage />
      </div>
    </Provider>
  );
  }
  
}

export default App;
