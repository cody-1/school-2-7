<template>
  <User @customEvent="customEvent" @customEvent1="customEvent1" :salesclerks="salesclerks">
  <template #[header]>
    头部信息
  </template>
  用户列表{{ id }}
  </User>
</template>

<script>
import { defineComponent } from "vue"
import User from "../../components/User.vue";
export default defineComponent({
  props:['id'],
  data(){
    return {
      salesclerks: [
          { id: 1, name: '张三', tel: '3333', address: '北京' },
          { id: 2, name: '李四', tel: '4444', address: '上海' },
          { id: 3, name: '王五', tel: '5555', address: '广州' },
          { id: 4, name: '老六', tel: '6666', address: '深圳' },
        
        ],
        header:'header1'
    }
  },
  mounted(){
    const {title,Auth}=this.$route.meta;
    console.log(title,Auth) 
  },

  components: {
    //局部注册
    // key:value
    // User:User
    User
  },
  methods:{
    customEvent(){
      console.log('customEvent')
    },
    customEvent1(id){
      console.log('customEvent1',id)
    }
  }

});
</script>

<style lang="scss" scoped></style>
