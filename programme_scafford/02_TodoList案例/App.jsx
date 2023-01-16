import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  //状态与操作状态的函数体在一起
  state={todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'敲代码',done:false},
  ]}
  addTodo=(todoObj)=>{
    const {todos}= this.state
    const newtodos=[todoObj,...todos]
    this.setState({todos:newtodos})
  }
  updateTodo=(id,done)=>{
    const {todos}  =this.state
    const newTodos=todos.map((todoObj)=>{
      if (todoObj.id === id)
        return {...todoObj,done}
      else
        return todoObj
    })
    this.setState({todos:newTodos})
  }
  deleteTodo=(id)=>{
    const {todos}=this.state
    const newTodos= todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }
  checkAllTodo=(done)=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  ClearAllDoneTodo=()=>{
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.done===false   // 另外一种写法 !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos}=this.state
    return (
        <div className='todo-container'>
            <div className='todo-wrap'>
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} ClearAllDoneTodo={this.ClearAllDoneTodo}/>
            </div>
        </div>
    )
  }
}
