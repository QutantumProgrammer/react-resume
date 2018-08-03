import React, { Component } from 'react';
import './FieldTitle.css';

class FieldTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className + ' f-title'}>
      	{this.props.title}
      </div>
    );
  }
}

export default FieldTitle;