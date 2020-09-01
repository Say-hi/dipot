<template>
  <div class='p10'>
    <h2>在营基金分析</h2>
    <div class='mt10'>
      <Table
        :columns='columns'
        :data='pageData'
        :loading='loading'
        no-data-text='暂无相关数据'
        size='small'
      >
        <template #scale='{ row }'>
          <div class='bar' :style='_caculate(row.scale, "scale")'></div>
          <div>{{ row.scale }}</div>
        </template>
        <template #subscription='{ row }'>
          <div class='bar' :style='_caculate(row.subscription, "subscription")'></div>
          <div>{{ row.subscription }}</div>
        </template>
        <template #paidIn='{ row }'>
          <div class='bar' :style='_caculate(row.paidIn, "paidIn")'></div>
          <div>{{ row.paidIn }}</div>
        </template>
        <template #out='{ row }'>
          <div class='bar' :style='_caculate(row.out, "out")'></div>
          <div>{{ row.out }}</div>
        </template>
        <template #count='{ row }'>
          <div class='bar' :style='_caculate(row.count, "count")'></div>
          <div>{{ row.count }}</div>
        </template>
        <template #useMoney='{ row }'>
          <div class='bar' :style='_caculate(row.useMoney, "useMoney")'></div>
          <div>{{ row.useMoney }}</div>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import { getAliveAnalysis } from '_api/analysis'
export default {
  name: 'aliveFundAnalysis',
  data () {
    return {
      columns: [
        {
          title: '基金简称',
          key: 'name'
        },
        {
          title: '总规模(万元)',
          key: 'scale',
          slot: 'scale',
          color: '#0094ff'
        },
        {
          title: '认缴规模(万元)',
          key: 'subscription',
          slot: 'subscription',
          color: '#ff0'
        },
        {
          title: '实缴规模(万元)',
          key: 'paidIn',
          slot: 'paidIn',
          color: 'purple'
        },
        {
          title: '对外募集规模(万元)',
          key: 'out',
          slot: 'out',
          color: 'orange'
        },
        {
          title: '在投项目数(个)',
          key: 'count',
          slot: 'count',
          color: 'blue'
        },
        {
          title: '在投项目资金规模(万元)',
          key: 'useMoney',
          slot: 'useMoney',
          color: 'pink'
        }
      ],
      pageData: [],
      loading: true
    }
  },
  methods: {
    _caculate (row, type) {
      let all = this.pageData.reduce((total, item) => total + +item[type], 0)
      return {
        width: (row / all * 100).toFixed(2) + '%',
        background: this.columns.filter(item => type === item.slot)[0].color
      }
    }
  },
  mounted () {
    getAliveAnalysis().then(res => {
      this.pageData = res.data
      this.loading = false
    })
  }
}
</script>

<style lang='less' scoped>
/deep/ .ivu-table-cell-slot {
  padding: 10px 0;
}
.bar {
  width: 0;
  background: #fff;
  transition: all 1s;
  height: 20px;
}
</style>
