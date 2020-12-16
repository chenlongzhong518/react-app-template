let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
let cors = require('cors');
app.listen(3000);
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    resave: true,
    secret: 'aemple',
    saveUninitialized: true
}));

//注册
let users = [];
app.post('/reg', function (req, res) {
    let body = req.body;
    users.push(body);
    res.json({
        success: '注册成功'
    })
});

//登陆
app.post('/login', function (req, res) {
    let body = req.body;
    let user = users.find(item => item.username == body.username && item.password == body.password);
    if (user) {
        req.session.user = user;
        res.json({
            user,
            success: '登录成功'
        });
    } else {
        res.json({
            error: '登录失败,账号或密码错误'
        });
    }
});

//退出登录
app.post('/logout', function (req, res) {
    let body = req.body;
    let user = null;
    res.json({
        user,
        success: '退出成功'
    });
});

