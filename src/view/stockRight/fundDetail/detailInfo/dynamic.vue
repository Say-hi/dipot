<template>
  <div>
    <h3>基金动态</h3>
    <page-tab
      :url='url'
      :noPage='noPage'
      @listData='_listData'
      class='mt10'
      ref='pageTab'
    >
      <div
        :key='I.id'
        v-for='I of pageData'
      >
        <div class='df item'>
          <div class='circle time'></div>
          <div class='contenttime'>{{ I.time }}</div>
        </div>
        <div
          :key='i.id'
          v-for='i of I.list'
          class='df item'
        >
          <div class='circle'></div>
          <div class='content'>
            <div class='df dfac'>
              <div class='df dfac flex1'>
                <Avatar :src='i.avatar'/>
                <span class='ml10'>{{ i.name }}</span>
                <span class='ml10'>{{ i.title }}</span>
              </div>
              <div>{{ i.time }}</div>
            </div>
            <div class='df mt10'>
              <div class='flex1'>{{ i.content }}</div>
              <Button>详情</Button>
            </div>
          </div>
        </div>
      </div>
    </page-tab>
    <Button v-if='!noBtn' class='bottomBtn'>查看更多<Icon type="ios-arrow-forward" /></Button>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  props: {
    noPage: {
      type: Boolean,
      default: true
    },
    noBtn: {
      type: Boolean,
      deafult: false
    },
    hasMax: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      url: '/stockright/dynamic',
      pageData: []
    }
  },
  methods: {
    _listData (data) {
      this.pageData = this.hasMax ? [data[0], data[1]] : data 
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  }
}
</script>

<style lang='less' scoped>
@width: 10px;
@color: #0094ff;
@margin-top: 5px;
@line-height: 22px;
.item {
  position: relative;
  padding-bottom: 30px;
  &:before {
    content: '';
    width: 2px;
    height: 100%;
    position: absolute;
    top: @line-height / 2;
    left: @width / 2 - 1;
    background: #eee;
  }
}
.circle {
  width: @width;
  height: @width;
  border-radius: 50%;
  border: 2px solid@color;
  background: #fff;
  margin-top: @line-height / 2 - @width / 2;
  position: relative;
  &.time {
    background: @color;
  }
}
.contenttime {
  background: @color;
  color: #fff;
  display: inline-block;
  line-height: @line-height;
  padding-right: 10px;
  position: relative;
  margin-left: @line-height;
  font-size: 12px;
  &:before {
    content: '';
    height: 0;
    width: 0;
    border: @line-height / 2 solid @color;
    border-color: transparent @color transparent transparent;
    position: absolute;
    top: 0;
    left: -@line-height;
  }
}
.content {
  flex: 1;
  border: 1px solid #eee;
  padding: 10px;
  margin-left: @line-height - @line-height / 2;
  background: rgba(111, 208, 185, 0.3);
}
.bottomBtn {
  transform: translate(@line-height, -20px);
}
</style>
