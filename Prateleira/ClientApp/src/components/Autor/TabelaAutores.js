import React, { useState, useEffect } from 'react';
import { formataDateParaData } from '../../utils/utils.js';
import { get, destroy } from '../../utils/request.js';

function TabelaAutores(props) {
    const [autores, setAutores] = useState([]);
    const { update, alterar, updateSetter } = props;

    useEffect(() => {
        async function carregaAutores() {
            const data = await get('Autores');
            setAutores(data);
        }
        
        carregaAutores();
    }, [update]);
    
    async function excluirAutor(id) {
        await destroy('Autores', id)
        updateSetter();
    }

    return (
        <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map(autor =>
                        <tr key={autor.id}>
                            <td>{autor.id}</td>
                            <td>{autor.nome}</td>
                            <td>{formataDateParaData(autor.dataNascimento).toString()}</td>
                            <td>
                                <button className="btn btn-outline-warning m-1" onClick={() => alterar(autor.id)}>Editar</button>
                                <button className="btn btn-outline-danger m-1" onClick={() => excluirAutor(autor.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default TabelaAutores;
