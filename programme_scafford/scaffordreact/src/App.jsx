import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'         //Home是路由组件
import About from './pages/About'       //About是路由组件
import Header from './Components/Header'  //Header是一般组件
import MyNavLink from './MyNavLink'
export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，使用<a>进行页面跳转 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* React中，依靠路由链接进行组件切换--编写路由链接 
                  本次展示里面对高亮功能做了一次变更*/}
              {/* <NavLink activeClassName='fangxun' className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName='fangxun' className="list-group-item" to="/home">Home</NavLink> */}
              {/* 代码二次优化 */}
              {/* <MyNavLink to="/about" title="About"/>
              <MyNavLink to="/home" title="Home"/> */}
              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/about">About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
