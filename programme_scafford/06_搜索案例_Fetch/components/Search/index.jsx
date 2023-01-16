import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
  search=()=>{
    //连续结构赋值+重命名
    const {KeyWordElement:{value:KeyWord}}=this
    //发送请求前改变状态
    //this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})
    console.log(KeyWord)
    //发送网络请求
   /*  axios.get(`http://localhost:3000/api1/search/users?q=${KeyWord}`).then(
      response=>{
        //请求发送成功
        //this.props.updateAppState({isLoading:false,users:response.data.items})
        PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
      },
        //请求发送失败
      error=>{
        //this.props.updateAppState({isLoading:false,err:error.message})
        PubSub.publish('atguigu',{isLoading:false,err:error.message})
      }
    ) */
    //发送网络请求——使用fetch(Window自带)，该技术注重分离
    fetch(`http://localhost:3000/api1/search/users2?q=${KeyWord}`).then(
      response=>{
        console.log('成功联系服务器',response)
        return response.json()
      },
      error=>{
        console.log('联系服务器失败',error)
        return Promise(()=>{})  //需要返回一个空对象，即可不进行下一个then语句，若缺失该语句，会执行下一个then语句里的成功回调并获得Undefined对象
      }
    ).then(
      response=>{console.log('数据获取成功',response)},
      error=>{console.log('数据获取失败',error)}
    )
  }
  
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
            <input ref={c=> this.KeyWordElement =c} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
