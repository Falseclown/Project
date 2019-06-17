<template>
  <div class="wrapper">
    <Header/>
    <div class="login_content">
      <div class="boxs_input">
        <label>
          <span>手机号码</span>
          <input type="text" placeholder="请输入手机号" v-model="phone">
        </label>
        <label>
          <span>验证码</span>
          <input type="text" placeholder="请输入密码" v-model="password">
          <!-- <span>获取验证码</span> -->
        </label>
        <label class="btns">
          <button @click="loginFn">登陆/注册</button>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../api/'
export default {
  props: {},
  components: {},
  data() {
    return {
        phone:"",
        password:"",
        phoneReg:/^1[3456789]\d{9}$/
    };
  },
  computed: {},
  methods: {
      loginFn(){
          if(this.password.trim()!==""&&this.phoneReg.test(this.phone)){
              api.userLogin( {
        phone: this.phone,
        password: this.password
    }).then(res=>{
                  console.log(res.data)
                  let {token} = res.data
                  console.log(token)
                  localStorage.setItem('token',token)
                  this.$router.back();
              }).catch(error=>{
                  this.$alert(error.response.data.message)
              })
          }else{
              this.$alert('您输入的手机号密码有误')
          }
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../static/css/_minix.scss";
@import "../static/css/common.scss";
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .login_content {
    width: 100%;
    flex: 1;
    background: #f8f8f6;
    .boxs_input {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      label {
        width: 92%;
        height: pxTorem(50px);
        margin-left: 4%;
        font-size: pxTorem(14px);
        border-bottom: 1px solid #ccc;
        line-height: pxTorem(60px);
        color: #999;
        input {
            height: 100%;
          padding: 0 pxTorem(10px);
          margin-right: 9%;
        }
      }
      .btns {
        width: 92%;
        height: pxTorem(45px);
        margin-left: 4%;
        margin-top: 20%;
        button {
          width: 100%;
          height: 100%;
          border-radius: 50px;
          font-size: pxTorem(14px);
          outline-style: none;
          border: 0;
          color: #fff;
        }
      }
    }
  }
}
</style>