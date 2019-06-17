import api from '../../api'
export default {
    namespaced:true,
    state:{
        list:{}
    },
    mutations:{
        getuser(state,data){
            state.list = data
        }
    },
    actions:{
        getUserInfo({commit}){
            api.islogin().then(res => {
                commit("getuser",res.data)
            })
        }
    }
}