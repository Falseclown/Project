<template>
  <div class="wrap">
    <Header :title="type==='overtime'?'办公室加班表':'办公室休假表'" backgrounds="#0b6242" colors="#fff"/>
    <main class="main">
      <div v-if="loading">...loading</div>
      <div class="main_head" v-else>
        <dl>
          <dt>
            <img :src="list.avatar" alt>
          </dt>
          <dd>
            <div class="left">
              <p>
                <span class="title">申请人姓名</span>
                <span>{{list.nickname}}</span>
              </p>
              <p>
                <span class="title">直接主管</span>
                <span>秦义超</span>
              </p>
              <p>
                <span class="title">申请单号</span>
                <span>{{list.applicationNumber}}</span>
              </p>
              <p>
                <span class="title">发起申请</span>
                <span>{{list.create_at.slice(0,10)}}</span>
              </p>
            </div>
            <div class="right">
              <p>
                <i class="iconfont icon-chevron-thin-right"></i>
              </p>
            </div>
          </dd>
        </dl>
      </div>
      <div class="context">
        <div class="title">
          <span>申请信息</span>
        </div>
        <div v-if="loading">...loading</div>
        <ul v-else>
          <li>
            <span class="con">
              加班日期
              <i>*</i>
            </span>
            <span>{{list.startTime.slice(0,10)}}</span>
          </li>
          <li>
            <span class="con">加班类型</span>
            <span>双休日加班</span>
          </li>
          <li>
            <span class="con">
              加班起始时间
              <i>*</i>
            </span>
            <span>{{list.startTime.slice(11,19)}}</span>
          </li>
          <li>
            <span class="con">
              加班截止时间
              <i>*</i>
            </span>
            <span>{{list.endTime.slice(11,19)}}</span>
          </li>
          <li>
            <span class="con">共计时数</span>
            <span>{{time}}</span>
          </li>
        </ul>
      </div>
      <div class="justly">
        <div class="title">
          <span>
            加班事由
            <i>*</i>
          </span>
        </div>
        <div class="cont">
          <p>{{list.describes}}。</p>
        </div>
      </div>
      <div class="photo">
        <div class="title">
          <span>
            <i class="iconfont icon-faxiandingdan"></i>
            附件
          </span>
          <span class="num">共 {{list.annex?list.annex.length:0}} 个 ></span>
        </div>

        <div class="img">
          <div v-for="(item,index) in list.annex" :key="index">
            <img :src="'http://localhost:3000'+item" alt>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
        <button class="historyFn" @click="historyFn">
            <i class="iconfont icon-xiaoxi"></i>
            <span>审批历史</span>
        </button>
        <button class="back" @click="$router.back()">
            退回    
        </button>
        <button class="consent">
            同意
        </button>
    </footer>
  </div>
</template>
<script>
import '../../static/css/detail_common.scss'
import api from "../../api/";
import { mapActions } from "vuex";
export default {
  props: {
    type: String,
    id: String
  },
  components: {},
  data() {
    return {
      list: {},
      loading: true
    };
  },
  computed: {
    time() {
      const time =
        new Date(this.list.endTime) * 1 - new Date(this.list.startTime);
      return (time / 1000 / 3600).toFixed(0);
    }
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    historyFn(){
      this.$router.push('/history/'+this.type+'/'+this.id)
    }
  },
  created() {
    this.getUserInfo();
    api[this.type +'Detail']({applicationNumber: this.id }).then(res => {
        // console.log(res.data.data)
        this.list = res.data.data;
        this.loading = false;
      });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">

</style>