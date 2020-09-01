import axios from '@/libs/api.request'

export const getAliveAnalysis = (data) => {
  return axios.request({
    url: '/stockRight/analysis/alivedata',
    method: 'post',
    data
  })
}
