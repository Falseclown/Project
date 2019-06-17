<template>
  <div class="nav">
    <div class="items" v-for="(item,index) in btnlist"
     :key="index"
     @click="clickFn(item.status)">
      <div :class="{'active':index===ind}">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      btnlist: [
        {
          title: "待处理",
          icon: "iconfont icon-05",
          status: 0
        },
        {
          title: "已发送",
          icon: "iconfont icon-07",
          status: 1
        },
        {
          title: "已处理",
          icon: "iconfont icon-yibangding",
          status: 2
        }
      ],
      ind:0,
    };
  },
  computed: {},
  methods: {
    clickFn(status){
      this.ind = status
      this.$emit('change',status)
    },
    
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";
.nav {
  @include width(100%);
  @include height(pxTorem(100px));
  display: flex;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 20px 20px #eee;
  .items {
    flex: 1;
    display: flex;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        margin-bottom: pxTorem(10px);
        font-size: pxTorem(20px);
        color: #ddd;
      }
      span {
        font-size: pxTorem(13px);
        color: #ddd;
      }
      &.active {
      i {
        color: #096242;
      }
      span {
        color: #096242;
      }
    }
    }

    
  }
}
</style>