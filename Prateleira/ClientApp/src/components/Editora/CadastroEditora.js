import React, { useState, useEffect } from 'react';
import { Label, Input, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { get, post, put } from '../../utils/request.js';

function CadastroEditora(props) {
    const {modalCadastro, toggle, idEditora, updateSetter} = props;

    const [nome, setNome] = useState("");

    useEffect(() => {
        async function carregaEditora() {
            if (idEditora) {
                const data = await get('Editoras', idEditora);
                setNome(data.nome);
            } else { 
                setNome("");
            }
        }
        carregaEditora();
    }, [idEditora]);

    async function salvarEditora() {
        toggle();

        if (idEditora){
            const obj = { "id": idEditora, nome }
            await put('Editoras', obj);
        } else {
            const obj = { nome };
            await post('Editoras', obj);
        }

        updateSetter();
    }    

    return (
        <>
            <Modal isOpen={modalCadastro} toggle={toggle} className="ModalCadastro modal-dialog modal-dialog-centered">
            <ModalHeader toggle={toggle}>{idEditora ? "Edição" : "Cadastro"} da Editora</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="Nome">Nome</Label>
                            <Input
                            placeholder="Nome"
                            name="Nome"
                            id="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-outline-success m-1" onClick={salvarEditora}>Salvar</button>
                <button className="btn btn-outline-secondary m-1" onClick={toggle}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default CadastroEditora;