import api from './apiUrl'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}
// 用户名称 get 方法
export function getAbout(params) {
  return request({
    url: api.getAuout,
    method: 'get',
    params,
    hideloading: true
  })
}
// 联系我们
export function aboutUs(params) {
  return request({
    url: api.aboutUs,
    method: 'get',
    params,
    hideloading: true
  })
}
// 案例展示
export function getBuildFlim(params) {
  return request({
    url: api.getBuildFlim,
    method: 'get',
    params,
    hideloading: true
  })
}
// 案例分类

export function getFlimClass(params) {
  return request({
    url: api.getFlimClass,
    method: 'get',
    params,
    hideloading: true
  })
}

export function getShare(data) {
  return request({
    url: api.getShare,
    method: 'post',
    data,
  })
}
