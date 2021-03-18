//运行“node demo2.js”看效果
let demo1 = require('./demo1')
let person = demo1.Person;
console.log(new person().sayHi())


let path=require('path')

console.log("文件所在目录："+ __dirname)
console.log("文件完整路径："+__filename)
console.log("命令所在的目录（仅path.resolve时指命令目录）："+path.resolve('./'))