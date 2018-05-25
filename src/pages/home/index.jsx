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
  getCrossDataHandle() {
    this.props.getCrossDataHandle()
  }
  render() {
    const me = this;
    const {value, final, data, crossData} = me.props;
    return (<div>
      <input type="text" value={value} onChange={me.changeHandle.bind(me)}/>
      <button onClick={me.clickHandle.bind(me)}>平方计算</button>
      <span>{final}</span>
      <br />
      <button onClick={me.getDataHandle.bind(me)}>获取接口数据</button>
      <span>{data}</span>
      <br />
      <button onClick={me.getCrossDataHandle.bind(me)}>本地开发获取跨域接口数据</button>
      <span>{crossData}</span>
    </div>)
  }
}
const mapStateToProps = (state) => {
  const {value, final, data, crossData} = state.homeReducer;
  return {
    value,
    final,
    data,
    crossData
  }
};
export default connect(mapStateToProps, action)(Home);