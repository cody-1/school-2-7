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
          <el-table-column fixed prop="id" label="id" align="center"/>
          <el-table-column prop="content" label="问题试卷"  align="center"/>
          <el-table-column prop="surveyCateId" label="问卷类型"  align="center"/>
          <el-table-column prop="description" label="问卷说明"  align="center"/>
          <el-table-column prop="surveyItemIds" label="调查问卷项"  align="center"/>
          <el-table-column prop="userId" label="用户编号"  align="center"/>
        
          <el-table-column  fixed="right" label="操作" width="200" >
            <template  #default="scope">
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


      <el-dialog v-model="dialogFormVisible" title="问卷问题编辑">
        <el-form :model="question">
          <el-form-item label="问卷试卷" :label-width="formLabelWidth">
            <el-input v-model="question.content" autocomplete="off" />
          </el-form-item>
          <el-form-item label="问卷类型" :label-width="formLabelWidth">
            <el-input v-model="question.surveyCateId" autocomplete="off" />
          </el-form-item>
          <el-form-item label="问卷说明" :label-width="formLabelWidth">
            <el-input v-model="question.description" autocomplete="off" />
          </el-form-item>
          <el-form-item label="调查问卷项" :label-width="formLabelWidth">
            <el-select v-model="question.surveyItemIds" placeholder="请选择问卷项">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
          </el-form-item>
          <el-form-item label="用户编号" :label-width="formLabelWidth">
            <el-input v-model="question.userId" autocomplete="off" />
          </el-form-item>
          </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="confirm()"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </template>
    

<script>
  import question from "@/http/question";
import { ElMessage } from "element-plus";
  import { defineComponent } from "vue";
  import { cloneDeep } from 'lodash-es'
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

        list: [],
        question: {
  "content": "",
  "description": "",
  "id": 0,
  "surveyCateId": 0,
  "surveyItemIds": "",
  "userId": 0
},
        dialogFormVisible: false,
      };
    },
    mounted() {
      this.showData();
    },
    methods: {
      showData() {
        question.all().then((res) => {
          console.log(res.data.surveyQuestions)
          this.list = res.data.surveyQuestions;
        });
      },
      rein() {
      location.reload()
      
    },onInputNumber() {
      this.search = this.search.replace(/[^0-9]/g, '');
    },
      toDelete(id) {
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            question.remove(params).then(res => {
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

question.one(id).then(res => {
  console.log(res); // 确认返回数据格式是否正确
  
  this.list=[]
  this.list.push(res.data.surveyQuestion)
 
  console.log(this.list)

})
  .catch(err => {
    console.log(err);
    ElMessage('未找到该学生');
  });
},







      
      toEdit(question) {
        console.log(question)
        this.dialogFormVisible = true;
        this.question=cloneDeep(question)
       
      },
      toAdd() {
       this.question={
      "content": "",
      "description": "",
        "id": 0,
       "surveyCateId": 0,
      "surveyItemIds": "",
     "userId": 0
       },
        this.dialogFormVisible = true;
      },
      confirm() {
        if (this.question.id == 0) {
          question.add(this.question).then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.showData();
              ElMessage(res.msg)
            } else {
              ElMessage(res.msg)
              return false
            }
          }).catch(err => {
          ElMessage('网络错误联系管理员')
        })
          
          
        } else{
                question.update(this.question).then(res => {
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
      },
    },
  });
  </script>
    
    <style lang="scss" scoped>
  
  </style>
    