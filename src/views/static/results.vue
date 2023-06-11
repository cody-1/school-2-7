<template>
    <div >
      <el-button @click="rein">
        <refresh style="width: 1em; height: 1em; margin-right: 8px;" />刷新
      </el-button>
      <el-button style="float: right;margin-left: 50px" @click="toAdd"><circle-plus
          style="width: 1em; height: 1em; margin-right: 8px;" />添加</el-button>



        <input type="text" v-model="keyword" style="width:500px;margin-left: 50px;" placeholder="输入id搜索">
    <el-button @click="search(keyword)" style="width: 4em; height: 2em; margin-right: 10px;">
      <search style="width: 1em; height: 1em; margin-right: 8px;" />搜索
    </el-button>


      <div class="table">
        <el-table :data="list" >
          <el-table-column fixed prop="id" label="id" align="center"></el-table-column>
          <el-table-column prop="serveyListId" label="组卷ID"  align="center"></el-table-column>
          <el-table-column prop="userId" label="用户编号"  align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间"  align="center"></el-table-column>
          <el-table-column prop="results" label="试题结果"  align="center"></el-table-column>
          <el-table-column  fixed="right" label="操作" width="200" >
            <template #default="scope">
            <el-button @click="toEdit(scope.row)" type="primary">
              <edit style="width: 1em; height: 1em; margin-right: 8px;" />修改
            </el-button>
            <el-button @click="toDelete(scope.row.id)" type="danger">
              <delete style="width: 1em; height: 1em; margin-right: 8px;" />删除
            </el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>


      <el-dialog v-model="dialogFormVisible" title="编辑">
        <el-form :model="school">
          <el-form-item label="组卷ID" :label-width="formLabelWidth">
            <el-input v-model="school.serveyListId" autocomplete="off" />
          </el-form-item>
          <el-form-item label="用户编号" :label-width="formLabelWidth">
            <el-input v-model="school.userId" autocomplete="off" />
          </el-form-item>
          <el-form-item label="创建时间" :label-width="formLabelWidth">
            <el-input v-model="school.createTime" autocomplete="off" />
          </el-form-item>
          <el-form-item label="试题结果" :label-width="formLabelWidth">
            <el-input v-model="school.results" autocomplete="off" />
          </el-form-item>
          </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="save()"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </template>
    

<script>
  import school  from "@/http/results.js";
import { ElMessage } from "element-plus";
  import { defineComponent } from "vue";
  import { cloneDeep } from 'lodash-es'
  import dayjs from "dayjs";
  export default defineComponent({
    data() {
      return {
        list: [],
        school:{
  "createTime": "",
  "id": 0,
  "results": "",
  "serveyListId": 0,
  "userId": 0
},
        dialogFormVisible: false,
      };
    },
    mounted() {
      this.showData();
    

    },
    methods: {
      showData(){

        
        school.all().then((res) => {
  
          console.log(res.data.surveyResults);
          this.list = res.data.surveyResults;
          this.list.forEach((item) => {
      
      item.createTime = dayjs(item.createTime).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      console.log(item.createTime);
    });
        });

   
      school.qall().then((res)=>{

        console.log(res)
      

      });


      },
      rein() {location.reload()},
     
  
      toDelete(id){
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            school.remove(params).then(res => {
                if (res.success) {
                this.showData()

                }
                else {
                    console.log(res.msg)
                    return false
                }


            }).catch(err => {

            })
        },


        search(id) {

school.one(id).then(res => {
  console.log(res); // 确认返回数据格式是否正确
  
  this.list=[]
  this.list.push(res.data.surveyResult)
 
  console.log(this.list)

})
  .catch(err => {
    console.log(err);
    ElMessage('未找到该学生');
  });
},









        toEdit(school){
          console.log(school)
this.dialogFormVisible=true;
this.school=cloneDeep(school)
        },
        toAdd() {
          this.school={
  "createTime": "",
  "id": 0,
  "results": "",
  "serveyListId": 0,
  "userId": 0
},
            this.dialogFormVisible = true;
        },
        save() {
            if (this.school.id == 0) {
                school.add(this.school).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.showData();
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else{
                school.update(this.school).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.showData();
                        ElMessage(res.msg)
                    }
                    else {
                      
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

          }
        }

  });
  </script>
    
    <style lang="scss" scoped>
  
  </style>
    