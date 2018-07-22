const path = require('path');// node的path模块
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清除指定的文件夹
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

module.exports = {
  entry: {
    app:'./src/index.js',
    common:'./src/common.js',
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          "style-loader",
          'css-loader'
        ],
    },
  //   {
  //     test:/\.css$/,
  //     use:[
  //       MiniCssExtractPlugin.loader,
  //       "css-loader"
  //     ]
  // },
    {
        test:/\.less$/,
        use:[
          "style-loader",
          'css-loader',
          'less-loader'

        ],
    },
    {
      test:/\.scss$/,
      use:[
        "style-loader",
        'css-loader',
        'sass-loader'
      ],
    },
    {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
     },
      {
           test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [
             'file-loader'
           ]
      },
        // {
        //   test: /\.(csv|tsv)$/,
        //   use: [
        //     'csv-loader'
        //   ]
        // },
        // {
        //   test: /\.xml$/,
        //   use: [
        //     'xml-loader'
        //   ]
        // }
  ],
},
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  // ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};