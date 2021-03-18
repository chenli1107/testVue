//运行“node demo2.js”看效果
let a = 10;
class Person {
    constructor() {
        this.name = 'zhangsan'
    }
    sayHi() {
        console.log(`hello,我是${this.name}`)
    }
}
//可被引用的模块
module.exports = {
    a,
    Person
}