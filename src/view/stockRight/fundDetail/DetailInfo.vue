<template>
  <div>
    <Tabs v-model='componentName'>
      <TabPane label="基金概况" name="guide"></TabPane>
      <TabPane :label="label" name="dynamic"></TabPane>
      <TabPane label="基金业绩" name="achievement"></TabPane>
      <TabPane label="基金报告" name="report"></TabPane>
      <TabPane label="投资项目" name="invest"></TabPane>
    </Tabs>
    <component
      :noPage='false'
      :noBtn='true'
      :is="componentName"
    ></component>
  </div>
</template>

<script>
import Guide from './detailInfo/guide.vue'
import Dynamic from './detailInfo/dynamic.vue'
import Achievement from './detailInfo/achievement.vue'
import Report from './detailInfo/report.vue'
import Invest from './detailInfo/invest.vue'
export default {
  name: 'DetailInfo',
  components: {
    Guide,
    Dynamic,
    Achievement,
    Report,
    Invest
  },
  data () {
    return {
      label: (h) => {
        return h('div', [
          h('span', '基金动态'),
          h('Badge', {
            props: {
              count: 3
            }
          })
        ])
      },
      componentName: 'guide'
    }
  }
}
</script>
