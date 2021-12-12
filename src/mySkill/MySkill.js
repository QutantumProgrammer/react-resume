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
          <span>•基于多年的开发经验拥有很强的架构设计能力与抽象能力。善于编写可读性强，易于扩展，可插拔的高性能的代码</span>
        </div>
        <div className="pl-20 mt-10 desc">
          <span className="text-black">•React16,  react hooks,  redux,  vue,  Angularjs1.0</span>
        </div>
        <div className="pl-20 mt-10 desc">
          <span className="text-black">•HTML，JS，CSS（H5，ES6，CSS3）</span>
          <span>, 拥有面向对象，组件化开发思想</span>
        </div>
        <div className="pl-20 mt-10 desc">
          <span className="text-black">•webpack，gulp，grunt，bower</span>
          <span>等前端自动化构建工具</span>
        </div>
        <div className="pl-20 mt-10 desc">
          <span>•浏览器原理<span className="text-black">eventLoop</span>, 原型链，作用域链，<span className="text-black">GC</span>，性能优化</span>
        </div>
        <div className="pl-20 mt-10 desc">
          <span className="text-black">•jQuery，Bootstrap，threejs，templateJs</span>
          等
          <span className="text-black">js</span>
          库，
          <span className="text-black">SeaJs，requireJs</span>
          模块化工具，并可构建对应的开发环境
        </div>
        <div className="pl-20 mt-10 desc">
          •后端开发经验
          <span className="text-black">java，sql</span>
          。常用服务器的配置与部署tomcat，nginx
        </div>
      </div>
    );
  }
}

export default MySkill;
