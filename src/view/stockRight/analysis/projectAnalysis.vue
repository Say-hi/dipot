<template>
  <div class='wrap'>
    <div class='df dfb p10 bd1'>
      <h3>项目数据分析</h3>
      <Button size='small'>股权项目库</Button>
    </div>
    <div class='p10 df dfac'>
      <div style='width: 20%;'>
        <div class='df dfac count p10'>
          <Icon size='60' type="md-analytics" />
          <div class='ml10'>
            <div>全部股权项目数</div>
            <div>
              <span class='f30'>800</span>
              <span>个</span>
            </div>
          </div>
        </div>
        <div class='df dfac count p10 mt10'>
          <Icon size='60' type="md-analytics" />
          <div class='ml10'>
            <div>在投股权项目数</div>
            <div>
              <span class='f30'>500</span>
              <span>个</span>
            </div>
          </div>
        </div>
      </div>
      <div style='width: 80%;'>
        <ProjectBar
          :value='projectBarData'
          style='width: 100%; height: 400px;'
          text='项目阶段及负责部门分布'
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBar from './projectBar'
export default {
  name: 'projectAnalysis',
  data () {
    return {
      projectBarData: [
        {
          name: '投资一部',
          in: 123
        },
        {
          name: '投资二部',
          in: 123
        },
        {
          name: '投资三部',
          in: 123
        }
      ]
    }
  },
  components: {
    ProjectBar
  }
}
</script>

<style lang='less' scoped>
.wrap {
  border: 1px solid #eee;
  border-radius: 5px;
}
.count {
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>
