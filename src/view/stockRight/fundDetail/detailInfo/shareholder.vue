<template>
  <div>
    <h3>股东信息</h3>
    <div>
      <Table
        border
        stripe
        width='100%'
        show-summary
        no-data-text='暂无相关数据'
        :columns='columns'
        :data='pageData'
        class='mt10'
      >]</Table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shareholder',
  data () {
    return {
      columns: [
        {
          type: 'index',
          width: 70,
          title: '序号',
          align: 'center'
        },
        {
          title: '股东名称',
          key: 'name',
          minWidth: 200
        },
        {
          title: '出资额(元，人民币)',
          key: 'money'
        },
        {
          title: '占注册资本比例',
          key: 'percent'
        }
      ],
      pageData: [
        {
          name: '国投高科技投资有限公司',
          money: 50000,
          percent: 11.11
        },
        {
          name: '国投高科技投资有限公司',
          money: 50000,
          percent: 12.12
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
/deep/ .ivu-table-overflowX {
 overflow-x: hidden;
}
</style>
