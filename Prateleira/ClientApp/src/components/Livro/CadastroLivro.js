import React, { useState, useEffect } from 'react';
import { Label, Input, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { formataDataParaDate, formataDateTimeParaDate } from '../../utils/utils.js';
import { get, post, put } from '../../utils/request.js';

function CadastroLivro(props) {
    const {modalCadastro, toggle, idLivro, updateSetter} = props;

    const [nome, setNome] = useState("");
    const [qtdPaginas, setQtdPaginas] = useState("");
    const [dtPubli, setDtPubli] = useState("");
    const [editoraId, setEditoraId] = useState("");

    useEffect(() => {
        async function carregaLivro() {
            if (idLivro) {
                const data = await get('Livros', idLivro);
                setNome(data.nome);
                setQtdPaginas(data.qtdPaginas);
                setDtPubli(formataDateTimeParaDate(data.dtPubli));
                setEditoraId(data.editoraId);
            } else { 
                setNome("");
                setQtdPaginas("");
                setDtPubli("");
                setEditoraId("");
            }
        }
        carregaLivro();
    }, [idLivro]);

    async function salvarLivro() {
        toggle();

        if (idLivro){
            const obj = {
                "id": idLivro,
                nome,
                qtdPaginas,
                "dtPubli":  formataDataParaDate(dtPubli),
                editoraId
            }
            await put('Livros', obj);
        } else {
            const obj = {
                nome,
                qtdPaginas,
                "dtPubli":  formataDataParaDate(dtPubli),
                editoraId
            };
            await post('Livros', obj);
        }

        updateSetter();
    }    

    return (
        <>
            <Modal isOpen={modalCadastro} toggle={toggle} className="ModalCadastro modal-dialog modal-dialog-centered">
            <ModalHeader toggle={toggle}>{idLivro ? "Edição" : "Cadastro"} do Livro</ModalHeader>
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
                            <Label htmlFor="QtdPaginas">Quantidade de Páginas</Label>
                            <Input
                            type="number"
                            placeholder="Quantidade de Páginas"
                            name="QtdPaginas"
                            id="QtdPaginas"
                            value={qtdPaginas}
                            onChange={(e) => setQtdPaginas(parseInt(e.target.value))} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="DtPubli">Data de Publicação</Label>
                            <Input
                            type="date"
                            name="DtPubli"
                            id="DtPubli"
                            value={dtPubli}
                            onChange={(e) => setDtPubli(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="EditoraId">Editora</Label>
                            <Input
                            type="number"
                            placeholder="Editora"
                            name="EditoraId"
                            id="EditoraId"
                            value={editoraId}
                            onChange={(e) => setEditoraId(parseInt(e.target.value))} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-outline-success m-1" onClick={salvarLivro}>Salvar</button>
                <button className="btn btn-outline-secondary m-1" onClick={toggle}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default CadastroLivro;