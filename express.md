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

