import React, {Component} from 'react';

const TableHeader = () => { //1a letra maiúscula
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Turma</th>
                <th>Apagar</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => { //1a letra maiúscula
    const rows = props.alunosETurmas.map( (row, index) => {
        return(
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.turma}</td>
                <td>
                    <button onClick={() => props.removerAluno(index)}>
                        Apagar
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component { //1a letra maiúscula
    render() { 
        const {alunos, removerAluno} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody alunosETurmas = {alunos}
                        removerAluno={removerAluno} />
            </table>)
    }
} 
export default Table