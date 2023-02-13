<template>
  <div class="flow">
    <div style="width:100%; height:90%">
      <div id="container"></div>
    </div>
  </div>
</template>
<script setup>
import { Graph } from '@antv/x6'
import { onMounted } from 'vue'
Graph.registerNode(
  'lane',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'rect',
        selector: 'name-rect',
      },
      {
        tagName: 'text',
        selector: 'name-text',
      },
    ],
    attrs: {
      body: {
        fill: '#FFF',
        stroke: '#5F95FF',
        strokeWidth: 1,
      },
      'name-rect': {
        width: 200,
        height: 120,
        fill: '#5F95FF',
        stroke: '#fff',
        strokeWidth: 1,
        x: -1,
      },
      'name-text': {
        ref: 'name-rect',
        refY: 0.5,
        refX: 0.5,
        textAnchor: 'middle',
        fontWeight: 'bold',
        fill: '#fff',
        fontSize: 22,
      },
    },
  },
  true,
)

Graph.registerNode(
  'lane-rect',
  {
    inherit: 'rect',
    width: 100,
    height: 60,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
  },
  true,
)

Graph.registerNode(
  'lane-polygon',
  {
    inherit: 'polygon',
    width: 80,
    height: 80,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
        refPoints: '0,10 10,0 20,10 10,20',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
  },
  true,
)

