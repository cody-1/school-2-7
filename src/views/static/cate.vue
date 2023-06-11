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
          <el-table-column prop="cateName" label="分类名称"  align="center"></el-table-column>
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
      <el-dialog v-model="dialogFormVisible" title="调查问卷类型">
        <el-form :model="school">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-select v-model="school.cateName" placeholder="请选择题型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
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
  import school  from "@/http/cate.js";
import { ElMessage } from "element-plus";
  import { defineComponent } from "vue";
  import { cloneDeep } from 'lodash-es'
  export default defineComponent({
    data() {
      return {
        options: [{
          value: '判断题',
          label: '判断题'
        },
        {
          value: '单选题',
          label: '单选题'
        },
        {
          value: '多选题',
          label: '多选题'
        },
        {
          value: '简答题',
          label: '简答题'
        },
        
      ],
        list: [],
        school:{
  "cateName": "",
  "id": 0
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
          
          console.log(res.data.surveyCates);
          this.list = res.data.surveyCates;
        });
      },
      rein() {location.reload()},
       onInputNumber() {
      this.search = this.search.replace(/[^0-9]/g, '');
    },
  
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
  this.list.push(res.data.surveyCate)
 
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
  "cateName": "",
  "id": 0
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
    