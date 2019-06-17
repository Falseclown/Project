<template>
  <div class="mask" v-if="flag">
    <transition name="fade"  >
        <div class="mask_main" @click.self="clickFn"></div>
    </transition>
    
    <div class="mask_footer">
      <div class="item">
        <router-link to="/commit/overtime">
          <i class="iconfont icon-guangpan" :style="{color:'#ffaa3c'}"></i>
          <span>加班</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/commit/vacation">
          <i class="iconfont icon-fengjing" :style="{color:'#6bbb62'}"></i>
          <span>休假</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import "../../static/css/Animated.css"
export default {
  props: ["flag"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    clickFn() {
      this.$emit("change");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";


.mask {
  @include width(100%);
  @include height(100%);
  position: absolute;
  z-index: 99;
  .fade-enter,.fade-leave-to{
    opacity:0;
  }
  .fade-enter-active,.fade-leave-active{
    transition:opacity 5s;
   
  }
  .fade-enter-to,.fade-leave{
    opacity: 1;
    
  }
  .mask_main {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
  }
  

  .mask_footer {
    width: 100%;
    height: pxTorem(120px);
    background: #fff;
    display: flex;
    position: absolute;
    bottom: 0;
    .item {
      flex: 1;
      height: 100%;
      display: flex;
       justify-content: center;
    align-items: center;
      a {
        width: 100px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        i {
          margin-bottom: 10px;
          font-size: pxTorem(22px);
        }
        span {
          font-size: pxTorem(12px);
        }
      }
    }
  }
}
</style>