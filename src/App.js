import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    alunos: [
      /* { nome: 'Giovanna',
        turma: 'Programação Web',},
      { nome: 'Paty',
        turma: 'Análise de Algoritmos',},
      { nome: 'Pedro',
        turma: 'Programação 00',},
      { nome: 'Julia',
        turma: 'Engenharia de requisitos',}, */
    ]
  }

  removerAluno = (index) => { // recebe como parâmetro um índice do aluno
    const{alunos} = this.state;
    this.setState( // o método setState recebe como parâmetro um objeto
      {
        alunos: alunos.filter((aluno, i) => { // método filter filtra o array, ex aluno Giovanna[0], aluno Pedro indice 2 do array
          return i !== index // so retorna o i diferente do index do cara que foi deletado
        })
      }
    )
  }

  handleSubmit = (alunoDisc) => {
    this.setState({
      alunos: [...this.state.alunos, alunoDisc]
    })
  }

  render() {
    const {alunos} = this.state
    return (
      <div className="container">
        <Table alunos = {alunos}
              removerAluno={this.removerAluno}/>
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    );
  }
} export default App;



