<template>
    <div class="head_content">
            <Item
              v-for="(item,index) in datalist"
              :key="index"
              :uid="item.uid"
              :status="item.status"
              :startTime="item.startTime"
              :nickname="item.nickname"
              :describes="item.describes"
              :applicationNumber="item.applicationNumber"
              :endTime="item.endTime"
              :type="item.list_type"
            />
          </div>
</template>
<script>
export default {
    props:['datalist'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";
.head_content {
          @include width(100%);
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #f7f7f7;
          overflow: auto;
        }
</style>