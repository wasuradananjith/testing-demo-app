import React, { Component } from 'react';
import Form from './Form';

class Add extends Component {
  render() {
    return (
      <div>
        <h1>Add Function</h1>
        <Form operator='+'/>
      </div>
    );
  }
}

export default Add;
