import React, { Component } from 'react';
import './MySkill.css';
import FieldTitle from '../common/fieldTitle/FieldTitle.js';
import FontAwesome from 'react-fontawesome';

import angularLogo from '../img/skill/angular.png';
import boostrapLogo from '../img/skill/bootstrap.png';
import css3Logo from '../img/skill/css3.png';
import es6Logo from '../img/skill/es6.png';
import h5Logo from '../img/skill/h5.png';
import jqueryLogo from '../img/skill/jquery.png';
import nodeLogo from '../img/skill/node.png';
import vueLogo from '../img/skill/vue.png';
import reactLogo from '../img/skill/react.svg';

class MySkill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<FieldTitle title="技能" className="ml-10 mt-10"/>
        <div className="pl-10">
          <img src={h5Logo} className="logo"/>
          <img src={es6Logo} className="logo"/>
          <img src={css3Logo} className="logo"/>
          <img src={angularLogo} className="logo"/>
          <img src={vueLogo} className="logo"/>
          <img src={reactLogo} className="logo"/>
          <img src={nodeLogo} className="logo"/>
          <img src={jqueryLogo} className="logo"/>
          <img src={boostrapLogo} className="logo"/>
        </div>
        <div className="pl-20 desc">
          •掌握HTML，ECMAScript，CSS及其扩展（H5，ES6，CSS3）
        </div>
        <div className="pl-20 desc">
          •掌握Angularjs，VUE，React(此界面)等前端框架
        </div>
        <div className="pl-20 desc">
          •掌握jQuery，Bootstrap，threejs(webGL)等js库
        </div>
        <div className="pl-20 desc">
          •掌握SeaJs，requireJs模块化工具，并构建对应的开发环境
        </div>
        <div className="pl-20 desc">
          •掌握webpack，gulp，grunt，bower等前端自动化构建工具，以及nodejs平台本身
        </div>
        <div className="pl-20 desc">
          •有后端开发经验java，sql。常用服务器的配置与部署tomcat，nginx
        </div>
      </div>
    );
  }
}

export default MySkill;
