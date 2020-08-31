import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getDashboardReport = req => {
  return {
    one: [
      {
        title: '在营股权基金（支）', count: Random.natural(1, 500), type: 'md-menu'
      },
      {
        title: '在营固收基金（支）', count: Random.natural(1, 300), type: 'md-menu'
      }
    ],
    two: [
      {
        title: '股权基金管理规模（元）', money: Random.float(5000, 99999, 0, 3), type: 'md-menu'
      },
      {
        title: '固收基金管理规模（元）', money: Random.float(5000, 99999, 0, 3), type: 'md-menu'
      }
    ],
    three: [
      {
        title: '在投股权项目（个）', count: Random.natural(1, 500), type: 'md-menu'
      },
      {
        title: '在投固收项目（个）', count: Random.natural(1, 300), type: 'md-menu'
      }
    ],
    four: [
      {
        title: '股权项目在投规模（元）', money: Random.float(5000, 99999, 0, 3), type: 'md-menu'
      },
      {
        title: '固收项目在投规模（元）', money: Random.float(5000, 99999, 0, 3), type: 'md-menu'
      }
    ],
    five: [
      {
        title: '项目预警（个）', count: Random.natural(1, 500), type: 'md-menu'
      },
      {
        title: '红灯项目（个）', count: Random.natural(1, 500), type: 'md-menu'
      }
    ],
    six: [
      {
        title: '黄灯项目（个）', count: Random.natural(1, 500), type: 'md-menu'
      },
      {
        title: '绿灯项目（个）', count: Random.natural(1, 500), type: 'md-menu'
      }
    ]
  }
}

export const getDashboardAffairs = req => {
  let body = JSON.parse(req.body)
  let data = []
  doCustomTimes(body.pageSize, () => {
    data.push(Mock.mock({
      type: '知会',
      title: `${Random.name()}项目`,
      point: '投资一部',
      people: Random.cname(),
      resolvePeople: Random.cname(),
      time: Random.date('yyyy-MM-dd'),
      id: Random.natural()
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

export const getDashboardUser = req => {
  return {
    offerToBuy: Random.float(5000, 999999, 0, 2),
    carry: Random.float(5000, 999999, 0, 2),
    stockRight: Random.float(5000, 999999, 0, 2),
    profit: Random.float(5000, 999999, 0, 2)
  }
}

export const getDashboardUserNotify = req => {
  let body = JSON.parse(req.body)
  let data = []
  doCustomTimes(body.pageSize, () => {
    data.push(Mock.mock({
      title: `${Random.name()}项目`,
      time: Random.date('yyyy-MM-dd'),
      id: Random.natural()
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

export const getDashboardNoticeAndAnnouncement = req => {
  let body = JSON.parse(req.body)
  let data = []
  doCustomTimes(body.pageSize, () => {
    data.push(Mock.mock({
      title: `${Random.name()}公告`,
      time: Random.date('yyyy-MM-dd'),
      id: Random.natural()
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
