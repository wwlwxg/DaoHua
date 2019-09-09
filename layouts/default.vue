<template>
  <div>
    <v-header></v-header>
    <main ref="container" class="content-container">
      <nuxt />
    </main>
  </div>
</template>

<script>
import VHeader from '~/components/header.vue'
export default {
  components: {
    VHeader
  }
}
</script>

<style lang="less">
body {
  margin: 0;
}

.content-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  top: 5rem;
  &::after {
    display: table;
    content: '';
    clear: both;
  }
}
</style>
