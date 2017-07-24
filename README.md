```
 npm init -y
```

```
npm install nodemon babel-cli babel-preset-es2015 babel-preset-stage-0 -y
```

package.json文件添加：
```
 "start": "./node_modules/.bin/nodemon --exec babel-node index.js"
```

查看express版本
```
npm view express versions --json
```
安装指定版本
```
npm install express@"5.0.0-alpha.5" --save
```
morgan是express默认的日志中间件
```
npm install morgan --save
```
bodyParser中间件用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理
```
npm install body-parser --save
```

ejs模板参考：

[https://github.com/mde/ejs](https://github.com/mde/ejs)

[https://segmentfault.com/a/1190000004286562](https://segmentfault.com/a/1190000004286562)
