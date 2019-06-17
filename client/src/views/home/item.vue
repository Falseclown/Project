<template>
  <div @click="todetail(type,applicationNumber)">
    <p class="title">
      <span>{{applicationNumber}}</span>
      <span>
        <i class="iconfont icon-yibangding"></i>待审批
      </span>
    </p>
    <dl>
      <dt>
        <p>
          <span>申请人</span>
          <i>{{nickname}}</i>
        </p>
        <p>
          <span>加班日期</span>
          <i>{{startTime.slice(0,10)}}</i>
        </p>
      </dt>
      <dd>
        <p>
          <span>加班类型</span>
          <i>工作日加班</i>
        </p>
        <p>
          <span>加班时数</span>
          <i>{{time}}</i>
        </p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: [
    "uid",
    "status",
    "startTime",
    "nickname",
    "describes",
    "applicationNumber",
    "endTime",
    "type"
  ],
  components: {},
  data() {
    return {};
  },
  computed: {
    time() {
      const time = new Date(this.endTime) * 1 - new Date(this.startTime);
      return (time / 1000 / 3600).toFixed(0);
    }
  },
  methods: {
    todetail(type,id){
      this.$router.push('/detail/'+type+"/"+id)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";
div {
  width: 90%;
  height: pxTorem(120px);
  padding: 0 5%;
  background: #fff;
  margin-bottom: pxTorem(10px);
  .title {
    display: flex;
    height: pxTorem(30px);
    justify-content: space-between;
    align-items: center;
    color: #a1a1a1;
  }
  dl {
    width: 100%;
    height: pxTorem(90px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    dt {
      width: 45%;
      height: 80%;

      p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 7%;
        span {
          color: #a1a1a1;
          font-size: pxTorem(12px);
        }
        i {
          font-size: pxTorem(13px);
          color: #555;
        }
      }
    }
    dd {
      width: 45%;
      height: 80%;
      p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 7%;
        span {
          color: #a1a1a1;
          font-size: pxTorem(12px);
        }
        i {
          font-size: pxTorem(13px);
          color: #555;
        }
      }
    }
  }
}
</style>