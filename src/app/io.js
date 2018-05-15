import nattyFetch from 'natty-fetch';
import NProgress from 'nprogress';

//初始化接口调用，参数配置
const context = nattyFetch.context({
  mockUrlPrefix: '/mock/',
  mock: !__ENV__,
  willFetch: () => {
    NProgress.start();
  },
  didFetch: () => {
    NProgress.done();
  },
  withCredentials: true,
  traditional: true,
  fit(response) {
    return {
      "success": response.errcode === 0 || response.success,
      "content": response,
      "error": response
    }
  }

});

const IO = context.api

export {
  context,
  IO
};