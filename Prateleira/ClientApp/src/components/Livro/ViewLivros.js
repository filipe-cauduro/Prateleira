import React, { useState } from 'react';
import TabelaLivros from './TabelaLivros'
import CadastroLivro from './CadastroLivro';

function ViewLivros(props) {
    const [update, setUpdate] = useState(false);
    const [modalCadastro, setModalCadastro] = useState(false);
    const [idLivro, setIdLivro] = useState();

    const toggle = () => setModalCadastro(!modalCadastro);

    const incluir = () => { setIdLivro(undefined); toggle(); }
    
    const alterar = (id) => { setIdLivro(id); toggle(); }
  
    const updateSetter = () => { setUpdate(!update); }

    return  (
        <>
            <h1>Cadastro de livros</h1>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-outline-info m-1" onClick={incluir}>
                    Inserir
                </button>
            </div>
            <TabelaLivros update={update} alterar={alterar} updateSetter={updateSetter} />
            <CadastroLivro modalCadastro={modalCadastro} toggle={toggle} idLivro={idLivro} updateSetter={updateSetter} />
        </>
    );
}

export default ViewLivros;