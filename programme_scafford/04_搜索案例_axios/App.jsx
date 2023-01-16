import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state={
    users:[],
    isFirst:true,   //判断是否为初次使用
    isLoading:false,  //是否正在读取
    err:'',         //获取网络请求错误信息
  }  //初始化组件
  updateAppState=(stateObj)=>{
    this.setState(stateObj)
  }
  
  render() {
    //const {users}=this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
