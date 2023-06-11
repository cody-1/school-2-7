import instance from "./axios";
import { useUserStore } from '../store/user.js'

const userStore = useUserStore() // 获取用户 store
const token = userStore.token // 获取 token
const headers = {
  Authorization: 'Bearer ' + token, // 添加 Authorization 头部字段
}
const add = (data) => {
    return instance.request({
       url:'api/survey-question/add',
       method:'post',
       headers,
       data
    })
 }
 const all = (params) => {
    return instance.request({
       url:'api/survey-question/all',
       method:'get',
       params
    })
 }


 const remove = (params) => {
    return instance.request({
       url: 'api/survey-question/delete/'+params.id,
       method: 'get',
       headers,
    })
 }
 const update = (data) => {
    return instance.request({
       url:'api/survey-question/edit',
       method:'post',
       data
    })
 }
const one = (id) => {
    return instance.request({
       url:'api/survey-question/one/'+id,
    })
 }

 







export default {
    add,
    all,
    remove,
    update,
    one,
   
 }

