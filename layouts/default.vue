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
  background-color: #f4f5f5;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  color: #333;
  word-break: break-word;
  line-height: normal;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
  background-color: transparent;
  margin: initial;
}

div {
  display: block;
}
ul {
  list-style-type: disc;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

a:hover {
  color: #007fff;
}
a:active,
a:hover {
  outline-width: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

.content-container {
  font-size: 12px;
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
