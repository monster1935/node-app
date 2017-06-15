<!-- side nav components -->
<template>
  <div class="nav">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>Index
      </el-menu-item>
   </el-menu>
  </div>
</template>

<script>
  export default {
      data () {
          return {

          };
      },
      components: {},
      mounted() {},
      methods: {
        handleOpen () {

        },
        handleClose () {

        }
      },
      computed: {},
      watch: {}
  };
</script>
