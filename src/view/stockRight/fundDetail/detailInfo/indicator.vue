<template>
  <div>
    <h3>关键指标</h3>
    <div class='df dfbc' style='flex-wrap: wrap;'>
      <div
        :key='i'
        class='m10 border1 p10'
        style='flex: 18%;'
        v-for='i in 10'
      >
        <div class='f12'>基金管理资金规模</div>
        <div class='df' style='align-items: baseline;'>
          <div class='f20 df'>
            ￥
            <count-to
              :end='1000'
              :decimals='2'
              usegroup
            />
            </div>
          <div class="f12">万元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Indicator'
}
</script>
