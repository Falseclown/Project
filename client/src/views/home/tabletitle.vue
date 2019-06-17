<template>
  <div class="head_main">
    <div class="head_box">
      <span
        :class="{'active':index===ind}"
        v-for="(item,index) in list"
        :key="index"
        @click="btnFn(item.type,index)"
      >{{item.title}}</span>
    </div>
    <p>
      <i class="iconfont icon-fenlei-xuanzhong"></i>
      <i class="iconfont icon-gengduo-2"></i>
    </p>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0,
      list: [
        {
          title: "加班",
          type: "overtime"
        },
        {
          title: "休假",
          type: "vacation"
        }
      ]
    };
  },
  computed: {},
  methods: {
    btnFn(type, index) {
      this.ind = index;
      this.$emit("change", type);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";
.head_main {
  @include width(100%);
  @include height(pxTorem(80px));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    width: 15%;
    position: absolute;
    right: 3%;
    font-size: pxTorem(16px);
    i {
      color: #ddd;
      margin-right: 11%;
    }
  }
  .head_box {
    @include width(50%);
    @include height(32%);
    border: 1px solid #096242;
    border-radius: 50px;
    display: flex;
    overflow: hidden;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #096242;
      &.active {
        background: #096242;
        color: #fff;
      }
    }
  }
  font-size: pxTorem(12px);
}
</style>