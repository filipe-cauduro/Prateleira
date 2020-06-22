import React, { Component } from 'react';
import ViewLivros from './ViewLivros'

export class Livro extends Component {
    static displayName = Livro.name;

    render() {
       return <ViewLivros />;
    }

}
