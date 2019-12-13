import React from 'react';
import AppNavBar from './components/AppNavBar';
import PersonalList from './components/PersonalList';
import ItemModal from './components/ItemModal'
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <AppNavBar />
        <Container>
        <ItemModal />
        <PersonalList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
