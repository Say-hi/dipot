import Mock from 'mockjs'
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
