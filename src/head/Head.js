import React, { Component } from 'react';
import './Head.css';
import FontAwesome from 'react-fontawesome';
import WaterWaves from '../component/water-waves/index';

class Head extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    new WaterWaves({
      id: 'waves',
      wavesConfig: [
        {
          sensibility: 160,
          zoom: 1,
          color: {
            0: 'rgba(116, 232, 215, 1)',
            0.8: 'rgba(42, 220, 222, 1)',
          },
        },
        {
          sensibility: 60,
          zoom: 2.3,
          color: {
            0: 'rgba(42, 220, 222, 1)',
            0.8: 'rgb(35, 72, 203)'
          },
        },
      ],
    });
	}

  render() {
    return (
      <div className="header">
      	<div className="row-item">
      	  <div className="avatar">
            <canvas id="waves" width="100" height="100" className="waves"></canvas>
            <FontAwesome name="long-arrow-up" className="point-to-source"/>
            <a href="https://gitee.com/qutantumspace/react-resume/blob/master/src/component/water-waves/index.js"
               target="_blank"
               className="source">source code</a>
      			<div className="full-name">{this.props.name}</div>
      		</div>
				</div>
				<div className="row-item" style={{paddingLeft: '7%'}}>
					<div className="nowrap">
						<FontAwesome name="id-card" className="icon" />
						<span>28岁</span>
						 <FontAwesome name="mars" className="pl-10"/>
					</div>
					<div className="nowrap">
						<FontAwesome name="graduation-cap" className="icon"/>
						<span>沈阳航空航天大学（CET4）</span>
					</div>
					<div className="nowrap">
						<FontAwesome name="map-pin" className="icon"/>
						<span>现居住地深圳（辽宁沈阳人）</span>
					</div>
					<div className="nowrap">
						<FontAwesome name="envelope" className="icon"/>
						<span>zcfxs@hotmail.com</span>
					</div>
					<div className="nowrap">
						<FontAwesome name="phone" className="icon"/>
						<span>13249051475</span>
					</div>
				</div>
		 	</div>
    );
  }
}

export default Head;
