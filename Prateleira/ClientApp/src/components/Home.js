import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
        <h1>Este é um pequeno CRUD para treinar ASP.Net Core!</h1>
        <p>Utilize a barra de navegação para interagir com o sistema! :)</p>
      </>
    );
  }
}
