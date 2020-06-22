import React, { Component } from 'react';
import ViewAutores from './ViewAutores'

export class Autor extends Component {
    static displayName = Autor.name;

    render() {
       return <ViewAutores />;
    }

}
