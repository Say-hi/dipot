import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData } from './data'
import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user'
import * as mission from './mission.js'
import * as dashboard from './dashboard.js'
import * as stockRight from './stockRight.js'
// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)
Mock.mock(/\/save_error_logger/, 'success')
Mock.mock(/\/image\/upload/, uploadImage)
Mock.mock(/\/message\/init/, getMessageInit)
Mock.mock(/\/message\/content/, getContentByMsgId)
Mock.mock(/\/message\/has_read/, hasRead)
Mock.mock(/\/message\/remove_readed/, removeReaded)
Mock.mock(/\/message\/restore/, restoreTrash)
Mock.mock(/\/message\/count/, messageCount)
Mock.mock(/\/get_org_data/, getOrgData)
Mock.mock(/\/get_tree_select_data/, getTreeSelectData)

Mock.mock(/\/getMissionData/, mission.getMissionData)
Mock.mock(/\/mission\/progressDetail/, mission.getMissionProgressDetail)

Mock.mock(/\/stockright\/tab/, stockRight.getTabData)
Mock.mock(/\/stockRight\/analysis\/alivedata/, stockRight.getAliveAnalysis)
Mock.mock(/\/stockRight\/analysis\/project/, stockRight.getProject)
Mock.mock(/\/stockRight\/analysis\/distribution/, stockRight.getDistributionValue)
Mock.mock(/\/stockright\/depository\/tab/, stockRight.getDepositoryTab)
Mock.mock(/\/getDepositoryData/, stockRight.getDepositoryData)

Mock.mock(/\/dashboard\/report/, dashboard.getDashboardReport)
Mock.mock(/\/dashboard\/affairs/, dashboard.getDashboardAffairs)
Mock.mock(/\/dashboard\/user/, dashboard.getDashboardUser)
Mock.mock(/\/dashboard\/UserNotify/, dashboard.getDashboardUserNotify)
Mock.mock(/\/dashboard\/NoticeAndAnnouncement/, dashboard.getDashboardNoticeAndAnnouncement)
Mock.mock(/\/dashboard\/alarm/, dashboard.getDashboardAlarm)

export default Mock
