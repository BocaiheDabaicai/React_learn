const {createProxyMiddleware} = require('http-proxy-middleware')
//过去的写法 const proxy=xxx ,已经不适用现在的代理配置，会产生页面无法打开的错误。
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {  // ‘/api1’ 是代理请求标识，在源地址之后输入便触发代理
      target: 'http://localhost:5000', //请求地址
      changeOrigin: true, //是否改变源地址为服务器地址
      pathRewrite: {'^/api1': ''} //必须加，且表示为空，目的是发送给服务器时的'/api1'被清空，保证获取成功
    })
  )
}
