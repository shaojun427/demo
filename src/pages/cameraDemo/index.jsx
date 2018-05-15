import './index.less';
import React, {Component} from 'react';
import { connect} from 'react-redux';
import {action, IO} from './model';

class Demo extends Component {
  constructor(props) {
    super(props)
  }
  photoHandle(e) {
    const {props} = this;
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      props.photoHandle(e.target.result)
    }
  }
  render() {
    const {props: {picSrc}, photoHandle} = this;
    return (<div>
      <input onChange={photoHandle.bind(this)} type="file" id="take-picture" accept="image/*" />
      <img width="50%" src={picSrc} />

      <div className="box">
        <ul className="one">
          <li></li>
          <li></li>
        </ul>
        <ul className="two">
          <li></li>
          <li></li>
        </ul>
        <ul className="mask"></ul>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  const {picSrc} = state.demoReducer;
  return {
    picSrc
  }
};

export default connect(mapStateToProps, action)(Demo);