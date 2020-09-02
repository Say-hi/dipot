<template>
  <Row class-name='mt20' :gutter='16'>
    <Col :span='4'>
      <Input :disabled='disabled' v-model='form.progressTitle' clearable placeholder='输入基金全称/简称' />
    </Col>
    <Col :span='4'>
      <Input :disabled='disabled' v-model='form.progressPeopleChoose' clearable placeholder='输入管理人' />
    </Col>
    <Col :span='3'>
      <Select clearable label-in-value :disabled='disabled' v-model='form.progressTypeChoose' placeholder='基金状态'>
        <Option v-for='item in progressType' :value='item.label' :key='item.label'>{{ item.value }}</Option>
      </Select>
    </Col>
    <Col :span='3'>
      <Select clearable label-in-value :disabled='disabled' v-model='form.progressPointChoose' placeholder='股权基金'>
        <Option v-for='item in progressPoint' :value='item.label' :key='item.value'>{{ item.value }}</Option>
      </Select>
    </Col>
    <Col :span='4' :push='6'>
      <Button :disabled='disabled' @click='_click' type='primary' icon='ios-search'>查询</Button>
      <Button :disabled='disabled' @click='_resize' style='margin-left: 20px;' type='info' icon='ios-close-circle-outline'>重置</Button>
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
