/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// --- 登录与授权 Demo --- //
// 登录接口
router.get('/login', authorizationMiddleware, controllers.login)
// 用户信息接口（可以用来验证登录态）
router.get('/user', validationMiddleware, controllers.user)

// --- 图片上传 Demo --- //
// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中
router.post('/upload', controllers.upload)

// --- 信道服务接口 Demo --- //
// GET  用来响应请求信道地址的
router.get('/tunnel', controllers.tunnel.get)
// POST 用来处理信道传递过来的消息
router.post('/tunnel', controllers.tunnel.post)

// --- 客服消息接口 Demo --- //
// GET  用来响应小程序后台配置时发送的验证请求
router.get('/message', controllers.message.get)
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)
// GET 获取电影列表
router.get('/movie', controllers.movie.list)
// GET 获取电影详情
router.get('/movie/:id', controllers.movie.detail)
// GET 获取影评列表
router.get('/comment', controllers.comment.list)
// GET 获取影评详情
router.get('/comment/:id', controllers.comment.detail)
// GET 获取指定电影id的我的影评
router.get('/mycomment', validationMiddleware, controllers.comment.myComment)
// POST 添加影评
router.post('/comment', validationMiddleware, controllers.comment.add)
// GET 获取影评推荐信息
router.get('/recommend', validationMiddleware, controllers.comment.recommend)
// GET 获取指定comment id的点赞信息
router.get('/like/:commentId', validationMiddleware, controllers.like.like)
// GET 获取用户是否点赞了指定movieId的下的相关评论
router.get('/like', validationMiddleware, controllers.like.list)
// PUT 点赞/取消点赞
router.put('/like', validationMiddleware, controllers.like.toggleLike)
// GET 获取用户是否收藏了指定movieId的下的相关评论
router.get('/fave', validationMiddleware, controllers.fave.list)
// GET 获取指定comment id的收藏信息
router.get('/fave/:commentId', validationMiddleware, controllers.fave.fave)
// PUT 收藏/取消收藏
router.put('/fave', validationMiddleware, controllers.fave.toggleFave)
// GET 获取我收藏的评论列表
router.get('/me/fave', validationMiddleware, controllers.me.myFaveComments)
// GET 获取我发布的评论列表
router.get('/me/published', validationMiddleware, controllers.me.myPublishedComments)

module.exports = router
