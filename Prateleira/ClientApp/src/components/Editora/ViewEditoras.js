import React, { useState } from 'react';
import TabelaEditoras from './TabelaEditoras'
import CadastroEditora from './CadastroEditora';

function ViewEditoras(props) {
    const [update, setUpdate] = useState(false);
    const [modalCadastro, setModalCadastro] = useState(false);
    const [idEditora, setIdEditora] = useState();

    const toggle = () => setModalCadastro(!modalCadastro);

    const incluir = () => { setIdEditora(undefined); toggle(); }
    
    const alterar = (id) => { setIdEditora(id); toggle(); }
  
    const updateSetter = () => { setUpdate(!update); }

    return  (
        <>
            <h1>Cadastro de editoras</h1>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-outline-info m-1" onClick={incluir}>
                    Inserir
                </button>
            </div>
            <TabelaEditoras update={update} alterar={alterar} updateSetter={updateSetter} />
            <CadastroEditora modalCadastro={modalCadastro} toggle={toggle} idEditora={idEditora} updateSetter={updateSetter} />
        </>
    );
}

export default ViewEditoras;