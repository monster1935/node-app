<!-- 头部导航栏 -->
<template >
  <div class="header">
    <el-menu theme="dark"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <div class="title">
        NodeApp Management System
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
      data () {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
      },
      components: {},
      mounted() {},
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      computed: {},
      watch: {}
  };
</script>

<style scope>
  .header .title {
    margin-left: 16px;
    font-size: 24px;
    color: #fff;
    height: 68px;
    line-height: 68px;
  }
</style>
