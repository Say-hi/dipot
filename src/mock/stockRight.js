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
