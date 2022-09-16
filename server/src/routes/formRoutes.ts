import { Router } from "express";
import { postInfo, getInfo } from "../controllers/formController";

const router = Router();

// 同一个路由 url，请求方法不同 , 对应的处理函数也不同 ;
router
  .route("/")   // 39.105.169.246/form
  .post(postInfo)
  .get(getInfo)

export default router;