import React, { useState, useEffect } from 'react';
import { Label, Input, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { formataDataParaDate, formataDateTimeParaDate } from '../../utils/utils.js';
import { get, post, put } from '../../utils/request.js';

function CadastroAutor(props) {
    const {modalCadastro, toggle, idAutor, updateSetter} = props;

    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    useEffect(() => {
        async function carregaAutor() {
            if (idAutor) {
                const data = await get('Autores', idAutor);
                setNome(data.nome);
                setDataNascimento(formataDateTimeParaDate(data.dataNascimento));
            } else { 
                setNome("");
                setDataNascimento("");
            }
        }
        carregaAutor();
    }, [idAutor]);

    async function salvarAutor() {
        toggle();

        if (idAutor){
            const obj = {
                "id": idAutor,
                nome,
                "dataNascimento":  formataDataParaDate(dataNascimento)
            }
            await put('Autores', obj);
        } else {
            const obj = { nome, "dataNascimento":  formataDataParaDate(dataNascimento) };
            await post('Autores', obj);
        }

        updateSetter();
    }    

    return (
        <>
            <Modal isOpen={modalCadastro} toggle={toggle} className="ModalCadastro modal-dialog modal-dialog-centered">
            <ModalHeader toggle={toggle}>{idAutor ? "Edição" : "Cadastro"} do Autor</ModalHeader>
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
                        <FormGroup>
                            <Label htmlFor="DataNascimento">Data de Nascimento</Label>
                            <Input
                            type="date"
                            name="DataNascimento"
                            id="DataNascimento"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-outline-success m-1" onClick={salvarAutor}>Salvar</button>
                <button className="btn btn-outline-secondary m-1" onClick={toggle}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default CadastroAutor;