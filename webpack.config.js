const path = require("path");
const webpack = require("webpack");
const EX = require("extract-text-webpack-plugin");//为了单独打包css
const EXCSS = new EX('[name].css');
const env = process.env.NODE_ENV;
let entry = {
  vendor: ["react", "react-dom", "react-router", "react-router-dom", "react-redux", "redux-thunk", "redux", "lodash", "natty-fetch", "nprogress"],
  index: './src/app/app.js',
  'en-us': './src/i18ncss/en-us.less'
};
let plugins = [
  EXCSS,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    "__ENV__": JSON.stringify(env)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ["vendor"]
  })
];
let devtool = "cheap-module-eval-source-map";
if(!!env) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({//线上使用
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    },
    sourceMap: true
  }))
  devtool = "cheap-module-source-map";
}
module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8099,
    open: true,
    //devServer跨域代理配置
    proxy: {
      '/proxy': {
        target: 'https://shaojun427.github.io/',
        pathRewrite: {'^/proxy' : ''},
        changeOrigin: true,
        secure: false
      }
    }
  },
  devtool,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module:{
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      include:[
        path.resolve(__dirname, 'src')
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-3'],
            plugins: ['transform-runtime']
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.(less|css)$/,
      use: EXCSS.extract({
        fallback: "style-loader",
        use: ['css-loader', 'less-loader']
      })
    }]
  },
  plugins: plugins
};