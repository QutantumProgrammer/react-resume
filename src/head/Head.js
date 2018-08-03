import React, { Component } from 'react';
import './Head.css';
import FontAwesome from 'react-fontawesome';
import headIcon from '../img/header.jpg';

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
      	<div className="row-item">
      	  <div className="avatar">
      		<img src={headIcon}/>
      		<div className="full-name">{this.props.name}</div>
      		</div>
      	  </div>
      	  <div className="row-item" style={{paddingLeft: '10%'}}>
  	  	    <div>
  	  	      <FontAwesome name="id-card" className="icon" />
  	  	      <span>28岁</span>
			         <FontAwesome name="mars" className="pl-10"/>			  
      	  	</div>
      	  	<div>
      	  	  <FontAwesome name="graduation-cap" className="icon"/>
		          <span>沈阳航空航天大学（CET4）</span>
      	  	</div>
      	  	<div>
      	  	  <FontAwesome name="map-pin" className="icon"/>
		          <span>现居住地深圳（辽宁沈阳人）</span>
      	  	</div>
      	  	<div>
      	  	  <FontAwesome name="envelope" className="icon"/>
	            <span>zcfxs@hotmail.com</span>
      	  	</div>
      	  	<div>
      	  	  <FontAwesome name="phone" className="icon"/> 
      	  	  <span>13249051475</span>
      	  	</div>
      	  </div>
       </div>
    );
  }
}

export default Head;
