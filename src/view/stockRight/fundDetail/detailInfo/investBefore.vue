<template>
  <div>
    <Row class-name='mt20' :gutter='16'>
      <Col :span='4'>
        <Input :disabled='disabled' v-model='form.progressTitle' clearable placeholder='请输入流程标题' />
      </Col>
      <Col :span='3'>
        <Select clearable label-in-value :disabled='disabled' v-model='form.progressPointChoose' placeholder='请选择流程节点'>
          <Option v-for='item in progressPoint' :value='item.label' :key='item.value'>{{ item.value }}</Option>
        </Select>
      </Col>
      <Col :span='4'>
        <Button :disabled='disabled' @click='_click' type='primary' icon='ios-search'>查询</Button>
        <Button :disabled='disabled' @click='_resize' style='margin-left: 20px;' type='info' icon='ios-close-circle-outline'>重置</Button>
      </Col>
    </Row>
    <page-tab
      v-model='disabled'
      :url='url'
      :filter-data='form'
      @listData='_listData'
      ref='pageTab'
      class='mt10'
    >
      <Table
        v-if='pageData.lists'
        border
        stripe
        no-data-text='暂无相关数据'
        :columns='columns'
        :data='pageData.lists'
        class='mt10'
      ></Table>
    </page-tab>
  </div>
</template>

<script>
import * as config from '@/config/config'
export default {
  name: 'InvestBefore',
  data () {
    return {
      url: '/getMissionData',
      form: {
        progressTitle: '',
        progressTypeChoose: '',
        progressPointChoose: '',
        progressPeopleChoose: '',
        time: ''
      },
      progressType: config.progressType,
      progressPoint: config.progressPoint,
      progressPeople: config.progressPeople,
      columns: [
        {
          type: 'index',
          width: 70,
          title: '序号',
          align: 'center'
        },
        {
          title: '任务类型',
          key: 'mission_type',
          width: 100,
          align: 'center'
        },
        {
          title: '流程标题',
          key: 'title',
          width: 250,
          resizable: true
        },
        {
          title: '流程类型',
          key: 'progress_type'
        },
        {
          title: '办理节点',
          key: 'point'
        },
        {
          title: '发起人',
          key: 'people'
        },
        {
          title: '接收时间',
          key: 'start_time',
          width: 170
        },
        {
          title: '完成时间',
          key: 'finish_time',
          width: 170
        },
        {
          title: '当前流程办理人',
          key: 'point_people'
        },
        {
          title: '流程状态',
          key: 'progress_status'
        },
        {
          title: '操作',
          slot: 'action',
          width: 80,
          align: 'center'
        }
      ],
      pageData: '',
      disabled: true
    }
  },
  methods: {
    _resize () {
      this.form = {
        progressTitle: '',
        progressTypeChoose: '',
        progressPointChoose: '',
        progressPeopleChoose: '',
        time: ''
      }
    },
    _click () {
      this.$nextTick(() => {
        this.$refs.pageTab.init()
      })
    },
    _listData (data) {
      this.pageData = data
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  }
}
</script>
