<template>
  <div id="app">
    <div class="app-header">
      <app-header></app-header>
    </div>
    <div class="app-content">
        <div class="app-nav">
          <app-nav></app-nav>
        </div>
        <div class="app-right">
            <router-view></router-view>
        </div>
    </div>

  </div>
</template>

<script>

import AppHeader from './components/common/AppHeader.vue';
import AppNav from './components/common/AppNav.vue';
export default {
  name: 'app',
  mounted () {},
  components: {
    AppHeader,
    AppNav
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
  }
  #app{
    height: 100%;
    margin: 0;
    display: flex;
    flex-flow: column;
  }
  .app-header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;

  }
  .app-content{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .app-nav{
    position: relative;
    flex: 0 0 280px;
    background: #EFF2F7;
  }
  .app-right{
    flex: 1;
    overflow: auto;
    padding: 20px;

  }
</style>
