import axios from 'axios'
 
const instance = axios.create({
  baseURL: 'http://localhost:8888', // api��base_url
  timeout: 10000 // ����ʱʱ��
  // transformRequest: data => qs.stringify(data) //
})
// request������
instance.interceptors.request.use(
  e => {
    e.params = e.params || {}
    e.headers = e.headers || {}
    //set Ĭ��ֵ
    return e
  },
  error => ({ status: 0, msg: error.message })
)
// respone������
instance.interceptors.response.use(
  response => {
    const resp = response.data
    if (response.status === 200) {
      return resp
    }
    return resp
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default instance