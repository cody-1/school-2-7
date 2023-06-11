<template>
    <div class>
      <div class="common-layout">
        <el-container>
          <el-header class="common-header flex-float">
            <div class="flex">
              <img class="logo" src="../../assets/logo.png" alt="" />
              <h1 class="title">问卷管理系统</h1>
            </div>
  
            <el-button type="danger" @click="handleLogout">退出</el-button>
          </el-header>
          <el-container>
            <el-aside class="common-aside" width="200px">
              <el-menu background-color="none" text-color="#fff" :router="true">
                
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><school /></el-icon>
                    <span>学校管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/school">学校信息</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="/student">学生信息</el-menu-item>
                  </el-menu-item-group>
                
                </el-sub-menu>

                
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><reading /></el-icon>
                    <span>问卷类型</span>
                  </template>
                 
                  <el-menu-item-group>
                    <el-menu-item index="/cate">调查类型</el-menu-item>
                  </el-menu-item-group>
                   <el-menu-item-group>
                    <el-menu-item index="/item">调查项目</el-menu-item>
                  </el-menu-item-group>
            

                </el-sub-menu>
                <el-sub-menu index="4">
                  <template #title>
                    <el-icon><timer /></el-icon>
                    <span>问卷内容</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/question">调查问题</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="/results">调查结果</el-menu-item>
                  </el-menu-item-group>
 

                </el-sub-menu>


                <el-sub-menu index="5">
                  <template #title>
                    <el-icon><tickets /></el-icon>
                    <span>问卷组卷</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/assembly">调查组卷</el-menu-item>
                  </el-menu-item-group>
                  

                </el-sub-menu>




              </el-menu>
            </el-aside>
            <el-main><router-view></router-view></el-main>
          </el-container>
        </el-container>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "layout",
    setup() {},
    methods: {
  handleLogout() {
    // 其他退出逻辑
    this.$router.push('/login');
  }
}
  };
  
  </script>
  <style >
  .el-container {
    height: 100vh;
    overflow: hidden;
  }
  .common-header {
    background: rgb(0, 0, 17);
  }
  
  .common-aside {
    background: rgb(46, 46, 48);
  }
  .logo {
    width: 60px;
  }
  .title {
    color: #fff;
  }
  .cl{
            background-image: url(/src/assets/2.jpg);
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-size: cover;

        }
  </style>