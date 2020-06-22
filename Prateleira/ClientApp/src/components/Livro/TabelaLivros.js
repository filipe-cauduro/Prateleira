import React, { useState, useEffect } from 'react';
import { formataDateParaData } from '../../utils/utils.js';
import { get, destroy } from '../../utils/request.js';

function TabelaLivros(props) {
    const [livros, setLivros] = useState([]);
    const { update, alterar, updateSetter } = props;

    useEffect(() => {
        async function carregalivros() {
            const data = await get('Livros');
            setLivros(data);
        }
        
        carregalivros();
    }, [update]);
    
    async function excluirLivro(id) {
        await destroy('Livros', id)
        updateSetter();
    }

    return (
        <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Qtd de Páginas</th>
                        <th>Data de Publicação</th>
                        <th>Editora ID</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro =>
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.nome}</td>
                            <td>{livro.qtdPaginas}</td>
                            <td>{formataDateParaData(livro.dtPubli).toString()}</td>
                            <td>{livro.editoraId}</td>
                            <td>
                                <button className="btn btn-outline-warning m-1" onClick={() => alterar(livro.id)}>Editar</button>
                                <button className="btn btn-outline-danger m-1" onClick={() => excluirLivro(livro.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default TabelaLivros;
