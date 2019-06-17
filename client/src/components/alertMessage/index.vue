<template> 
    <div class="popover" v-show='open'>
        {{text}}
    </div>
</template>
<script>
export default {
    props:{
        text:String,
    },
    components:{

    },
    data(){
        return {
            open:true,
            timer:null
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
        this.timer = setTimeout(() => {
            this.open=false
        }, 2000);
    },
    destroyed(){
        clearTimeout(this.timer)
    }
}
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";
.popover{
    background: rgba($color: #000000, $alpha: .6);
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 40%;
    height: 10%;
    padding:pxTorem(5px)pxTorem(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:20;
    border-radius: 5px;
    color:#ccc;
}
</style>