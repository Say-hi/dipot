<template>
  <div>
    <Tab
      v-if='tabs'
      :tabs='tabs'
      :onlyShow='true'
      class='mt10'
    />
    <Tabs type='card' v-model='componentName'>
      <TabPane label='投前项目' name='investBefore'></TabPane>
      <TabPane label='投后项目' name='investAfter'></TabPane>
    </Tabs>
    <component
      :noPage='false'
      :noBtn='true'
      :is="componentName"
    ></component>
  </div>
</template>

<script>
import Tab from '@/components/tabs/index'
import InvestBefore from './investBefore.vue'
import InvestAfter from './investAfter.vue'
import { getDepositoryTab } from '_api/stockRight'
export default {
  name: 'Invest',
  components: {
    Tab,
    InvestBefore,
    InvestAfter
  },
  data () {
    return {
      componentName: 'investBefore',
      tabs: ''
    }
  },
  beforeMount () {
    getDepositoryTab().then(res => {
      this.tabs = res.data
    })
  }
}
</script>
