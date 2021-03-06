/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://9tf0sxuh.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,

        movieList: `${host}/weapp/movie`,

        movieDetail: `${host}/weapp/movie/`,

        user: `${host}/weapp/user`,

        commentList: `${host}/weapp/comment?movieId=`,
        
        commentDetail: `${host}/weapp/comment/`,

        commentAdd: `${host}/weapp/comment`,

        recommend: `${host}/weapp/recommend`,

        toggleLike: `${host}/weapp/like`,

        likeList: `${host}/weapp/like?movieId=`,

        like: `${host}/weapp/like/`,

        toggleFave: `${host}/weapp/fave`,

        faveList: `${host}/weapp/fave?movieId=`,

        fave: `${host}/weapp/fave/`,

        myFaveComments: `${host}/weapp/me/fave`,

        myPublishedComments: `${host}/weapp/me/published`,

        myComment: `${host}/weapp/mycomment?movieId=`,


    }
};

module.exports = config;
