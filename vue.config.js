// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// gzip压缩
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CompressionPlugin = require('compression-webpack-plugin');

const production = process.env.NODE_ENV != 'development';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  lintOnSave: false, // 关闭 lint 错误
  productionSourceMap: false, // 关闭生产环境的 source map
  assetsDir: 'assets', // 将静态资源放到dist 文件下的assets文件夹里
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'), // webpack启动服务会在dist目录下
    compress: true,
    filename: 'bundle.js',
    port: 8080, // 设置端口号
    // proxy: {
    //   '/api': {
    //     target: 'https://test.zjxinai.com/smartpark_web_api/',
    //     // target: 'http://192.168.0.197:8069/', //
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // } // 设置代理
  },
  css: {
    loaderOptions: {
      // 配置全局scss变量或者mixin....
      sass: {
        prependData: '@import "@/styles/global.scss";'
      }
    }

  },
  configureWebpack: {
    // 打包忽略文件
    externals: {
      'echarts': 'echarts',
    //   axios: 'axios',
      moment: 'moment',
    //   'qiniu-js': 'qiniu'
      // xlsx: 'XLSX",
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 提前预加载提高切换路由的体验
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      // to ignore runtime.js
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }]);
    config.plugins.delete('prefetch');
    config.plugin('CompressionPlugin').use(new CompressionPlugin({
      test: /\.(js|css|json|txt|html|svg|mp3)(\?.*)?$/i, // 匹配文件名
      filename: '[path][base].gz',
      algorithm: 'gzip',
      minRatio: 0.8,
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginalAssets: false // 是否删除源文件
    }));
    config
      .when(production, configs => {
        configs.plugin('ScriptExtHtmlWebpackPlugin')
          .after('html')
          .use('script-ext-html-webpack-plugin', [{
            inline: /runtime\..*\.js$/
          }])
          .end();
        configs
          .optimization.splitChunks({
            // inital 只操作同步的 all 所有的 async 异步的
            chunks: 'all', // 默认支持异步的代码分割 import()
            minSize: 30000, // 文件超过30k 我就会抽离他
            maxSize: 0,
            minChunks: 2, // 最少模块引用2次才抽离
            maxAsyncRequests: 5, // 最多5个请求
            maxInitialRequests: 3, // 最多首屏加载3个请求
            automaticNameDelimiter: '-', // xxx~a~b
            automaticNameMaxLength: 30, // 最长名字打大小
            name: true,
            cacheGroups: {
              vendor: {
                chunks: 'all',
                test: /node_modules/,
                name: 'vendor',
                minChunks: 1,
                maxInitialRequests: 5,
                minSize: 0,
                priority: 100
              },
              common: {
                chunks: 'all',
                test: /[\\/]src[\\/]js[\\/]/,
                name: 'common',
                minChunks: 2,
                maxInitialRequests: 5,
                minSize: 0,
                priority: 60
              },
              styles: {
                name: 'styles',
                test: /\.(sa|sc|c)ss$/,
                chunks: 'all',
                enforce: true
              }
            }
          });
        configs.optimization.runtimeChunk('single');
      });
    // 图片不超过3K，转base64,减少图片请求
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 3 * 1024
      }));
  }
};
