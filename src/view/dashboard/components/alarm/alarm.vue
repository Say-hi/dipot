<template>
  <div>
    <wrapper title='项目预警'>
      <AlarmTab
        @tabClick='_tabClick'
      />
      <page-tab
        :url='url'
        :size='5'
        :filter-data='filterData'
        @listData='_listData'
        pageControl='simple'
        ref='pageTab'
      >
        <div v-if='!pageData' style='height: 80px;'></div>
        <Table
          v-if='pageData.lists'
          :columns='columns'
          :data='pageData.lists'
          no-data-text='暂无相关数据'
          size='small'
        >
          <template
            #status='{ row }'
          >
            <Icon :size='22' type='ios-warning' :color='statusColor(row.status)' />
          </template>
          <template
            #action='{ index }'
          >
              <Button
                type='primary'
                size='small'
                style='margin-right: 5px'
                @click='_show(index)'
              >查看</Button>
          </template>
        </Table>
      </page-tab>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from '../wrapper'
import AlarmTab from './AlarmTab'
export default {
  name: 'Alarm',
  components: {
    Wrapper,
    AlarmTab
  },
  data () {
    return {
      url: '/dashboard/alarm',
      filterData: {
        c: 1
      },
      columns: [
        {
          title: '预警状态',
          key: 'status',
          slot: 'status',
          width: 60,
          align: 'center'
        },
        {
          title: '项目名称',
          key: 'title',
          width: 170
        },
        {
          title: '部门',
          key: 'point',
          width: 90
        },
        {
          title: '处理人',
          key: 'people'
        },
        {
          title: '更新时间',
          key: 'time'
        },
        {
          title: '操作',
          slot: 'action',
          width: 80,
          align: 'center'
        }
      ],
      pageData: ''
    }
  },
  methods: {
    _listData (data) {
      this.pageData = data
    },
    _tabClick (index) {
      this.filterData.filterData = index
      this.$refs.pageTab.init()
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  },
  computed: {
    statusColor (status) {
      return function (status) {
        let color = '#000'
        switch (status) {
          case 1:
            color = '#f00'
            break
          case 2:
            color = '#ff0'
            break
          case 3:
            color = '#0094ff'
            break
          default:
        }
        return color
      }
    }
  }
}
</script>
