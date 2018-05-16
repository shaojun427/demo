import reducers from '@/app/reducers';
import {context, IO} from '@/app/io';
//配置接口参数
context.create('Home', {
  test: {
    mockUrl: 'home/test.json',
    url: 'mock/home/test.json'
  },
  crossOrigin: {
    mockUrl: '/proxy/expressDemo/crossOrigin.json',
    url: '/expressDemo/crossOrigin.json'
  }
});

//封装页面reducer、action
let homeModel = {
  reducer: (defaultState = {
    test: ''
  }, action) => {
    switch (action.type) {
      case 'CHANGE_VALUE':
        const value = action.value;
        return Object.assign({}, defaultState, {
          value
        });
      case 'COUNT_HANDLE':
        const inputValue = action.inputValue;
        const final = inputValue ? (Number(inputValue) ? Number(inputValue) * Number(inputValue) : "请输入数字后计算") : "";
        return Object.assign({}, defaultState, {
          final
        });
      case 'GET_DATA':
        let data = JSON.stringify(action.data);
        return Object.assign({}, defaultState, {
          data
        });
      case 'GET_CROSS_DATA':
        let crossData = JSON.stringify(action.crossData);
        return Object.assign({}, defaultState, {
          crossData
        });
    }
    return defaultState;
  },
  action: (dispatch, ownProps) => {
    return {
      changeHandle: (value) => {
        dispatch({
          type: "CHANGE_VALUE",
          value
        })
      },
      clickHandle: (value) => {
        dispatch({
          type: "COUNT_HANDLE",
          inputValue: value
        })
      },
      getDataHandle: () => {
        IO.Home.test().then((res) => {
          const data = res.data;
          dispatch({
            type: "GET_DATA",
            data
          })
        }).catch()
      },
      getCrossDataHandle: () => {
        IO.Home.crossOrigin().then((res) => {
          const crossData = res.data;
          dispatch({
            type: "GET_CROSS_DATA",
            crossData
          })
        }).catch()
      }
    }
  }
};

reducers.assemble = {homeReducer: homeModel.reducer};

const action = homeModel.action;

export {
  action,
  IO
}
