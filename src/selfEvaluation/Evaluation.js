import React, {Component} from 'react';
import FieldTitle from '../common/fieldTitle/FieldTitle.js';

class SelfEvaluation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FieldTitle title="自我评价" className="ml-20 mt-20"/>

        <div className="pl-40 desc mt-20 pr-20 pb-20">
          兴趣：热爱编程, 对整洁代码有追求，目标长远<br/>
          态度：追求更好的用户体验与极致的性能，主管能动性强<br/>
          方法：善于从不同角度思考问题解决问题，通过沟通来推动项目不断进展<br/>
          <a href="https://qutantumprogrammer.github.io/myProject/game.html" target="_blank">game  </a>&nbsp;&nbsp;
          <a href="https://qutantumspace.gitee.io/field/tour/#/homepage" target="_blank">旅游log</a>&nbsp;&nbsp;
          <a href="https://qutantumprogrammer.github.io/eva-countdown.html" target="_blank">canvas动画</a>&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

export default SelfEvaluation;
