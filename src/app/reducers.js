import _ from 'lodash';

//合并所有模块的reducers，用来创建store
const reducerAssemble = {
  reducers: {},
  setReducers: function(reducer) {
    const reducers = _.assign(this.reducers, reducer);
    this.reducers = reducers;
  },
  getReducers: function() {
    return this.reducers;
  }
}

export default reducerAssemble;