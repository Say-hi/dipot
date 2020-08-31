import axios from '@/libs/api.request'

export const getReportData = () => {
  return axios.request({
    url: '/dashboard/report',
    method: 'post'
  })
}

export const getUserData = () => {
  return axios.request({
    url: '/dashboard/user',
    method: 'post'
  })
}
