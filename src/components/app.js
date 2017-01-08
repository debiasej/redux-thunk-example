import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.fetchUsers();
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
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users.all };
}

export default connect(mapStateToProps, { fetchUsers })(App);
