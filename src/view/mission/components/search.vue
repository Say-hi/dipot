<template>
  <Row class-name='mt20' gutter='10'>
    <Col :span='4'>
      <Input v-model="progressTitle" placeholder="请输入流程标题" />
    </Col>
    <Col :span='3'>
      <Select v-model="progressTypeChoose" placeholder='请选择流程类型'>
        <Option v-for="item in progressType" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Col>
    <Col :span='3'>
      <Select v-model="progressTypeChoose" placeholder='请选择流程节点'>
        <Option v-for="item in progressType" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Col>
    <Col :span='3'>
      <DatePicker type="date" placeholder="请选择日期"></DatePicker>
    </Col>
    <Col :span='3'>
      <Select v-model="progressTypeChoose" placeholder='请选择流程发起人'>
        <Option v-for="item in progressType" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Col>
    <Col :span='4' :offset='4'>
      <Button type="primary" icon="ios-search">查询</Button>
      <Button style='margin-left: 20px;' type="info" icon="ios-close-circle-outline">重置</Button>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      progressTitle: '',
      progressTypeChoose: '',
      progressType: [
        {
          title: '全部',
          label: 1
        },
        {
          title: '已通过',
          label: 2
        },
        {
          title: '未提交',
          label: 3
        }
      ]
    }
  }
}
</script>
