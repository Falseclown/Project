import request from '../utils/request'
export default {
    //用户验证
    islogin:()=>request.get('/api/user/info'),
    //列表详情
    getlist: (data) => request.get("/api/task/list",data),
    //登录验证
    userLogin: (data) => request.post('/api/login',data),
    //加班详情
    overtimeDetail:(data)=>request.get('/api/apply/overtime',data),
    //休假详情
    vacationDetail: (data) => request.get('/api/apply/vacation', data),
    //加班提交
    overtimeSubmit: (data) => request.post('/api/apply/overtime',data),
    //休假提交
    vacationSubmit: (data) => request.post('/api/apply/vacation', data),
    //上传文件
    commitFile:(file)=>request.post('/api/upload',file),
    //审批历史
    approveHistory: (data) => request.get('/api/task/history',data)
}