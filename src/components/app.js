import React, { Component } from 'react';

export default class App extends Component {
  componentWillMount() {
  }

  renderUser({id, name, email}) {
    return (
      <li clasName="list-group-item" key={id}>
        <span clasName="label label default label-pill float-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Email directory</h4>
        <ul clasName="list-group">
        debiasej@gmail.com Mario de Biase
        </ul>
      </div>
    );
  }
}
