<template>
  <div id="nav">
    <router-link v-for="(item, index) in arr" :to="item.path" :key="index">{{ item.name }}</router-link>

  </div>
  <div class="main">
    <router-view />
  </div>
</template>
<script setup> 
const arr = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: '泳道图',
    path: '/flow'
  },
  {
    name: '泳道图',
    path: '/flow1'
  },
  {
    name: '南京流程',
    path: '/flow2'
  },
  {
    name: '表单basic',
    path: '/form'
  },
  {
    name: '表格',
    path: '/table'
  },
  {
    name: 'describeForm',
    path: '/describeForm'
  },
  {
    name: 'echarts',
    path: '/echarts'
  },
  {
    name: 'drag',
    path: '/drag'
  },
  {
    name: 'page',
    path: '/page'
  },
]
</script>

<style lang="less">
#nav {
  width: 100%;
  height: 40px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  background-color: #f1f1f1;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  width: 100%;
  height: calc(100% - 40px);

  &>div {
    width: 100%;
    height: 100%;

  }

}
</style>
