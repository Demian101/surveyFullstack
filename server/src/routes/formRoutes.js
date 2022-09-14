"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var formController_1 = require("../controllers/formController");
var router = (0, express_1.Router)();
// 同一个路由 url，请求方法不同 , 对应的处理函数也不同 ;
router
    .route("/")
    .post(formController_1.postInfo)
    .get(formController_1.getInfo);
exports.default = router;
