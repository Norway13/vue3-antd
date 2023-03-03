<template>
  <div class="eacharts">
    <!-- <a-charts ref="zero" :options="options0"></a-charts>
    <a-charts :options="options1"></a-charts>
    <a-charts :options="options2"></a-charts>
    <a-charts :options="options3"></a-charts> -->
    <a-charts type="line" :data="data"></a-charts>
  </div>
</template>

<script>
import { defineComponent, onMounted,ref, reactive, toRaw } from 'vue';
import ACharts from '@/components/Echarts/index.vue'
export default defineComponent({
  name: 'we',
  components: { ACharts },
  setup() {
    const zero = ref(null)
    const options1 = reactive({
      legend: {},
      tooltip: {},
      dataset: {
        // 提供一份数据。
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
      },
      // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
      xAxis: { type: 'category' },
      // 声明一个 Y 轴，数值轴。
      yAxis: {},
      // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
      series: [
        { type: 'bar' },
        { type: 'line' },
        { type: 'bar' }
      ]
    })

    const options2 = reactive({
      legend: {},
      tooltip: {},
      dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
          { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
          { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
          { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
      ]
    })

    //     数据到图形的映射
    // 我们可以在配置项中将数据映射到图形中。

    // 我们可以使用 series.seriesLayoutBy 属性来配置 dataset 是列（column）还是行（row）映射为图形系列（series），默认是按照列（column）来映射。

    // 以下实例我们将通过 seriesLayoutBy 属性来配置数据是使用列显示还是按行显示。
    const options3 = reactive({
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015'],
          ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
          ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
          ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 }
      ],
      yAxis: [
        { gridIndex: 0 },
        { gridIndex: 1 }
      ],
      grid: [
        { bottom: '55%' },
        { top: '55%' }
      ],
      series: [
        // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        { type: 'bar', seriesLayoutBy: 'column' },
        { type: 'bar', seriesLayoutBy: 'column' },
        { type: 'bar', seriesLayoutBy: 'column' },
        // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
      ]
    })

    const options0 =reactive({
      legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    })
    onMounted(()=>{
      console.log('zero',zero.value.getEcahrt())
      const myChart = zero.value.getEcahrt()
      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    })





    return {
      options0,
      options1,
      options2,
      options3,
      zero


    }
  }

});
</script>

<style lang="less">
.eacharts {
  overflow: auto;
}
</style>