Graph.registerEdge(
  'lane-edge',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
      },
    },
    router: {
      name: 'manhattan',
      args: {
        startDirections: ['right'],
        endDirections: ['right', 'left', 'top', 'bottom'],
      },
    },
    label: {
      attrs: {
        label: {
          fill: '#A2B1C3',
          fontSize: 12,
        },
      },
    },
  },
  true,
)
Graph.registerEdge(
  'lane-edge-r',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
      },
    },
    router: {
      name: 'oneSide',
      args: {
        side: 'right',
        padding: 50,
      },
    },
    label: {
      attrs: {
        label: {
          fill: '#A2B1C3',
          fontSize: 12,
        },
      },
    },
  },
  true,
)
Graph.registerEdge(
  'lane-edge',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
      },
    },
    router: {
      name: 'manhattan',
      args: {
        startDirections: ['right'],
        endDirections: ['right', 'left', 'top', 'bottom'],
      },
    },
    label: {
      attrs: {
        label: {
          fill: '#A2B1C3',
          fontSize: 12,
        },
      },
    },
  },
  true,
)
onMounted(() => {

  const graph = new Graph({
    container: document.getElementById('container'),
    width: '100%',
    height: 700,
    connecting: {
      router: 'orth',
    },
    autoResize: true,
    background: {
      color: "#F2F7FA",
    },
    grid: {
      visible: true,
      // type: 'doubleMesh',
      args: [
        {
          color: '#eee', // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: '#ddd', // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
    panning: true, // 拖拽画布
    mousewheel: true,  // 滚动鼠标
    translating: { // 限制节点移动
      restrict(cellView) {
        const cell = cellView.cell
        const parentId = cell.prop('parent')
        if (parentId) {
          const parentNode = graph.getCellById(parentId)
          if (parentNode) {
            return parentNode.getBBox().moveAndExpand({
              x: 200,
              y: 0,
              width: -200,
              height: 0,
            })
          }
        }
        return cell.getBBox()
      },
      // restrict: true
    },
  })
  const data = [
    {
      "id": "1",
      "shape": "lane",
      "width": 1200,
      "height": 120,
      "position": {
        "x": 60,
        "y": 60
      },
      "label": "客户"
    },
    {
      "id": "1-1",
      "shape": "lane-rect",
      "width": 100,
      "height": 60,
      "position": {
        "x": 280,
        "y": 90
      },
      "label": "发起额度申请",
      "attrs": {
        // "body": {
        //   "rx": 30,
        //   "ry": 30
        // }
      },
      "parent": "1"
    },

    {
      "id": "1-2",
      "shape": "lane-rect",
      "width": 100,
      "height": 60,
      "position": {
        "x": 580,
        "y": 90
      },
      "label": "授权征信",
      "parent": "1"
    },
    {
      "id": "1-3",
      "shape": "lane-polygon",
      "width": 80,
      "height": 60,
      "position": {
        "x": 760,
        "y": 90
      },
      "label": "是否通过",
      "parent": "1"
    },

    {
      "id": "2",
      "shape": "lane",
      "width": 1200,
      "height": 120,
      "position": {
        "x": 60,
        "y": 180
      },
      "label": "小微客户经理"
    },
    {
      "id": "2-1",
      "shape": "lane-rect",
      "width": 80,
      "height": 40,
      "position": {
        "x": 280,
        "y": 240
      },
      "label": "收集客户资料",
      "attrs": {
        // "body": {
        //   "rx": 30,
        //   "ry": 30
        // }
      },
      "parent": "2"
    },
    {
      "id": "2-2",
      "shape": "lane-rect",
      "width": 80,
      "height": 40,
      "position": {
        "x": 440,
        "y": 240
      },
      "label": "调查分析",
      "attrs": {
        // "body": {
        //   "rx": 30,
        //   "ry": 30
        // }
      },
      "parent": "2"
    },
    {
      "id": "2-3",
      "shape": "lane-rect",
      "width": 80,
      "height": 40,
      "position": {
        "x": 580,
        "y": 240
      },
      "label": "发起授信查询",
      "attrs": {
        // "body": {
        //   "rx": 30,
        //   "ry": 30
        // }
      },
      "parent": "2"
    },
    // {
    //   "id": "2-4",
    //   "shape": "lane-rect",
    //   "width": 80,
    //   "height": 40,
    //   "position": {
    //     "x": 940,
    //     "y": 240
    //   },
    //   "label": "准入申报",
    //   "attrs": {
    //     // "body": {
    //     //   "rx": 30,
    //     //   "ry": 30
    //     // }
    //   },
    //   "parent": "2"
    // },
    // {
    //   "id": "2-5",
    //   "shape": "lane-rect",
    //   "width": 80,
    //   "height": 40,
    //   "position": {
    //     "x": 940,
    //     "y": 240
    //   },
    //   "label": "客户评级申报",
    //   "attrs": {
    //     // "body": {
    //     //   "rx": 30,
    //     //   "ry": 30
    //     // }
    //   },
    //   "parent": "2"
    // },
    // {
    //   "id": "2-6",
    //   "shape": "lane-rect",
    //   "width": 80,
    //   "height": 40,
    //   "position": {
    //     "x": 1080,
    //     "y": 240
    //   },
    //   "label": "授信方案申报",
    //   "attrs": {
    //     // "body": {
    //     //   "rx": 30,
    //     //   "ry": 30
    //     // }
    //   },
    //   "parent": "2"
    // },
    {
      "id": "3",
      "shape": "lane",
      "width": 1200,
      "height": 120,
      "position": {
        "x": 60,
        "y": 300
      },
      "label": "征信查询岗"
    },
    {
      "id": "3-1",
      "shape": "lane-rect",
      "width": 80,
      "height": 40,
      "position": {
        "x": 440,
        "y": 340
      },
      "label": "查询征信",
      "attrs": {
        // "body": {
        //   "rx": 30,
        //   "ry": 30
        // }
      },
      "parent": "3"
    },
    {
      "id": "4",
      "shape": "lane",
      "width": 1200,
      "height": 120,
      "position": {
        "x": 60,
        "y": 420
      },
      "label": "授信审批岗"
    },

    {
      "id": "20",
      "shape": "lane-edge",
      "source": "1-1",
      "target": "2-1"
    },
    {
      "id": "21",
      "shape": "lane-edge",
      "source": "2-1",
      "target": "2-2"
    },
    {
      "id": "22",
      "shape": "lane-edge",
      "source": "2-2",
      "target": "2-3"
    },
    {
      "id": "23",
      "shape": "lane-edge",
      "source": "2-3",
      "target": "1-2"
    },
    {
      "id": "24",
      "shape": "lane-edge",
      "source": "1-2",
      "target": "1-3"

    },
    {
      "id": "25",
      "shape": "lane-edge",
      "source": "1-3",
      "target": "2-3",
      'label': '不通过'
    },
    {
      "id": "26",
      "shape": "lane-edge-r",
      "source": "1-3",
      "target": "3-1",
      'label': '通过'
    },
    // {
    //   "id": "5",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 110,
    //     "y": 120
    //   },
    //   "label": "Start",
    //   "attrs": {
    //     "body": {
    //       "rx": 30,
    //       "ry": 30
    //     }
    //   },
    //   "parent": "1"
    // },
    // {
    //   "id": "6",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 320,
    //     "y": 120
    //   },
    //   "label": "Process",
    //   "parent": "2"
    // },
    // {
    //   "id": "7",
    //   "shape": "lane-polygon",
    //   "width": 80,
    //   "height": 80,
    //   "position": {
    //     "x": 520,
    //     "y": 110
    //   },
    //   "label": "Judge",
    //   "parent": "3"
    // },
    // {
    //   "id": "8",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 510,
    //     "y": 240
    //   },
    //   "label": "Process",
    //   "parent": "3"
    // },
    // {
    //   "id": "9",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 720,
    //     "y": 240
    //   },
    //   "label": "Process",
    //   "parent": "4"
    // },
    // {
    //   "id": "10",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 720,
    //     "y": 350
    //   },
    //   "label": "Process",
    //   "parent": "4"
    // },
    // {
    //   "id": "11",
    //   "shape": "lane-polygon",
    //   "width": 80,
    //   "height": 80,
    //   "position": {
    //     "x": 520,
    //     "y": 340
    //   },
    //   "label": "Judge",
    //   "parent": "3"
    // },
    // {
    //   "id": "12",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 510,
    //     "y": 470
    //   },
    //   "label": "Process",
    //   "parent": "3"
    // },
    // {
    //   "id": "13",
    //   "shape": "lane-rect",
    //   "width": 100,
    //   "height": 60,
    //   "position": {
    //     "x": 300,
    //     "y": 470
    //   },
    //   "label": "End",
    //   "attrs": {
    //     "body": {
    //       "rx": 30,
    //       "ry": 30
    //     }
    //   },
    //   "parent": "2"
    // },
    // {
    //   "id": "14",
    //   "shape": "lane-edge",
    //   "source": "5",
    //   "target": "6"
    // },
    // {
    //   "id": "15",
    //   "shape": "lane-edge",
    //   "source": "6",
    //   "target": "7"
    // },
    // {
    //   "id": "16",
    //   "shape": "lane-edge",
    //   "source": "7",
    //   "target": "8",
    //   "label": "Yes"
    // },
    // {
    //   "id": "17",
    //   "shape": "lane-edge",
    //   "source": "7",
    //   "target": "9",
    //   "label": "No"
    // },
    // {
    //   "id": "18",
    //   "shape": "lane-edge",
    //   "source": "8",
    //   "target": "9"
    // },
    // {
    //   "id": "19",
    //   "shape": "lane-edge",
    //   "source": "9",
    //   "target": "10"
    // },
    // {
    //   "id": "20",
    //   "shape": "lane-edge",
    //   "source": "10",
    //   "target": "11"
    // },
    // {
    //   "id": "21",
    //   "shape": "lane-edge",
    //   "source": "11",
    //   "target": "12",
    //   "label": "Yes"
    // },
    // {
    //   "id": "22",
    //   "shape": "lane-edge",
    //   "source": "11",
    //   "target": "13",
    //   "label": "No"
    // },
    // {
    //   "id": "23",
    //   "shape": "lane-edge",
    //   "source": "12",
    //   "target": "13"
    // }
  ]
  const cells = []
  data.forEach((item) => {
    if (item.shape.startsWith('lane-edge')) {
      cells.push(graph.createEdge(item))
    } else {
      cells.push(graph.createNode(item))
    }
  })
  // console.log(cells)
  graph.resetCells(cells)
  graph.zoomToFit({ padding: 10, maxScale: 1 })

})

</script>
