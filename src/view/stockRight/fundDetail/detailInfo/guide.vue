<template>
  <div>
    <GuideList :list='lists' title='基本信息' />
    <GuideList class='mt10' title='财务信息' />
    <GuideList class='mt10' title='投资信息' />
    <GuideList class='mt10' title='管理信息'>
      <Button type='primary' size='small'>编辑</Button>
    </GuideList>
    <Shareholder class='mt10' />
    <Dynamic
      :hasMax='true'
      class='mt10'
    />
  </div>
</template>

<script>
import GuideList from './guideList'
import Shareholder from './shareholder'
import Dynamic from './dynamic'
export default {
  name: 'DetailGuide',
  components: {
    GuideList,
    Shareholder,
    Dynamic
  },
  data () {
    return {
      lists: [
        {
          t: '其味无穷',
          c: 'adfasdfadfasdfadfasdf'
        },
        {
          t: '123123',
          c: 'adfasdfadfasdf'
        },
        {
          t: '其味无穷',
          c: 'adfasdfadfasdfadfasdf'
        },
        {
          t: '123123',
          c: 'adfasdfadfasdf'
        }
      ]
    }
  }
}
</script>
