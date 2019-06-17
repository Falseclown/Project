<template>
  <div class="wrap">
    <Header :title="type==='overtime'?'办公室加班申请表':'办公室休假申请表'"  backgrounds="#0b6242" colors="#fff"/>
    <main class="main">
       <div v-if="loading">loading...</div>
      <div class="main_head" v-else>
        <dl>
          <dt>
            <img src alt>
          </dt>
          <dd>
            <div class="left">
              <p class="shen">
                <span class="title">申请人姓名</span>
                <span>{{detailData.nickname?detailData.nickname:null}}</span>
              </p>
              <p class="shen">
                <span class="title">直接主管</span>
                <span>秦义超</span>
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
        <ul>
          <li>
            <span class="con">
              加班日期
              <i>*</i>
            </span>
            <span><el-date-picker 
            v-model="data"
             value-format="yyyy-MM-dd"
             :placeholder="new Date().toLocaleDateString()"
             :default-value="new Date().toLocaleDateString()"
            /></span>
          </li>
          <li>
            <span class="con">加班类型</span>
            <select v-model="types">
                <option >默认选择类型</option>
                <option v-for="(item,index) in this[type+'Types']" :key="index">{{item.title}}</option>
            </select>
          </li>
          <li>
            <span class="con">
              加班起始时间
              <i>*</i>
            </span>
            <el-date-picker
            v-model="startTime"
            type="datetime"
            placeholder="选择日期时间"
            format="yyyy-MM-dd HH:mm:ss"/>
            
          </li>
          <li>
            <span class="con">
              加班截止时间
              <i>*</i>
            </span>
            <el-date-picker
            v-model="endTime"
            type="datetime"
            placeholder="选择日期时间"
            format="yyyy-MM-dd HH:mm:ss"/>
          </li>
          <li>
            <span class="con">共计时数</span>
            <span>{{times}}</span>
          </li>
        </ul>
      </div>
      <div class="justly">
        <div class="title">
          <span>
            {{title}}事由
            <i>*</i>
          </span>
        </div>
        <div class="cont">
         <textarea v-model="val">
            1
         </textarea>
        </div>
      </div>
      <div class="photo">
        <div class="title">
          <p><input type="file" @change="addpic($event)" ref="filebtn"> <span>
              上传附件
          </span></p>
           
          <div class="mask_div">
              <span>+</span>
          </div>
         
        </div>

        <div class="img">
         
          <div v-for="(item,index) in add" :key="index">
              <img :src="'http://localhost:3000'+item" alt="">
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
        <button class="cancel" @click="$router.back()">取消</button>
      <button class="sure" @click="submit">提交</button>
    </footer>
  </div>
</template>
<script>
import "../../static/css/detail_common.scss";
import api from '../../api/index';
import Isfile from '../../utils/isfile'
export default {
  props: {
    type: String
  },
  components: {},
  data() {
    return {
        data:'',
        startTime:'',
        endTime:'',
        times:'0',
        types:'默认选择类型',
        val:'',
        overtimeTypes:[{
            title:'双休日加班',
            id:1,
        },{
            title:'节假日加班',
            id:2
        },{
            title:'工作日加班',
            id:3
        }],
         vacationTypes:[{
            title:'年假',
            id:1,
        },{
            title:'调休',
            id:2
        }],
        detailData:null,
        loading:true,
        add:[]
    };
  },
  computed: {
      title(){
          return this.type==='overtime'?'加班':'休假'
      }
  },
  methods: {
      getendTime(){
          let time = new Date(this.endTime).getTime()-new Date(this.startTime).getTime()
          console.log(time)
          if(time<0){
            alert("操作有误,请正确输入时间")
          }else{
            this.times = (time/1000/3600).toFixed(0)
            console.log(this.times)
          }

      },
      addpic(e){
        let userfile = this.$refs.filebtn.files[0]
        let isCheck = new Isfile(userfile,{
          type:['jpg','png','gif','jpeg'],
          size:3
        })
        if(isCheck.isType()&&isCheck.isSize()){
           const formdata = new FormData();
           formdata.append('file',userfile)
           api.commitFile(formdata).then(res=>{
             console.log(res.data)
             this.add.push(res.data.url)
             console.log(this.add)
           })
        }else{
          console.log(1111)
          alert('文件格式不正确')
        }
      },
      submit(){
        let options = {
            annex:this.add,
            describe:this.val,
            endTime:this.endTime,
            startTime:this.startTime,
            type:this.types
        }
        if((options.describe&&options.endTime&&options.startTime)!==''){
            api[this.type+'Submit'](options).then(res=>{
          if(res.data.msg === '提交成功'){
            this.$router.back()
          }else{
            this.$alert(res.data.msg)
          }
        })
        }else{
          this.$alert('请完整填写申请内容')
        }
        
      }
  },
  created() {
      api.islogin().then(res=>{
        this.detailData = res.data.data
        this.loading = false
      })  
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>