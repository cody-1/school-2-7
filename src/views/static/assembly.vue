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
            <el-table-column prop="id" label="id" align="center"></el-table-column>
          <el-table-column prop="name" label="组卷名字" width="150px" align="center"></el-table-column>
          <el-table-column prop="password" label="组卷密码" align="center"></el-table-column>
          <el-table-column prop="published" label="发布|未发布" align="center" width="120px"></el-table-column>
          <el-table-column prop="surveyQuestonIds" label="问卷题" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip align="center" width="200px"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间" align="center" width="200px" ></el-table-column>
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


      <el-dialog v-model="dialogFormVisible" title="调查项编辑">
        <el-form :model="school">
            <el-form-item label="组卷名称" :label-width="formLabelWidth">
          <el-input v-model="school.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="组卷密码" :label-width="formLabelWidth">
          <el-input v-model="school.password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="发布|未发布" :label-width="formLabelWidth">
          <el-select v-model="school.published" placeholder="发布|未发布">
    <el-option
      v-for="item in option"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
        <el-form-item label="问卷题" :label-width="formLabelWidth">
          <el-select v-model="school.surveyQuestonIds" placeholder="请选择问卷项">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
        <el-form-item label="更新时间" :label-width="formLabelWidth">
          <el-input v-model="school.updateTime" autocomplete="off" />
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
  import school  from "@/http/assembly.js";
import { ElMessage } from "element-plus";
  import { defineComponent } from "vue";
  import { cloneDeep } from 'lodash-es'
  import dayjs from "dayjs";
  export default defineComponent({
    data() {
      return {
        options: [{
          value: '5,118,7,8',
          label: '5,118,7,8'
        },
        {
          value: '1,2,3,117,4',
          label: '1,2,3,117,4'
        },
        {
          value: '9,11,16,32,89,63',
          label: '9,11,16,32,89,63'
        },
        {
          value: '4,6,12,33,34,65,70',
          label: '4,6,12,33,34,65,70'
        },
        {
          value: '22,31,30,27,24,23',
          label: '22,31,30,27,24,23'
        },
        {
          value: '40,46,55,56,64',
          label: '40,46,55,56,64'
        },
        {
          value: '39,41,46,58,60,72',
          label: '39,41,46,58,60,72'
        },
        {
          value: '101,104,109,187,210',
          label: '101,104,109,187,210'
        },
        {
          value: '77,79,83,88,89,91,99',
          label: '77,79,83,88,89,91,99'
        },
      ],

        option: [{
          value: '发布',
          label: '发布'
        },
        {
          value: '未发布',
          label: '未发布'
        },
      
      ],
        list: [],
        school:{
  "createTime": "",
  "id": 0,
  "name": "",
  "password": "",
  "published": "",
  "surveyQuestonIds": "",
  "updateTime": "",
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
          
          console.log(res.data.surveyAssemblys);
          this.list = res.data.surveyAssemblys;
          this.list.forEach((item) => {
      
      item.createTime = dayjs(item.createTime).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      item.updateTime = dayjs(item.createTime).format(
            "YYYY-MM-DD HH:mm:ss"
          );
      console.log(item.createTime);
    });
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
  this.list.push(res.data.surveyAssembly)
 
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
  "name": "",
  "password": "",
  "published": "",
  "surveyQuestonIds": "",
  "updateTime": "",
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
    