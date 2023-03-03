<template>
    <div class="drag">
        <grid-layout v-model:layout="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true"
            :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">

            <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
                {{ item.i }}
            </grid-item>
        </grid-layout>

    </div>
</template>
<script>
import { onMounted, defineComponent, reactive } from 'vue';
// const VueGridLayout = require('vue-grid-layout');

export default defineComponent({
    // components: {
    //     GridLayout: VueGridLayout.GridLayout,
    //     GridItem: VueGridLayout.GridItem
    // },
    setup() {
        const layout = reactive(
            [
                { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0" },
                { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1" },
                { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2" },
                { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3" },
                { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4" },
                { "x": 10, "y": 0, "w": 2, "h": 3, "i": "5" },
                { "x": 0, "y": 5, "w": 2, "h": 5, "i": "6" },
                { "x": 2, "y": 5, "w": 2, "h": 5, "i": "7" },
                { "x": 4, "y": 5, "w": 2, "h": 5, "i": "8" },
                { "x": 6, "y": 3, "w": 2, "h": 4, "i": "9" },
                { "x": 8, "y": 4, "w": 2, "h": 4, "i": "10" },
                { "x": 10, "y": 4, "w": 2, "h": 4, "i": "11" },
                { "x": 0, "y": 10, "w": 2, "h": 5, "i": "12" },
                { "x": 2, "y": 10, "w": 2, "h": 5, "i": "13" },
                { "x": 4, "y": 8, "w": 2, "h": 4, "i": "14" },
                { "x": 6, "y": 8, "w": 2, "h": 4, "i": "15" },
                { "x": 8, "y": 10, "w": 2, "h": 5, "i": "16" },
                { "x": 10, "y": 4, "w": 2, "h": 2, "i": "17" },
                { "x": 0, "y": 9, "w": 2, "h": 3, "i": "18" },
                { "x": 2, "y": 6, "w": 2, "h": 2, "i": "19" }
            ]
        )
        onMounted(() => {
            console.log('1212121')
        })

        return {
            layout
        }

    }

})


</script>

<style>
.app {
    font-family: sans-serif;
    padding: 0;
    display: flex;
    padding: 16px 8px;
}

.app-content {
    flex: 1;
    height: 240px;
    margin-left: 8px;
    margin-right: 8px;
    box-shadow: 0 0 10px 1px #e9e9e9;
}

.dnd-wrap {
    width: 200px;
    padding: 16px;
    border: 1px solid #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
}

.dnd-rect {
    width: 100px;
    height: 40px;
    border: 2px solid #31d0c6;
    text-align: center;
    line-height: 40px;
    margin: 16px;
    cursor: move;
}

.dnd-circle {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 2px solid #31d0c6;
    text-align: center;
    line-height: 60px;
    margin: 16px;
    cursor: move;
}

.x6-graph-scroller {
    border: 1px solid #f0f0f0;
    margin-left: -1px;
}

.validating {
    position: relative;
}

.validating:after {
    position: absolute;
    top: 4px;
    left: 4px;
    content: ' ';
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 6px solid #873bf4;
    border-color: #873bf4 transparent #873bf4 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
