const express = require('express');
const router = express.Router();
const { LoginInfo} = require('../controllers/admin/login');
const { SciList} = require('../controllers/admin/SciList');
const {SaveSciInfo} = require('../controllers/admin/saveSciInfo');
const {AddSciInfo} = require('../controllers/admin/addSciInfo');


/* GET home page. */
router.get('/', function(req, res, next) {
    // 渲染index页面，并将title设置为admin
    res.render('index', { title: 'admin' });
});

// 登录
router.post('/login', LoginInfo);
// router.get('/logout', LogoutInfo);

//获取论文列表
router.get('/sciList', SciList);

// 保存论文修改
router.post('/saveSciInfo', SaveSciInfo);

//添加论文
router.post('/addSciInfo', AddSciInfo);

module.exports = router;
