import React, { Component } from 'react';
import Head from '../head/Head.js';
import MySkill from '../mySkill/MySkill.js';
import './App.css';
import '../common/css/Padding.css';
import '../common/css/Margin.css';
import '../common/css/Box.css';

import '../third/font-awesome/css/font-awesome.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <Head name="Wood"/>
        <MySkill />
      </div>
    );
  }
}

export default App;
