<template>
    <div :id="id" style="width: 1200px;height:300px;"></div>
</template>
<script>
import { defineComponent, onMounted, reactive, defineExpose } from 'vue'
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
        onMounted(() => {
            // 基于准备好的dom，初始化echarts实例
            myChart = echarts.init(document.getElementById(id));
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(props.options);
        })

        return {
            id
        }

    }

})
</script>