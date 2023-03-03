<template>
    <div :id="id" style="width: 1200px;height:300px;"></div>
</template>
<script>
import { defineComponent, onMounted, reactive } from 'vue'
import * as echarts from 'echarts';
export default defineComponent({
    name: 'ACharts',
    props: {
        options: {
            type: Object,
            default: () => ({})
        },
        type: {
            type: String,
            default: 'line'
        },
        data: {
            type: Array,
            default: () => ([])
        }
    },
    setup(props, ctx) {
        function getUUID(len, radix) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
            var uuid = []
            var i
            radix = radix || chars.length
            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
            } else {
                var r
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
                uuid[14] = '4'
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16
                        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
                    }
                }
            }
            return uuid.join('')
        }
        const id = getUUID(32, 16)

        console.log('ctx', ctx)
        let myChart = null
        const getEcahrt = () => {
            return myChart
        }
        ctx.expose({ getEcahrt })
        const options = {
            legend: {
                show: false
            },
            tooltip: {},
            dataset: {
                // 提供一份数据。
                source: props.type !== 'boxplot' ? props.data : []
            },
            // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
            xAxis: {
                show: props.type === 'line' || props.type === 'bar'||props.type === 'boxplot' ,
                type: 'category'
            },
            // 声明一个 Y 轴，数值轴。
            yAxis: {
                show: props.type === 'line' || props.type === 'bar'||props.type === 'boxplot' ,
            },
            // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
            series: [{ type: props.type }]

        }
        // 雷达图设置
        if (props.type === 'radar') {
            options['radar'] = {
                // shape: 'circle',
                indicator: [
                    { name: '销售（sales）', max: 100 },
                    { name: '管理（Administration）', max: 100 },
                    { name: '信息技术（Information Techology）', max: 100 },
                    { name: '客服（Customer Support）', max: 100 },
                    // { name: '研发（Development）', max: 52000 },
                    // { name: '市场（Marketing）', max: 25000 }
                ]
            }
        }


        // 设置
        if (props.type === 'boxplot') {
            options.series[0]['data'] = props.data
        }


        onMounted(() => {
            // 基于准备好的dom，初始化echarts实例
            myChart = echarts.init(document.getElementById(id));
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(options);
        })

        return {
            id
        }

    }

})
</script>