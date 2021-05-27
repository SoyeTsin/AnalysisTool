<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
 box-sizing: border-box;
  padding: 0;
  margin: 0;
  user-select:none;
}
body{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
