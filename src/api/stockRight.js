import axios from '@/libs/api.request'

export const getTabData = () => {
  return axios.request({
    url: '/stockright/tab',
    method: 'post'
  })
}
