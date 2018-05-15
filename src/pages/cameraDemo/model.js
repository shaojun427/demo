import reducers from '@/app/reducers';
import {context, IO} from '@/app/io';


//封装页面reducer、action
let demoModel = {
  reducer: (defaultState = {
    picSrc: ''
  }, action) => {

    switch (action.type) {
      case 'PHOTO_HANDLE':
        const picSrc = action.picSrc;
        return Object.assign({}, defaultState, {
          picSrc
        });
    }
    return defaultState;
  },
  action: (dispatch, ownProps) => {
    return {
      photoHandle: (src) => {
        dispatch({
          type: "PHOTO_HANDLE",
          picSrc: src
        })
      }
    }
  }
}
reducers.setReducers({demoReducer: demoModel.reducer});

const action = demoModel.action;

export {
  action,
  IO
}