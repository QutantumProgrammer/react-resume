import React, { Component } from 'react';
import Head from '../head/Head.js';
import MySkill from '../mySkill/MySkill.js';
import Experience from  '../workExperience/Experience.js';
import SelfEvaluation from  '../selfEvaluation/Evaluation.js';
import './App.css';
import '../common/css/Padding.css';
import '../common/css/Margin.css';
import '../common/css/Box.css';
import '../common/css/Font.css';

import '../third/font-awesome/css/font-awesome.min.css';


class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Head name="赵晨"/>
        <MySkill />
        <Experience />
        <SelfEvaluation />
      </div>
    );
  }
}

export default App;
