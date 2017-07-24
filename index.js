import express from 'express'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'

// morgan是express默认的日志中间件
//bodyParser中间件用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))

let comments = []
app.locals.comments=comments;


app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','ejs')

//视图引擎ejs

app.get('/',(request,response)=>{
    response.render('index')
})

app.get('/comments',(request,response)=>{
    response.render('comments/index')
})

app.get('/comments/new',(request,response)=>{
    response.render('comments/new')
})



app.post('/comments/new',(request,response)=>{
  if(!request.body.comment){
    response.status(400).send('Do you have something to say?');
    return
  }
  comments.push({
    comment:request.body.comment,
    created_at:new Date()
  })
  response.redirect('/comments')
})


app.listen(3000,()=>{
    console.log('listen port :3000')
})
