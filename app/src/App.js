import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './containers/HomePage/';
import LoginPage from './containers/LoginPage/';
import ComentariosPage from './containers/ComentarioPage/';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/comentarios/:id" component={ ComentariosPage }></Route>
          <Route path="*">
            <h2>Essa página não existe :'(</h2>
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
