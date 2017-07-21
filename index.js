import express from 'express'
import morgan from 'morgan'
import path from 'path'

const app = express();

app.use(morgan('dev'))

app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(request,response)=>{
    response.render('index')
})

app.get('/comments/new',(request,response)=>{
    response.render('comments/new')
})

app.listen(3000,()=>{
    console.log('listen port :3000')
})  