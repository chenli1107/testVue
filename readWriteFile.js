const fs = require('fs')
fs.writeFile('1.txt', 'aaa hello world',{flag:'a'}, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('写入成功')
    }
})

// fs.readFile('1.txt', 'utf-8', (err, data) => {
//     if (err) {
//         //
//     }
//     else {
//         console.log(data.toString())
//     }
// })

// fs.rename('1.txt','2.txt',err=>{
//     //
// })

// fs.unlink('2.txt',err=>{
//     //
// })

// fs.copyFile('1.txt','3.txt',err=>{

// })

// fs.mkdir('11',err=>{})

// fs.readdir('11', (err, data) => {
//     if (err) { }
//     else {
//         console.log(data)
//     }
// })

//空文件夹可以直接删，不是空不能直接删
// fs.rmdir('11',err=>{

// })

//删除非空文件夹
// function removeDir(path) {
//     let data = fs.readdirSync(path);//读取path下面所有的文件/文件夹，得到是一个数组
//     data.forEach(item => {
//         let url = path + '/' + item;
//         let stat = fs.statSync(url)
//         if (stat.isDirectory()) {//判断是不是一个目录
//             removeDir(url)
//         }
//         else {
//             fs.unlinkSync(url)//删除文件
//         }
//     })
//     fs.rmdirSync(path) //删除文件夹
// }
// removeDir('11')



// let writeStream = fs.createWriteStream('1.txt')
// writeStream.write('hello world', 'utf-8')
// writeStream.on('finish', () => {
//     console.log('写入成功')
// })
// writeStream.on('error', () => {
//     console.log('写失败')
// })

// let readStream=fs.createReadStream('1.txt',{
//     highWaterMark:2  // 默认64KB
// })
// readStream.setEncoding('utf-8')
// let data=''
// readStream.on('data',chunk=>{
//     data+=chunk
// })
// readStream.on('end',()=>{
//     console.log(data)
// })
// readStream.on('error',()=>{
//     console.log('读取失败')
// })

//读写
// let rs = fs.createReadStream('1.txt')
// let ws = fs.createWriteStream('2.txt')
// rs.pipe(ws)