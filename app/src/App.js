import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './containers/HomePage';
import ComentariosPage from './containers/ComentariosPage';

import { Container } from 'react-bootstrap';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { mostraComentario: false }
  }

  mostraComentario = () => {
    this.setState({ mostraComentario: !this.state.mostraComentario })
  }

  render() {
    return (
      <Container>
        { 
          !this.state.mostraComentario ?
            <HomePage mostraComentario={this.mostraComentario} />:
            <ComentariosPage mostraComentario={this.mostraComentario} />
        }
        
      </Container>
    )
  }
}

export default App;
