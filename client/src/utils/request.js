import axios from 'axios'
import router from '../router/index'
import Vue from 'vue'
const request = axios.create({
    baseURL: 'http://169.254.126.113:3000',
    
    
})
//请求之前拦截器
request.interceptors.request.use((confing)=>{
    // console.log(confing)
    return {
        ...confing,
        headers:{
            ...confing.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{
    return Promise.reject(error)
})
//响应之前拦截器
request.interceptors.response.use((response)=>{
    // console.log(response,'111')
    return response
},(error)=>{
    const response = error.response;
    const status = response.status
    console.log(status)
    if (status>400){
        switch (status) {
            case 401:
                router.push('/login')
                break;
            case 403:
                new Vue().$alert('没有权限')
                break;
            case 404:
                new Vue().$alert('哎呦，页面跑丢了')
                break;
            default:
                break;
        }
    }
    return Promise.reject(error)
})
export default {
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
}