<template>
  <li class="list-item">
    <div class="entry">
      <a target="_blank" class="entry-link">
        <div class="content-box">
          <div class="info-box">
            <slot></slot>
          </div>
          <div v-show="item.screenshot" class="thumb">
            <img :src="item.screenshot" />
          </div>
        </div>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
.list-item {
  list-style-type: none;
  &:not(:last-child) {
    border-bottom: 1px solid #dedede;
  }

  .entry {
    &:hover {
      background-color: rgba(0, 0, 0, 0.01);
    }
  }

  .content-box {
    display: flex;
    align-items: center;
    padding: 1.167rem 0;
    min-height: 5.75rem;
  }

  .info-box {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
}

.thumb {
  flex: 0 0 auto;
  width: 8.9rem;
  height: 5.75rem;
  margin-left: 2rem;
  background-color: #000;
  border-radius: 2px;

  img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 600px) {
  .thumb {
    display: none;
  }
}
</style>
