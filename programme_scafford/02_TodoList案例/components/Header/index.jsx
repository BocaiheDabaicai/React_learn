import React, { Component } from 'react'
import propTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  
  static propTypes={
    addTodo:propTypes.func.isRequired
  }
  
  handleKeyUp=(event)=>{
    const {target}=event
    if(event.key!=='Enter')  return
    if(target.value===''){
      alert('输入不能为空')
      return
    }
    //console.log(target.value)
    const todoObj={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    target.value=''
  }
  
  render() {
    return (
      <div className='todo-header'>
          <input onKeyUp={this.handleKeyUp} type='text' placeholder='输入任务,按下空格确认名称'/>
      </div>
    )
  }
}