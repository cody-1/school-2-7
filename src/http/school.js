import instance from "./axios";

import { useUserStore } from '../store/user.js'

const userStore = useUserStore() // 获取用户 store
const token = userStore.token // 获取 token
const headers = {
  Authorization: 'Bearer ' + token, // 添加 Authorization 头部字段
}
const add = (data) => {
    return instance.request({
       url:'api/school/add',
       method:'post',
       headers,
       data
    })
 }
 const all = (params) => {
    return instance.request({
       url:'api/school/all',
       method:'get',
       headers,
       params
    })
 }
 const checkName = (data) => {
    return instance.request({
       url:'api/school/checkname',
       method:'get',
       params:data
    })
 }
 const getCommunitiesByColums = (data) => {
    return instance.request({
       url:'api/school/colums',
       method:'get',
       params:data
    })
 }
 const remove = (data) => {
    return instance.request({
       url: 'api/school/delete',
       method: 'get',
       params: data
    })
 }
 const update = (data) => {
    return instance.request({
       url:'api/school/edit',
       method:'post',
       data
    })
 }
 const query = (data) => {
    return instance.request({
       url:'api/school/enable',
       method:'get',
       params:data
    })
 }
const one = (params) => {
    return instance.request({
       url:'api/school/one',
       method:'get',
       params
    })
 }
 const getSchoolsByRegion = (data) => {
    return instance.request({
       url:'api/school/search',
       method:'post',
       data
    })
 }






export default {
    add,
    all,
    checkName,
    getCommunitiesByColums,
    remove,
    update,
    query,
    one,
    getSchoolsByRegion
 }

