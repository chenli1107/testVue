let express = require('express')
let query = require('./db')
let userRouter = express.Router();

// CREATE TABLE `users_node` (
//     `UID` int(11) NOT NULL AUTO_INCREMENT,
//     `name` varchar(255) DEFAULT NULL,
//     `qq` varchar(255) DEFAULT NULL,
//     `tel` varchar(255) DEFAULT NULL,
//     `age` int(11) DEFAULT NULL,
//     PRIMARY KEY (`UID`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

userRouter.get('/getUsers', (req, res) => {
    let sql = 'select * from users_node'
    query(sql, (err, result) => {
        res.send(JSON.stringify(result))
    })
})

userRouter.get('/selUser', (req, res) => {
    let UID = req.query.UID;
    let sql = `select * from users_node where UID=${UID}`
    query(sql, (err, result) => {
        res.send(JSON.stringify(result))
    })
})


userRouter.post('/addUser', (req, res) => {
    let qq = req.body.qq;
    let tel = req.body.tel;
    let age = parseInt(req.body.age)
    let name = req.body.name;
    let sql = `insert into users_node(qq,tel,age,name) values(${qq},${tel},${age},${name})`
    query(sql, (err, result) => {
        res.send(result)
    })
})
module.exports = userRouter;
