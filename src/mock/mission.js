import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getMissionData = req => {
  let body = JSON.parse(req.body)
  let data = []
  doCustomTimes(10, () => {
    data.push(Mock.mock({
      mission_type: '知会',
      title: `${Random.name()}项目认购`,
      progress_type: '投资股权确认',
      point: '分管副总审核',
      people: Random.cname(),
      start_time: Random.date('yyyy-MM-dd HH:mm:ss'),
      finish_time: Random.date('yyyy-MM-dd HH:mm:ss'),
      point_people: Random.cname(),
      progress_status: '未结束',
      id: Random.increment()
    }))
  })
  return {
    lists: data,
    totalPage: Random.natural(1, 10),
    totalNum: Random.natural(1, 100),
    pageNum: body.pageNum,
    pageSize: body.pageSize
  }
}

export const getMissionProgressDetail = req => {
  let body = JSON.parse(req.body)
  let data = []
  doCustomTimes(10, () => {
    data.push(Mock.mock({
      mission_type: '知会',
      point: '分管副总审核',
      'result|1': [
        '同意',
        '退回',
        '否决'
      ],
      content: '@cparagraph(1, 2)',
      start_time: Random.date('yyyy-MM-dd HH:mm:ss'),
      finish_time: Random.date('yyyy-MM-dd HH:mm:ss'),
      point_people: Random.cname(),
      id: '@id'
    }))
  })
  return {
    lists: data,
    totalPage: Random.natural(1, 10),
    totalNum: Random.natural(1, 100),
    pageNum: body.pageNum,
    pageSize: body.pageSize
  }
}
