import React, {Component} from 'react';
import './Experience.css';
import FieldTitle from '../common/fieldTitle/FieldTitle.js';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FieldTitle title="工作经验" className="ml-10 mt-20"/>

        <div className="ml-20 desc mt-20 pr-20">
          <div className="flex-row mt-10 bg-ex-title">
            <div className="text-nowrap">工作时间：</div>
            <div>
              2017.10 - 至今 平安重金所 web前端工程师
            </div>
          </div>
        </div>
        <div className="pl-40 desc mt-10 pr-20">
          <div className="flex-row">
            <div className="text-nowrap">项目描述：</div>
            <div className="text-black">
              政府PPP管理项目，大屏数据可视化项目
            </div>
          </div>
        </div>
        <div className="pl-40 desc mt-10 pr-20">
          <div className="flex-row">
            <div className="text-nowrap">工作描述：</div>
            <div className="text-black">
              1. 数据可视化开发工作，组件开发（可配置路由组件，canvas图形组件），性能优化等工作。<br/>
              2. 开发基于React的PPP管理系统。<br/>
              3. 搭建基于Karma mocha chi sinon 的前端单元测框架，并完成相应的覆盖率。<br/>
            </div>
          </div>
        </div>

        <div className="ml-20 desc mt-20 pr-20">
          <div className="flex-row mt-10 bg-ex-title">
            <div className="text-nowrap">工作时间：</div>
            <div>
              2017.5 - 2018.10 深圳市速加科技有限公司 web前端工程师
            </div>
          </div>
        </div>
        <div className="pl-40 desc mt-10 pr-20">
          <div className="flex-row">
            <div className="text-nowrap">项目描述：</div>
            <div className="text-black">
              对于客户的电商平台&对于公司内部的管理平台
            </div>
          </div>
        </div>
        <div className="pl-40 desc mt-10 pr-20">
          <div className="flex-row">
            <div className="text-nowrap">工作描述：</div>
            <div className="text-black">
              1. 开发基于angularjs的前端业务页面，编写常用组建及(PC端)<br/>
              2. 搭建基于vue，webpack的前端开发环境(手机端)，编写常用组件及业务开发<br/>
              3.搭建微信小程序开发环境，编写常用组件及业务开发<br/>
              4.使用threejs开发3D效果页面（上传机械图纸，在页面中展示）<br/>
            </div>
          </div>
        </div>

        {/*<div className="ml-20 desc mt-20 pr-20">*/}
          {/*<div className="flex-row mt-10 bg-ex-title">*/}
            {/*<div className="text-nowrap">工作时间：</div>*/}
            {/*<div>*/}
              {/*2016.6 - 2017.5 深圳软通动力科技有限公司 	web前端工程师*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="pl-20 desc mt-10 pr-20">*/}
          {/*<div className="flex-row">*/}
            {/*<div className="text-nowrap">项目描述：</div>*/}
            {/*<div className="text-black">*/}
              {/*华为能源管理系统（电力输出输入，硬件设备控制）*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="pl-20 desc mt-10 pr-20">*/}
          {/*<div className="flex-row">*/}
            {/*<div className="text-nowrap">工作描述：</div>*/}
            {/*<div className="text-black">*/}
              {/*1. 切换华为能源系统所使用的前端框架（老系统使用类似Servlet，jsp前后端紧耦合架构，*/}
              {/*切换至基于restful风格接口以JSON字符串为基准前后端分离的架构，前端所用为华为内部框，*/}
              {/*架基于Angularjs封装）<br/>*/}
              {/*2. 切换代码架构，性能优化, 优化代码结构提升代码可读性，可扩展性，编写可复用组件<br/>*/}
              {/*3. 新员工培训（Angularjs以及前端mvc结构的开发思想）<br/>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

        {/*<div className="ml-20 desc mt-20 pr-20">*/}
          {/*<div className="flex-row mt-10 bg-ex-title">*/}
            {/*<div className="text-nowrap">工作时间：</div>*/}
            {/*<div>*/}
              {/*2015.6 - 2016.6 沈阳斯不瑞英科技有限公司	web开发工程师*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="pl-20 desc mt-10 pr-20">*/}
          {/*<div className="flex-row">*/}
            {/*<div className="text-nowrap">项目描述：</div>*/}
            {/*<div className="text-black">*/}
              {/*北京我爱我家房管系统（房源监控，统计，租房流程控制）*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="pl-20 desc mt-10 pr-20">*/}
          {/*<div className="flex-row">*/}
            {/*<div className="text-nowrap">工作描述：</div>*/}
            {/*<div className="text-black">*/}
              {/*1. 在项目中参与程序整体的结构设计，数据库设计，业务界面开发，编写可复用的Angularjs插件<br/>*/}
              {/*2. 完成单元模块开发，测试，以及修改工作<br/>*/}
              {/*3. 指导新人工作，解决在项目中遇到的难题，优化项目代码结构<br/>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

      </div>
    );
  }
}

export default Experience;