import axios from 'axios';
let base = 'http://localhost:8080';
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const roleTree = (params,fun) => { return axios.get(`${base}/static/json/menusModule.json`, params).then(res => fun(res.data)); };
