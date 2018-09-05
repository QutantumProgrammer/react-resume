import React, {Component} from 'react';
import FieldTitle from '../common/fieldTitle/FieldTitle.js';

class SelfEvaluation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FieldTitle title="自我评价" className="ml-10 mt-20"/>

        <div className="pl-20 desc mt-20 pr-20">
          1. 对编写易于维护，扩展性强，性能良好的代码有追求<br/>
          2. 拥有较强的逻辑思维，善于从不同角度思考问题解决问题<br/>
          3. 对新技术有不断学习的热情， 善于沟通来推动项目不断进展<br/>
        </div>
      </div>
    );
  }
}

export default SelfEvaluation;