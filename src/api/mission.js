import axios from '@/libs/api.request'

export const getPageData = (url, data) => {
  return axios.request({
    url,
    method: 'post',
    data
  })
}
