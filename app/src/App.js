import React from 'react';
import axios from 'axios';
import './App.css';

const style ={
  containerPerfil: {
    width: "20%", display: "inline-block", backgroundColor: "blue"
  },
  imagemPerfil: {
    display: "block", margin:"0 auto", width: "100%"
  }
};

const Perfil = (props) => (
  <div onClick={ () => props.clicou(props.nome, props.imagem) }
       style={ style.containerPerfil }>
    <img style={ style.imagemPerfil } src={ props.imagem }></img>
    <p className="perfil-texto">{ props.nome }</p>
  </div>
);

class App extends React.Component {

  constructor(props) {
    super(props);

    // inicializar o estado
    this.state = {
      alunos: []
    }

    axios.get("http://localhost:8080/alunos")
      .then(res => {
        if(res.data) {
          this.setState({alunos: res.data});
        }
      });
  }

  clone = (nome, imagem) => {
    const alunos = this.state.alunos;
    this.setState({ alunos: alunos });
  }

  render() {
    return (
      <div className="App">
        { 
          this.state.alunos.map( aluno => 
            <Perfil clicou={ this.clone } {...aluno} />
          )
        }
      </div>
    )
  }
}

export default App;
