import Header from '../components/header.vue'
import alertMessage from '../components/alertMessage/index.vue'
export default {
    install(Vue){
        Vue.component('Header',Header)
        let AlertClass = Vue.extend(alertMessage);
        Vue.prototype.$alert = (text)=>{
            let AlertComponent = new AlertClass({
                propsData:{
                    text
                }
            })//组件实例 created
            AlertComponent.$mount() //产生真实dom节点
            document.body.appendChild(AlertComponent.$el)
        }
    }
}