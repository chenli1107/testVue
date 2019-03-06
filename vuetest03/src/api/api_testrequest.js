
import request from '@/api/requestUtil'
 
export function cfg(params) {
  return request({
    url: '/cfg',
    method: 'get',
    params
  })
}
