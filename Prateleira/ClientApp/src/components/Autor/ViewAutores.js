import React, { useState } from 'react';
import TabelaAutores from './TabelaAutores'
import CadastroAutor from './CadastroAutor';

function ViewAutores(props) {
    const [update, setUpdate] = useState(false);
    const [modalCadastro, setModalCadastro] = useState(false);
    const [idAutor, setIdAutor] = useState();

    const toggle = () => setModalCadastro(!modalCadastro);

    const incluir = () => { setIdAutor(undefined); toggle(); }
    
    const alterar = (id) => { setIdAutor(id); toggle(); }
  
    const updateSetter = () => { setUpdate(!update); }

    return  (
        <>
            <h1>Cadastro de autores</h1>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-outline-info m-1" onClick={incluir}>
                    Inserir
                </button>
            </div>
            <TabelaAutores update={update} alterar={alterar} updateSetter={updateSetter} />
            <CadastroAutor modalCadastro={modalCadastro} toggle={toggle} idAutor={idAutor} updateSetter={updateSetter} />
        </>
    );
}

export default ViewAutores;