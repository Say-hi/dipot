import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTabData = () => ({
  stockRightCount: Random.natural(1, 100),
  stockRightMoney: Random.float(1, 999999, 0, 2),
  stockRightPay: Random.float(1, 999999, 0, 2),
  projectCount: Random.natural(1, 100),
  projectCountMoney: Random.float(1, 999999, 0, 2),
  stockRightProfit: Random.float(1, 999999, 0, 2)
})

export const getAliveAnalysis = () => {
  let data = []
  doCustomTimes(5, () => {
    data.push(Mock.mock({
      name: '@name',
      'scale|1-100000': 100000,
      'subscription|1-100000': 100000,
      'paidIn|1-100000': 100000,
      'out|1-100000': 100000,
      'count|1-100': 100,
      'useMoney|1-100000': 100000,
      id: '@id'
    }))
  })
  return data
}

export const getProject = () => (
  [
    {
      outing: Random.natural(1, 1000),
      out: Random.natural(1, 1000),
      name: '投资一部',
      in: Random.natural(1, 1000),
      set: Random.natural(1, 1000),
      meeting: Random.natural(1, 1000),
      sign: Random.natural(1, 1000),
      buy: Random.natural(1, 1000),
      other: Random.natural(1, 1000)
    },
    {
      name: '投资二部',
      in: Random.natural(1, 1000),
      set: Random.natural(1, 1000),
      meeting: Random.natural(1, 1000),
      sign: Random.natural(1, 1000),
      buy: Random.natural(1, 1000),
      outing: Random.natural(1, 1000),
      out: Random.natural(1, 1000),
      other: Random.natural(1, 1000)
    },
    {
      name: '投资三部',
      in: Random.natural(1, 1000),
      set: Random.natural(1, 1000),
      meeting: Random.natural(1, 1000),
      sign: Random.natural(1, 1000),
      buy: Random.natural(1, 1000),
      outing: Random.natural(1, 1000),
      out: Random.natural(1, 1000),
      other: Random.natural(1, 1000)
    }
  ]
)

export const getDistributionValue = () => {
  let data = []
  doCustomTimes(10, () => {
    data.push(Mock.mock({
      name: '@name',
      'plate|1-100000': 100000,
      'industry|1-100000': 100000,
      id: '@id'
    }))
  })
  return data
}

export const getDepositoryTab = () => {
  let data = []
  doCustomTimes(10, () => {
    data.push(Mock.mock({
      'title|1': [
        '在营基金',
        '设立中基金',
        '已中止基金',
        '已注销基金',
        '已划转基金',
        '全部基金'
      ],
      count: Random.natural(1, 100),
      type: '@id'
    }))
  })
  return data
}

export const getDepositoryData = (req) => {
  let body = JSON.parse(req.body)
  let data = []
  doCustomTimes(body.pageSize, () => {
    data.push(Mock.mock({
      name: '@name',
      fullName: `@csentence(5, 10)基金`,
      'overallScope|1-100000': 1,
      'realScope|1-100000': 1,
      'buyCount|1-100': 1,
      'buyScope|1-100000': 1,
      manager: '@cname',
      'status|1': [
        '在营',
        '已注销',
        '已划转',
        '设立中',
        '已中止'
      ],
      startTime: '@date',
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

export const getDynamic = () => {
  let data = []
  function makeList () {
    let list = []
    doCustomTimes(Random.natural(1, 5), () => {
      list.push(Mock.mock({
        id: '@id',
        time: '@time',
        avatar: Random.dataImage('50x50', '头像'),
        name: '@cname',
        title: '@ctitle',
        content: '@cparagraph(1, 10)'
      }))
    })
    return list
  }
  doCustomTimes(10, () => {
    data.push(Mock.mock({
      id: '@id',
      time: '@date',
      list: makeList()
    }))
  })
  return data
}
