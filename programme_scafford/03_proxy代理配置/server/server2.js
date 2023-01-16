const express=require('express')
const app=express()
app.use((request,response,next)=>{
    console.log('有人请求服务器二号')
    next()
})
app.get('/cars',(request,response)=>{
    const cars=[
        {id:'001',name:'benzi',price:199},
        {id:'002',name:'meijie',price:216},
        {id:'003',name:'okfor',price:342},
    ]
    response.send(cars)
})
app.listen(5001,(err)=>{
    if(!err) console.log('服务器二号请求成功！！！\n地址为：http://localhost:5001/cars')
})
// http://localhost:5001/cars
/**
 *   
    
 */