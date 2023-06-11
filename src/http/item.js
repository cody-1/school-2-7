import instance from "./axios";
import { useUserStore } from '../store/user.js'

const userStore = useUserStore() // 获取用户 store
const token = userStore.token // 获取 token
const headers = {
  Authorization: 'Bearer ' + token, // 添加 Authorization 头部字段
}
const add = (data) => {
    return instance.request({
       url:'api/survey-item/add',
       method:'post',
       headers,
       data
    })
 }
 const all = (params) => {
    return instance.request({
       url:'api/survey-item/all',
       method:'get',
       headers,
       params
       
    })
 }


 const remove = (params) => {
    return instance.request({
       url: 'api/survey-item/delete/'+params.id,
       method: 'get',
       headers,
      
    })
 }
 const update = (data) => {
    return instance.request({
       url:'api/survey-item/edit',
       method:'post',
       headers,
       data
    })
 }
const one = (id) => {
    return instance.request({
       url:'api/survey-item/one/'+id,
    })
 }







export default {
    add,
    all,
    remove,
    update,
    one,
 
 }

