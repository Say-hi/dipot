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
          :value='projectValue'
          :Y='projectY'
          ref='project'
          style='width: 100%; min-height: 400px;'
          text='项目阶段及负责部门分布'
        />
      </div>
    </div>
    <div class='p10 mt10'>
      <h2>全部项目版块及行业分布</h2>
      <div class='df dfac dfbc bd1 p50'>
        <Button @click='distribution = "plate"'>所属板块</Button>
        <Button @click='distribution = "industry"' class='ml10'>所属行业</Button>
      </div>
      <ProjectBar
        :value='[distributionValue[distribution]]'
        :legend='false'
        :Y='distributionY'
        :style='{height: distributionHeight}'
        ref='distribution'
        style='width: 100%; height: 400px;'
      />
      <div class='tac p10 bgeee bd2' @click='_setHeight("distribution")' style='border-bottom-color: #001522;'>
        <span>
          展开<Icon type="ios-arrow-round-down" />
        </span>
      </div>
    </div>
    <div class='p10 mt10'>
      <h2>在投项目版块及行业分布</h2>
      <div class='df dfac dfbc bd1 p50'>
        <Button @click='distributionPay = "plate"'>所属板块</Button>
        <Button @click='distributionPay = "industry"' class='ml10'>所属行业</Button>
      </div>
      <ProjectBar
        :value='[distributionValuePay[distributionPay]]'
        :legend='false'
        :Y='distributionYPay'
        :style='{height: distributionPayHeight}'
        ref='distributionPay'
        style='width: 100%; height: 400px;'
      />
      <div class='tac p10 bgeee bd2' @click='_setHeight("distributionPay")' style='border-bottom-color: #001522;'>
        <span>
          展开<Icon type="ios-arrow-round-down" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBar from './projectBar'
import { getProject, getDistributionValue } from '_api/analysis'
export default {
  name: 'ProjectAnalysis',
  data () {
    return {
      distributionHeight: '400px',
      distributionPayHeight: '400px',
      projectValue: [],
      projectY: [],
      distribution: 'plate',
      distributionValue: {
        plate: {
          type: 'bar',
          data: [],
          label: {
            show: true,
            position: 'right'
          }
        },
        industry: {
          type: 'bar',
          data: [],
          label: {
            show: true,
            position: 'right'
          }
        }
      },
      distributionY: [],
      distributionPay: 'plate',
      distributionValuePay: {
        plate: {
          type: 'bar',
          data: [],
          label: {
            show: true,
            position: 'right'
          }
        },
        industry: {
          type: 'bar',
          data: [],
          label: {
            show: true,
            position: 'right'
          }
        }
      },
      distributionYPay: []
    }
  },
  components: {
    ProjectBar
  },
  methods: {
    _getProjectValue () {
      getProject().then(res => {
        this.projectValue = res.data.map((item, index) => {
          let temp = {
            ...item,
            type: 'bar',
            stack: 'name',
            data: [item.in, item.set, item.meeting, item.sign, item.buy, item.outing, item.out, item.other]
          }
          if (index === res.data.length - 1) { // 最后一个用于展示总值
            temp.label = {
              show: true,
              position: 'right',
              formatter: (params) => {
                let index = params.dataIndex // 数据列索引
                return this.$refs.project.value.reduce(function (total, current) {
                  total += current.data[index]
                  return total
                }, 0) // 累加总值
              }
            }
          }
          return temp
        })
        this.projectY = ['其他', '已退出', '退出中', '已投资', '已签约', '已过会', '已立项', '已入库']
        this.$refs.project.init()
      })
    },
    _getDistributionValue () {
      getDistributionValue().then(res => {
        res.data.forEach(item => {
          this.distributionY.push(item.name)
          this.distributionValue.plate.data.push(item.plate)
          this.distributionValue.industry.data.push(item.industry)
        })
        this.$refs.distribution.init()
      })
    },
    _useDistributionValue (type = 'plate') {
      return this.distributionValue[type]
    },
    _getDistributionValuePay () {
      getDistributionValue().then(res => {
        res.data.forEach(item => {
          this.distributionYPay.push(item.name)
          this.distributionValuePay.plate.data.push(item.plate)
          this.distributionValuePay.industry.data.push(item.industry)
        })
        this.$refs.distributionPay.init()
      })
    },
    _useDistributionValuePay (type = 'plate') {
      return this.distributionValuePay[type]
    },
    _setHeight (type) {
      this[`${type}Height`] = this[`${type}Height`] === '800px' ? '400px' : '800px'
      this.$nextTick(() => {
        this.$refs[type].resize()
      })
    }
  },
  mounted () {
    this._getProjectValue()
    this._getDistributionValue()
    this._getDistributionValuePay()
  },
  watch: {
    distribution (newVal, oldVal) {
      (newVal && oldVal && newVal !== oldVal) && this.$refs.distribution.init()
    },
    distributionPay (newVal, oldVal) {
      (newVal && oldVal && newVal !== oldVal) && this.$refs.distributionPay.init()
    }
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
