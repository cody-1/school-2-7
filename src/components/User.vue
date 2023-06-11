<template>
    <div class="salesclerks">
     
      <el-button style="float: right;margin-left: 50px" @click="toAdd"><circle-plus
          style="width: 1em; height: 1em; margin-right: 8px;" />添加</el-button>
      <slot name="header"></slot>
      <el-table :data="salesclerks" style="width: 100%">
        <el-table-column prop="id" label="编号" width="150" />
        <el-table-column prop="name" label="用户姓名" width="200" />
        <el-table-column prop="tel" label="联系方式" width="300" />
        <el-table-column prop="address" label="地址" widt="180" />
        <el-table-column label="功能管理"  width="200">
        <template #default="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" type="primary">
              <edit style="width: 1em; height: 1em; margin-right: 8px;" />修改
            </el-button>
            <el-button @click="handleDelete(scope.$index, scope.row)" type="danger">
              <delete style="width: 1em; height: 1em; margin-right: 8px;" />删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-model="dialogSalesclerksFormVisible" title="用户信息编辑">
        <el-form :model="salesclerk">
          <el-form-item label="编号" :label-width="formLabelWidth">
            <el-input v-model="salesclerk.id" autocomplete="off" />
          </el-form-item>
          <el-form-item label="用户姓名" :label-width="formLabelWidth">
            <el-input v-model="salesclerk.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="salesclerk.tel" autocomplete="off" />
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="salesclerk.address" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogSalesclerksFormVisible = false">取消</el-button>
            <el-button type="primary" @click="save">
              保存
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script>

  import { defineComponent } from "vue"
  export default defineComponent({
    props:{
        salesclerks:{
            type:Array,
            required:true
        }
    },
    data() {
      return {
        dialogSalesclerksFormVisible: false,
        salesclerk: {
          id: 0,
          name: '',
          tel: '',
          address: ''
  
        },
        formLabelWidth: '80px',
        flag: true,//true 添加，false更新
      }
  
    },
    methods: {
      toAdd() {
        this.salesclerk = {
          id: 0,
          name: '',
          tel: '',
          address: ''
        };
        this.dialogSalesclerksFormVisible = true,
          this.flag = true;
  
      },
      save() {
        console.log(this.salesclerk);
        // 如何判断功能是添加还是更新，标志？flag
        //1 .添加
        if (this.flag) {
          this.salesclerks.push(this.salesclerk)
        }
        else {
          //2 更新 优化
  
        }
        this.dialogSalesclerksFormVisible = false;
  
  
      },
      handleEdit(index, row) {
        this.flag = false;
        console.log(index, row)
        this.salesclerk = row;
        this.dialogSalesclerksFormVisible = true;
      },
      handleDelete(index, row) {
        console.log(index, row)
        // index 删除的位置 删除多少个
        this.salesclerks.splice(index, 1)
      },
      btnClick(){
        this.$emit('customEvent');
      },
      btnClick1(){
        const data={};
        data.salesclerk=this.salesclerks[0];
        data.index=0;
        this.$emit('customEvent1',data);
      }

    }
  
  });
  </script>
  
  <style lang="scss" scoped></style>
  