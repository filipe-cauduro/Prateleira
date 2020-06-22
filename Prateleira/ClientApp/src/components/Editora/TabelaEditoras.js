import React, { useState, useEffect } from 'react';
import { get, destroy } from '../../utils/request.js';

function TabelaEditoras(props) {
    const [editoras, setEditoras] = useState([]);
    const { update, alterar, updateSetter } = props;

    useEffect(() => {
        async function carregaEditoras() {
            const data = await get('Editoras');
            setEditoras(data);
        }
        
        carregaEditoras();
    }, [update]);
    
    async function excluirEditora(id) {
        await destroy('Editoras', id)
        updateSetter();
    }

    return (
        <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {editoras.map(editora =>
                        <tr key={editora.id}>
                            <td>{editora.id}</td>
                            <td>{editora.nome}</td>
                            <td>
                                <button className="btn btn-outline-warning m-1" onClick={() => alterar(editora.id)}>Editar</button>
                                <button className="btn btn-outline-danger m-1" onClick={() => excluirEditora(editora.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default TabelaEditoras;
