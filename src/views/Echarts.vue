<template>
  <div class="eacharts">
    <a-charts :type="type" :data="data"></a-charts>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, toRefs, reactive, toRaw } from 'vue';
import ACharts from '@/components/Echarts/index.vue'
export default defineComponent({
  name: 'we',
  components: { ACharts },
  setup() {
    const data1 = [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
    const data2 = [
      [34, 54, 67, 75, 86],
      [10, 25, 45, 67, 73],
      [24, 34, 45, 55, 66],
      [32, 45, 50, 60, 70],
      [44, 59, 70, 75, 88],
      [28, 38, 48, 58, 68],
      [38, 48, 58, 68, 78]
    ]
    // funnel pie line bar radar boxplot
    const mapmap = {
      type: 'line',
      data: data1
    }
    const dd = reactive(mapmap)







    return {
      ...toRefs(dd)


    }
  }

});
</script>

<style lang="less">
.eacharts {
  overflow: auto;
}
</style>
