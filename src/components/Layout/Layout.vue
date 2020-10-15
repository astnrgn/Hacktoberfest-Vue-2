<template>
  <div class="Layout">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {},
};
</script>

<style scoped lang="scss">
</style>