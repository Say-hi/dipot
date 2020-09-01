import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    meta: {
      icon: 'logo-buffer',
      title: '快捷菜单'
    },
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          icon: 'md-home',
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/dashboard/index')
      },
      {
        path: '/todo',
        name: '_todo',
        redirect: 'worker/todo',
        meta: {
          icon: 'md-funnel',
          title: '待办任务',
          notCache: false
        }
        // component: () => import('@/view/mission/index.vue')
      },
      {
        path: 'equityFund',
        name: 'equityFund',
        meta: {
          icon: 'md-funnel',
          title: '股权基金',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'equityProect',
        name: 'equityProect',
        meta: {
          icon: 'md-funnel',
          title: '股权项目',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'fixedIncomeFund',
        name: 'fixedIncomeFund',
        meta: {
          icon: 'md-funnel',
          title: '固收基金',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'fixedIncomeProject',
        name: 'fixedIncomeProject',
        meta: {
          icon: 'md-funnel',
          title: '固收项目',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'projectRisk',
        name: 'projectRisk',
        meta: {
          icon: 'md-funnel',
          title: '项目风险',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'mineRights',
        name: 'mineRights',
        meta: {
          icon: 'md-funnel',
          title: '我的权益',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      }
    ]
  },
  {
    path: '/worker',
    name: 'worker',
    meta: {
      icon: 'md-menu',
      title: '工作台'
    },
    component: Main,
    children: [
      {
        path: 'todo',
        name: 'todo',
        meta: {
          icon: 'md-funnel',
          title: '待办任务',
          notCache: false
        },
        component: () => import('@/view/mission/index.vue')
      },
      // {
      //   path: 'doNoFinishMssion',
      //   name: 'doNoFinishMssion',
      //   meta: {
      //     icon: 'md-funnel',
      //     title: '已办未完结任务',
      //     notCache: true
      //   },
      //   component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      // },
      // {
      //   path: 'finishMission',
      //   name: 'finishMission',
      //   meta: {
      //     icon: 'md-funnel',
      //     title: '已完结任务',
      //     notCache: true
      //   },
      //   component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      // },
      // {
      //   path: 'allMission',
      //   name: 'allMission',
      //   meta: {
      //     icon: 'md-funnel',
      //     title: '全部任务',
      //     notCache: true
      //   },
      //   component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      // },
      {
        path: 'progressdetail/:id',
        name: 'progressDetail',
        meta: {
          hideInMenu: true,
          notCache: true,
          title: '流程详情'
        },
        component: () => import('@/view/mission/progressDetail.vue')
      }
    ]
  },
  {
    path: '/stockRight',
    name: 'stockRight',
    meta: {
      icon: 'md-menu',
      title: '股权业务'
    },
    component: Main,
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        meta: {
          icon: 'md-funnel',
          title: '业务数据分析',
          notCache: true
        },
        component: () => import('@/view/stockRight/analysis.vue')
      },
      {
        path: 'fundBank',
        name: 'fundBank',
        meta: {
          icon: 'md-funnel',
          title: '股权基金库',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'projectBank',
        name: 'projectBank',
        meta: {
          icon: 'md-funnel',
          title: '股权项目库',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'report',
        name: 'report',
        meta: {
          icon: 'md-funnel',
          title: '股权业务报告',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'file',
        name: 'file',
        meta: {
          icon: 'md-funnel',
          title: '股权业务文件',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'manuscript',
        name: 'manuscript',
        meta: {
          icon: 'md-funnel',
          title: '股权工作底稿',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'flowPath',
        name: 'flowPath',
        meta: {
          icon: 'md-funnel',
          title: '股权业务流程',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      }
    ]
  },
  {
    path: '/fixedIncomeMission',
    name: 'fixedIncomeMission',
    meta: {
      icon: 'md-menu',
      title: '固收业务'
    },
    component: Main,
    children: [
      {
        path: 'allOrder',
        name: 'allOrder',
        meta: {
          icon: 'md-funnel',
          title: '全部订单',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'mineOrder',
        name: 'mineOrder',
        meta: {
          icon: 'md-funnel',
          title: '我的订单',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'subordinateOrder',
        name: 'subordinateOrder',
        meta: {
          icon: 'md-funnel',
          title: '下属订单',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'mineCooperation',
        name: 'mineCooperation',
        meta: {
          icon: 'md-funnel',
          title: '我协作的',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'subordinateCooperation',
        name: 'subordinateCooperation',
        meta: {
          icon: 'md-funnel',
          title: '下属协作',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'addOrder',
        name: 'addOrder',
        meta: {
          icon: 'md-funnel',
          title: '添加订单',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      }
    ]
  },
  {
    path: '/riskControlManagement',
    name: 'riskControlManagement',
    meta: {
      icon: 'md-menu',
      title: '风控管理'
    },
    component: Main,
    children: [
      {
        path: 'collectionOfPaymentPlan',
        name: 'collectionOfPaymentPlan',
        meta: {
          icon: 'md-funnel',
          title: '回款计划',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'collectionOfPayment',
        name: 'collectionOfPayment',
        meta: {
          icon: 'md-funnel',
          title: '回款管理',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'invoice',
        name: 'invoice',
        meta: {
          icon: 'md-funnel',
          title: '发票管理',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'expenses',
        name: 'expenses',
        meta: {
          icon: 'md-funnel',
          title: '费用管理',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'reimburse',
        name: 'reimburse',
        meta: {
          icon: 'md-funnel',
          title: '报销管理',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      }
    ]
  },
  {
    path: '/postInvestmentManagement',
    name: 'postInvestmentManagement',
    meta: {
      icon: 'md-menu',
      title: '投后管理'
    },
    component: Main,
    children: [
      {
        path: 'approveOrder',
        name: 'approveOrder',
        meta: {
          icon: 'md-funnel',
          title: '订单审批',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'approveCollectionOfPayment',
        name: 'approveCollectionOfPayment',
        meta: {
          icon: 'md-funnel',
          title: '回款审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveRefund',
        name: 'approveRefund',
        meta: {
          icon: 'md-funnel',
          title: '退款审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveReimburse',
        name: 'approveReimburse',
        meta: {
          icon: 'md-funnel',
          title: '报销审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveLeave',
        name: 'approveLeave',
        meta: {
          icon: 'md-funnel',
          title: '请假审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveTravelling',
        name: 'approveTravelling',
        meta: {
          icon: 'md-funnel',
          title: '出差审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveBorrowing',
        name: 'approveBorrowing',
        meta: {
          icon: 'md-funnel',
          title: '借款审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveAsk',
        name: 'approveAsk',
        meta: {
          icon: 'md-funnel',
          title: '请示审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'approveVisiting',
        name: 'approveVisiting',
        meta: {
          icon: 'md-funnel',
          title: '拜访审批',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      }
    ]
  },
  {
    path: '/financeManagement',
    name: 'financeManagement',
    meta: {
      icon: 'md-menu',
      title: '财务管理',
      showAlways: true,
      maxWidth: '150px'
    },
    component: Main,
    children: [
      {
        path: 'progressSale',
        name: 'progressSale',
        meta: {
          icon: 'md-funnel',
          title: '销售过程统计',
          showAlways: true
        },
        component: parentView,
        children: [
          {
            path: 'forecast',
            name: 'forecast',
            meta: {
              icon: 'md-funnel',
              title: '销售预测分析'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'funnel',
            name: 'funnel',
            meta: {
              icon: 'md-funnel',
              title: '销售漏斗分析'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'newMissionCollect',
            name: 'newMissionCollect',
            meta: {
              icon: 'md-funnel',
              title: '业务新增汇总'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'followRecord',
            name: 'followRecord',
            meta: {
              icon: 'md-funnel',
              title: '跟进记录汇总'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'synthesis',
            name: 'synthesis',
            meta: {
              icon: 'md-funnel',
              title: '业务综合统计'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'grow',
            name: 'grow',
            meta: {
              icon: 'md-funnel',
              title: '业务增长统计'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          }
        ]
      },
      {
        path: 'achievementSale',
        name: 'achievementSale',
        meta: {
          icon: 'md-funnel',
          title: '销售业绩统计',
          showAlways: true
        },
        component: parentView,
        children: [
          {
            path: 'targetProgress',
            name: 'targetProgress',
            meta: {
              icon: 'md-funnel',
              title: '业绩目标完成度'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'businessDealCollect',
            name: 'businessDealCollect',
            meta: {
              icon: 'md-funnel',
              title: '成交商机汇总'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'collectionOfPaymentPlanCollect',
            name: 'collectionOfPaymentPlanCollect',
            meta: {
              icon: 'md-funnel',
              title: '回款计划汇总'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'productSaleCollect',
            name: 'productSaleCollect',
            meta: {
              icon: 'md-funnel',
              title: '产品销量汇总'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'financeAnalyze',
            name: 'financeAnalyze',
            meta: {
              icon: 'md-funnel',
              title: '财务数据分析'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          }
        ]
      },
      {
        path: 'saleRank',
        name: 'saleRank',
        meta: {
          icon: 'md-funnel',
          title: '销售排名统计',
          showAlways: true
        },
        component: parentView,
        children: [
          {
            path: 'targetProgressRank',
            name: 'targetProgressRank',
            meta: {
              icon: 'md-funnel',
              title: '业绩完成度排名'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'businessNewRank',
            name: 'businessNewRank',
            meta: {
              icon: 'md-funnel',
              title: '业务新增排名'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'bussinessDealRank',
            name: 'bussinessDealRank',
            meta: {
              icon: 'md-funnel',
              title: '成交数据排名'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'collectionOfPaymentRank',
            name: 'collectionOfPaymentRank',
            meta: {
              icon: 'md-funnel',
              title: '回款数据排名'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'conversionRateRank',
            name: 'conversionRateRank',
            meta: {
              icon: 'md-funnel',
              title: '转化率排名'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/synthesisManagement',
    name: 'synthesisManagement',
    meta: {
      icon: 'md-menu',
      title: '综合管理'
    },
    component: Main,
    children: [
      {
        path: 'ticketAll',
        name: 'ticketAll',
        meta: {
          icon: 'md-funnel',
          title: '全部工单',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'ticketMine',
        name: 'ticketMine',
        meta: {
          icon: 'md-funnel',
          title: '我发起的',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'ticketResolve',
        name: 'ticketResolve',
        meta: {
          icon: 'md-funnel',
          title: '我处理的',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'ticketCC',
        name: 'ticketCC',
        meta: {
          icon: 'md-funnel',
          title: '抄送给我的',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      }
    ]
  },
  {
    path: '/customerManagement',
    name: 'customerManagement',
    meta: {
      icon: 'md-menu',
      title: '客户管理'
    },
    component: Main,
    children: [
      {
        path: 'ticketAll',
        name: 'ticketAll',
        meta: {
          icon: 'md-funnel',
          title: '潜在客户库',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'ticketMine',
        name: 'ticketMine',
        meta: {
          icon: 'md-funnel',
          title: '已投客户库',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      },
      {
        path: 'ticketResolve',
        name: 'ticketResolve',
        meta: {
          icon: 'md-funnel',
          title: '合作客户库',
          notCache: true
        },
        component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
      }
    ]
  }
]
