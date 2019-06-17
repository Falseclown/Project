<template>
    <div class='wrap'>
        <Header/>
        <div class="search">
            <div class="input_box">
                <i class="iconfont icon-fangdajing"></i><input type="text" placeholder="搜索">
            </div>
            <span @click="$router.back()">取消</span>

        </div>
       
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['getUserInfo'])
    },
    created(){
        this.getUserInfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/css/_minix.scss";
@import "../static/css/common.scss";
.wrap{
    width: 100%;
    height: 100%;
    .search{
        width: 90%;
        height: pxTorem(40px);
        display: flex;
        font-size: pxTorem(14px);
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        .input_box{
            width: 85%;
            height: 75%;
            background: #f7f7f7;
            display: flex;
            align-items: center;
            i{
                margin:0 2%;
            }
            input{
                font-size: pxTorem(12px);
                padding: 0 pxTorem(5px);
            }
        }
        span{
            color:#096242;
        }
    }
}
</style>