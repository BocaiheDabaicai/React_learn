const express=require('express')
const app=express()
app.use((request,response,next)=>{
    console.log('有人请求服务器')
    next()
})
app.get('/students',(request,response)=>{
    const students=[
        {id:'001',name:'tom',age:18},
        {id:'002',name:'prter',age:19},
        {id:'003',name:'ockfor',age:20},
    ]
    response.send(students)
})
app.listen(5000,(err)=>{
    if(!err) console.log('服务器请求成功！！！\n地址为：http://localhost:5000/students')
})
// http://localhost:5000/students
/**
 *   
    package.json处设置代理，是为了解决AJAX跨域问题，
    需要注意的是，获取的数据是先检测3000端口下是否拥有，如果不拥有才会从5000端口下去检测
 */