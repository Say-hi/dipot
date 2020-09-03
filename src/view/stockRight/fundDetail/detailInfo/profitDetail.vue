<template>
  <div>
    <h3>收益成本明细</h3>
    <Table
      :columns="columns14"
      :data="data5"
      :span-method="handleSpan"
      class='mt10'
      border
    ></Table>
  </div>
</template>

<script>
export default {
  name: 'ProfitDetail',
  data () {
    return {
      columns14: [
        {
          title: 'Date',
          key: 'date'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data5: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSpan ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return [1, 2]
      } else if (rowIndex === 0 && columnIndex === 1) {
        return [0, 0]
      }
      if (rowIndex === 2 && columnIndex === 0) {
        return {
          rowspan: 2,
          colspan: 1
        }
      } else if (rowIndex === 3 && columnIndex === 0) {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
// /deep/ *::-webkit-scrollbar {
//   width: 0px;
//   height: 0px;
//   -moz-appearance: none !important;
//   background: rgba(0,255,0,0) !important;
//   -ms-scroll-chaining: chained;
//   -ms-overflow-style: none;
//   -ms-content-zooming: zoom;
//   -ms-scroll-rails: none;
//   -ms-content-zoom-limit-min: 100%;
//   -ms-content-zoom-limit-max: 500%;
//   -ms-scroll-snap-type: proximity;
//   -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
//   -ms-overflow-style: none;
//   overflow: auto;
// }
</style>
