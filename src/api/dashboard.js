import axios from '@/libs/api.request'

export const getReportData = () => {
  return axios.request({
    url: '/dashboard/report',
    method: 'post'
  })
}
