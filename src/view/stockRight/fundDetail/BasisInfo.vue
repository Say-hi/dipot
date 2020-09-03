<template>
  <div>
    <div class='border1 br5 p10'>
      <div class='df dfac'>
        <div class='df dfac flex1'>
          <h2>广东中小企业股权投资基金有限公司（简称：中小企业基金）</h2>
          <Status :type='1' />
        </div>
        <div>
          <Button type='primary'>基金报告导出</Button>
          <Button class='ml10'><Icon type="ios-arrow-back" /></Button>
          <Button><Icon type="ios-arrow-forward" /></Button>
        </div>
      </div>
      <div class='f12 mt10'>
        <span>
          <span class='ccc'>管理人：</span>中银粤财股权投资基金管理（广东）有限公司
        </span>
        <span>
          <span class='ccc'>最近更新：</span>2019-04-15 12:00:00
        </span>
      </div>
      <div class='mt10 df'>
        <Dropdown
          v-for='(item, index) of dropDown'
          :key='item.name'
          size='small'
          :class='{ml10: index >= 1}'
        >
          <Button>
            {{item.name}}
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem
              v-for='option of item.options'
              :key='option+"a"'
            >{{ option }}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <div class='border1 br5 p10 mt10'>
      <Tabs
        v-if='tabs'
        :tabs='tabs'
        :onlyShow='true'
        class='mt10'
      />
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/tabs/index'
import Status from './Status'
import { dropDown } from './config'
import { getDepositoryTab } from '_api/stockRight'
export default {
  name: 'BasisInfo',
  components: {
    Status,
    Tabs
  },
  data () {
    return {
      dropDown,
      tabs: []
    }
  },
  beforeMount () {
    getDepositoryTab().then(res => {
      this.tabs = res.data
    })
  }
}
</script>
