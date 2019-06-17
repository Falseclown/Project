<template>
  <div class="wrap">
    <Header backgrounds="#0b6242" colors="#fff"/>
    <main class="main">
      <div class="main_head"></div>
      <div class="message">
        <ul>
          <li>
            <p><span>申请人</span><b>Lilan Liyan</b></p>
            <p><span>部门</span> <b>星巴克营运部</b></p>
          </li>
          <li>
            <p><span>员工职位</span><b>P2</b></p>
            <p><span>员工编号</span><b>06060606</b></p>
          </li>
        </ul>
      </div>
      <div class="content">
          <dl v-for="(item,index) in list" :key="index">
            <dt>
              <img :src="item.avatar" alt="">
            </dt>
            <dd>
              <p class="title">{{item.nickname}}</p>
              <p class="red">主管循环审批</p>
              <p class="idea">审批意见:{{item.remark}}此申请。</p>
            </dd>
          </dl>
      </div>
    </main>
  </div>
</template>
<script>
import api from "../../api";
export default {
  props: {
    type: String,
    id: String
  },
  components: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  methods: {},
  created() {
    api.approveHistory({ applicationNumber: this.id }).then(res => {
      if(res.data.data===null){
          this.$alert("暂无审批历史")
      }else{
        this.list = res.data.data;
      }
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .main {
    width: 100%;
    flex: 1;
    background: #f7f7f7;
    overflow: auto;
    .main_head {
      width: 100%;
      height: pxTorem(100px);
      background: #0b6242;
      border-radius: 0px 0px 14% 14%;
    }
  }
}
</style>