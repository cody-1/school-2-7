<template>
      <div :style="{ backgroundImage: 'url(/src/assets/6.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }">
    <div class="login">

        <div class="login-form">
            <div class="login-form-logo">
                <el-image :src="src" fit="fill" :lazy="true"></el-image>
            </div>

            <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="login-ruleForm">
                <el-form-item prop="email">
                    <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入你的用户邮箱" suffix-icon="Message" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="userForm.password" type="password" autocomplete="off" placeholder="请输入你的用户密码"
                        suffix-icon="Lock" />
                </el-form-item>

                <el-form-item class="login-form-btns">
                    <el-button type="primary" @click="btnLogin" index="/Test">用户登录</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue"
import { mapActions, storeToRefs } from "pinia";
import { userLogin } from "../../http";
import { useUserStore } from "../../store/user";
export default defineComponent({
    setup() {
        const src = ref('../../src/assets/logo.png');
        return {
            src,
        }
    },
    data() {
        return {
            n: 30,
            userForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入正确的电子邮箱', trigger: 'blur' },
                    { type: 'email', message: "电子邮箱格式错误", trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入正确的用户密码', trigger: 'blur' },
                    { min: 8, message: '密码长度不得小于8个字符', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
      

    },
    methods: {
        ...mapActions(useUserStore, ['setToken', 'fillUserinfo']),
        btnLogin() {

            const that = this;
            const formEl = that.$refs.ruleFormRef //取ref对象
            //console.log(formEl);
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    const res = userLogin(that.userForm)

                    res.then(result => {

    

                        if (result.success) {
                            const userinfo = result.data.userinfo;
                            console.log(that);
                            that.setToken(userinfo.token);
                            that.fillUserinfo(userinfo);
                            that.$router.push('/Test');

                        }
                        else {

                            return false;
                        }



                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        },
        resetForm() {
            const formEl = this.$refs.ruleFormRef //取ref对象
            formEl.resetFields()
        }
    }

});
</script>

<style lang="scss" scoped>
body, html {
  margin: 0;
 
}
canvas{
    display: block;
}
.login {
    height: calc(100vh - 20px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--el-box-shadow)
}

.login-form-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
}

.login-form-btns {
    display: flex;

}

.login-form-btns .el-button {
    flex: 1;
}

.login-ruleForm {
    margin: 10px;
}
</style>