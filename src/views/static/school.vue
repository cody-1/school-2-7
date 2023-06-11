<template>
    <div >
      <el-button @click="rein">
        <refresh style="width: 1em; height: 1em; margin-right: 8px;" />刷新
      </el-button>
      

          <input type="text" v-model="keyword" style="width:500px;margin-left: 50px;" placeholder="输入id搜索">
    <el-button @click="search(keyword)" style="width: 4em; height: 2em; margin-right: 10px;">
      <search style="width: 1em; height: 1em; margin-right: 8px;" />搜索
    </el-button>


      <div class="table">
        <el-table :data="list" >
          <el-table-column fixed prop="id" label="id" align="center"/>
          <el-table-column prop="province" label="省份" width="80" align="center"/>
          <el-table-column prop="city" label="城市" width="80" align="center"/>
          <el-table-column prop="area" label="市|县" width="80" align="center"/>
          <el-table-column prop="schoolName" label="学校名称" width="170" align="center"/>
          <el-table-column prop="latitude" label="纬度" width="100" align="center"/>
          <el-table-column prop="longitude" label="经度" width="100" align="center" />
          <el-table-column prop="enable" label="是否启用" width="80" align="center"/>
          <el-table-column prop="description" label="学校说明" width="80" align="center"/>
          <el-table-column prop="address" label="地址" width="250" align="center"/>

          <el-table-column  fixed="right" label="操作" width="200" >
            <template v-slot="{ row }">
            <el-button @click="handleEdit(row.id)" type="primary">
              <edit style="width: 1em; height: 1em; margin-right: 8px;" />修改
            </el-button>
            <el-button @click="handleDelete(row.id)" type="danger">
              <delete style="width: 1em; height: 1em; margin-right: 8px;" />删除
            </el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>


      <el-dialog v-model="dialogFormVisible" title="学校编辑">
        <el-form :model="school">
          <el-form-item label="省份" :label-width="formLabelWidth">
            <el-input v-model="school.province" autocomplete="off" />
          </el-form-item>
          <el-form-item label="城市" :label-width="formLabelWidth">
            <el-input v-model="school.city" autocomplete="off" />
          </el-form-item>
          <el-form-item label="市|县" :label-width="formLabelWidth">
            <el-input v-model="school.area" autocomplete="off" />
          </el-form-item>
          <el-form-item label="学校名称" :label-width="formLabelWidth">
            <el-input v-model="school.schoolName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="纬度" :label-width="formLabelWidth">
            <el-input v-model="school.latitude" autocomplete="off" />
          </el-form-item>
          <el-form-item label="经度" :label-width="formLabelWidth">
            <el-input v-model="school.longitude" autocomplete="off" />
          </el-form-item>
          <el-form-item label="是否启用" :label-width="formLabelWidth">
            <el-input v-model="school.enable" autocomplete="off" />
          </el-form-item>
          <el-form-item label="学校说明" :label-width="formLabelWidth">
            <el-input v-model="school.description" autocomplete="off" />
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="school.address" autocomplete="off" />
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
  import school from "@/http/school";
import { ElMessage } from "element-plus";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {

        list: [],
        school: {
  "address": "",
  "area": "",
  "city": "",
  "createTime": "",
  "deleted": 0,
  "description": "",
  "enable": 0,
  "id": 0,
  "latitude": "",
  "longitude": "",
  "province": "",
  "schoolName": "",
  "updateTime": ""
},
        dialogFormVisible: false,
      };
    },
    mounted() {
      this.showData();
    },
    methods: {
      showData() {
      school.all().then((res) => {
        console.log(res.data.schools);
        this.list = res.data.schools;
      });
      },
      rein() {
      location.reload()
       },
     

      handleDelete(id) {
        const data = { id };
        ElMessageBox.confirm("您是否需要删除该学校?", "提示", {
          confirmButtonText: "是",
          cancelButtonText: "否",
          type: "warning",
        })
          .then(() => {
            school.remove(data).then((res) => {
              if (res.success) {
                ElMessage({
                  type: "success",
                  message: "删除成功",
                });
                this.showData();
              } else {
                ElMessage({
                  type: "error",
                  message: "网络出问题，联系管理员",
                });
              }
            });
          })
          .catch(() => {
            ElMessage({
              type: "warning",
              message: "取消删除",
            });
          });
      },



      search(id) {
 const params={id:id};

school.one(params).then(res => {
  console.log(res); // 确认返回数据格式是否正确
  
  this.list=[]
  this.list.push(res.data.school)
  console.log(this.list)

})
  .catch(err => {
    console.log(err);
    ElMessage('未找到该学生');
  });
},







      handleEdit(id) {
        this.dialogFormVisible = true;
        const data = { id };
        school.one(data).then((res) => {
          this.school = res.data.school;
        });
      },
      toAdd() {
        this.school = {
  "address": "",
  "area": "",
  "city": "",
  "createTime": "",
  "deleted": 0,
  "description": "",
  "enable": 0,
  "id": 0,
  "latitude": "",
  "longitude": "",
  "province": "",
  "schoolName": "",
  "updateTime": ""
}
        this.dialogFormVisible = true;
      },
      confirm() {
        if (this.school.id == 0) {
          school.add(this.school).then((res) => {
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
          
          
        } else {


          school.update(this.school).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "编辑成功",
              });
              this.showData();
            } else {
              ElMessage({
                type: "error",
                message: "网络出问题，联系管理员",
              });
            }
          });
          this.dialogFormVisible = false;
        }
      },
    },
  });
  </script>
    
    <style lang="scss" scoped>
  
  </style>
    