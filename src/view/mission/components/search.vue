<template>
  <Row class-name='mt20' :gutter='16'>
    <Col :span='4'>
      <Input :disabled="disabled" v-model="form.progressTitle" clearable placeholder="请输入流程标题" />
    </Col>
    <Col :span='3'>
      <Select clearable label-in-value :disabled="disabled" v-model="form.progressTypeChoose" placeholder='请选择流程类型'>
        <Option v-for="item in progressType" :value="item.label" :key="item.label">{{ item.value }}</Option>
      </Select>
    </Col>
    <Col :span='3'>
      <Select clearable label-in-value :disabled="disabled" v-model="form.progressPointChoose" placeholder='请选择流程节点'>
        <Option v-for="item in progressPoint" :value="item.label" :key="item.value">{{ item.value }}</Option>
      </Select>
    </Col>
    <Col :span='3'>
      <DatePicker :value="form.time" clearable @on-change="_timeChange" :disabled="disabled" type="date" placeholder="请选择日期"></DatePicker>
    </Col>
    <Col :span='3'>
      <Select clearable label-in-value :disabled="disabled" v-model="form.progressPeopleChoose" placeholder='请选择流程发起人'>
        <Option v-for="item in progressPeople" :value="item.label" :key="item.value">{{ item.value }}</Option>
      </Select>
    </Col>
    <Col :span='3' :push='5'>
      <Button :disabled="disabled" @click="_click" type="primary" icon="ios-search">查询</Button>
      <Button :disabled="disabled" @click="_resize" style='margin-left: 20px;' type="info" icon="ios-close-circle-outline">重置</Button>
    </Col>
  </Row>
</template>

<script>
import * as config from '@/config/config'
export default {
  name: 'Search',
  props: ['outClick', 'disabled'],
  data: () => ({
    form: {
      progressTitle: '',
      progressTypeChoose: '',
      progressPointChoose: '',
      progressPeopleChoose: '',
      time: ''
    },
    progressType: config.progressType,
    progressPoint: config.progressPoint,
    progressPeople: config.progressPeople
  }),
  methods: {
    _timeChange (time) {
      this.form.time = time
    },
    _click () {
      let temp = this.form
      for (let v in temp) {
        if (temp.hasOwnProperty(v) && !temp[v]) {
          delete temp[v]
        }
      }
      this.outClick(temp)
      this.$emit('click', temp)
    },
    _resize () {
      this.form = {
        progressTitle: '',
        progressTypeChoose: '',
        progressPointChoose: '',
        progressPeopleChoose: '',
        time: ''
      }
    }
  }
}
</script>
