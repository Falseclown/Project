<template>
  <div class="wrapper">
    <button @click="openFn">+ 发起任务</button>
    <Popup :flag="flag" @change="PopupFn"/>
    <Header>
        <p>
            <i class="iconfont icon-riqixuanze"></i>
        <router-link to="/search">
            <i class="iconfont icon-fangdajing"></i>
        </router-link>
        </p>
      </Header>
    <tableMenu @change="tableMenu"/>
    <main class="main">
      <div class="content">
        <div class="head">
          <tableTitle @change="tableTitle"/>
          <todoList :datalist="datalist"/>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import tableMenu from "../views/home/tablemenu.vue";
import api from "../api/";
import tableTitle from '../views/home/tableTitle.vue';
import todoList from '../views/home/todolist.vue';
import Popup from '../components/popup'
import {mapActions} from 'vuex'
export default {
  name:'index',
  props: {},
  components: {
    tableMenu,
    tableTitle,
    todoList,
    Popup
  },
  data() {
    return {
      flag: false,
      datalist: [],
      data: [],
      dataOptions: {
        page: 1,
        pageSize: 10,
        create_at: 0,
        type: "overtime",
        status: 0
      }
    };
  },
  computed: {},
  methods: {
    ...mapActions('user',['getUserInfo']),
    openFn() {
      this.flag = true;
    },
     gettasklist() {
      api.getlist(this.dataOptions).then(res => {
        this.data = res.data.data;
        this.datalist = res.data.data;
      });
    },
    tableMenu(status) {
      this.dataOptions.status = status;
      this.gettasklist()
    },
    tableTitle(type){
       this.dataOptions.type = type;
       this.gettasklist()
    },
    PopupFn(){
        this.flag=false
    }
   
  },
  created() {
    this.gettasklist()
    this.getUserInfo()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../static/css/_minix.scss";
@import "../static/css/common.scss";
.wrapper {
  @include width(100%);
  @include height(100%);
  display: flex;
  flex-direction: column;
  position: relative;
  button {
    width: 28%;
    height: pxTorem(40px);
    border-radius: 50px;
    border: none;
    outline-style: none;
    position: absolute;
    bottom: 3%;
    right: 5%;
    background: #096242;
    color: #fff;
    font-size: pxTorem(13px);
  }

  .main {
    @include width(100%);
    flex: 1;
    font-size: pxTorem(13px);
    overflow: auto;
    .content {
      @include width(100%);
      @include height(100%);
      .head {
        @include width(100%);
        @include height(100%);
        display: flex;
        flex-direction: column;
        overflow: auto;
       
        .head_content {
          @include width(100%);
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #f7f7f7;
          overflow: auto;
        }
      }
    }
  }
}
</style>