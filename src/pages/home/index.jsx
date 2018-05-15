import './index.less';
import React, {Component} from 'react';
import { connect} from 'react-redux';
import {action, IO} from './model';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
    const me = this;
  }
  componentDidMount() {
    
  }
  changeHandle(e) {
    const me = this;
    me.props.changeHandle(e.target.value)
  }
  clickHandle() {
    const me = this;
    me.props.clickHandle(me.props.value)
  }
  getDataHandle() {
    this.props.getDataHandle()
  }
  render() {
    const me = this;
    const {test, final, data} = me.props;
    return (<div>
      <input type="text" value={test} onChange={me.changeHandle.bind(me)}/>
      <button onClick={me.clickHandle.bind(me)}>平方计算</button>
      <span>{final}</span>
      <br />
      <button onClick={me.getDataHandle.bind(me)}>获取接口数据</button>
      <span>{data}</span>
    </div>)
  }
}
const mapStateToProps = (state) => {
  const {value, final, data} = state.homeReducer;
  return {
    value,
    final,
    data
  }
};
export default connect(mapStateToProps, action)(Home);