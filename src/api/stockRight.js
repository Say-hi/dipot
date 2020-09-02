import axios from '@/libs/api.request'

export const getTabData = () => {
  return axios.request({
    url: '/stockright/tab',
    method: 'post'
  })
}

export const getDepositoryTab = () => {
  return axios.request({
    url: '/stockright/depository/tab',
    method: 'post'
  })
}
