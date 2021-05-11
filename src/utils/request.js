import axios from 'axios'
export function request(config){
  const ins=axios.create({
    baseURL:'http://localhost:7111/wangyiyun'
  })
  return ins(config)
}

