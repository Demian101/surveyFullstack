// import { AxiosAPI } from "./base";
import axios from 'axios';


export const AxiosAPI = axios.create({})

const BASE_URL = 'http://localhost:1337/api';

// process.env.REACT_APP_API_URL = 
console.log("BASE_URL",`${BASE_URL}/posts`)

export async function fetchWords() {
  try{
    const response =  await AxiosAPI.get(`${BASE_URL}/words`,);
    return response.data;
  }
  catch(err) {  
      new Promise((resolve,reject) => {
      return Promise.reject(err); 
    })
  }
}

export async function addWord(data)  {
  console.log('post invoke',data)
  try{
    return await AxiosAPI.post(`${BASE_URL}/words`, data , {
      headers:{
        'Content-Type':'multipart/form-data',  // 改成 Json 格式 
      }}) 
  }
  catch(err) {  
    new Promise((resolve,reject) => {
      console.log('err',err)
      return Promise.reject(err); 
    })
  }
}