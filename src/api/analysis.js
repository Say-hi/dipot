import axios from '@/libs/api.request'

export const getAliveAnalysis = (data) => {
  return axios.request({
    url: '/stockRight/analysis/alivedata',
    method: 'post',
    data
  })
}

export const getProject = (data) => {
  return axios.request({
    url: '/stockRight/analysis/project',
    method: 'post',
    data
  })
}

export const getDistributionValue = (data) => {
  return axios.request({
    url: '/stockRight/analysis/distribution',
    method: 'post',
    data
  })
}
