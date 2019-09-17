<template>
  <header class="header">
    <div class="container">
      <nuxt-link class="logo" to="/">
        <img src="~/assets/img/稻谷.png" width="60" height="60" alt="掘金" />
        稻花村
      </nuxt-link>
      <ul class="nav-list">
        <li class="nav-item search">
          <v-search />
        </li>
        <li class="nav-item submit">
          <el-popover placement="bottom" width="285" trigger="click">
            <div class="submit-panel">
              <div class="title">来稻花村写文章，您将有机会</div>
              <ul class="benefit-list">
                <li class="item">与超过 300 万开发者分享您的经验和观点</li>
                <li class="item">被编辑推荐，获得更多曝光和关注</li>
                <li class="item">加入专栏作者群，结识众多优秀开发者</li>
              </ul>
              <el-button type="success">开始写文章</el-button>
            </div>
            <div slot="reference">
              <i class="el-icon-edit"></i>
              <span>写文章</span>
            </div>
          </el-popover>
        </li>
        <li class="nav-item auth">
          <span @click="onRegister">注册</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import VSearch from './search.vue'
export default {
  name: 'VHeader',
  components: {
    VSearch
  },
  data() {
    return {}
  },
  asyncData({ app }) {
    console.log(app.$axios)
  },
  fetch({ app }) {
    console.log(app.$axios)
  },
  created() {
    console.log(this.$axios)
  },
  methods: {
    onRegister() {
      this.$emit('registerShow')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: 5rem;
  background: #fff;
  color: #909090;
  border-bottom: 1px solid #f1f1f1;
  .container {
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #e1da2b;
      font-size: larger;
      font-weight: bold;
    }

    .nav-list {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .nav-item {
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        color: #71777c;
        padding: 0 1.2rem;
        justify-content: center;
        position: relative;
        cursor: pointer;

        &:hover {
          color: #007fff;
        }

        &:last-child {
          padding-right: 0;
        }
      }

      .link-item {
        padding: 0 20px;
        height: 5rem;
      }

      .search {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        cursor: auto;
      }

      .auth {
        color: #007fff;
        flex: 0 0 auto 1;
      }

      .submit {
        color: #007fff;
        &::after {
          content: '|';
          position: absolute;
          top: 30px;
          left: 100%;
          color: hsla(0, 0%, 59%, 0.4);
        }
      }
    }
  }
}

.submit-panel {
  box-sizing: border-box;
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 2px;
  color: #909090;
  font-size: 0.8rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  cursor: default;
  z-index: 11;
  .title {
    font-size: 1rem;
    line-height: 1;
    font-weight: 700;
    color: #000;
    text-align: center;
    margin-bottom: 2rem;
  }
  .benefit-list {
    margin-left: 1rem;
    text-align: left;
    .item {
      list-style: initial;
      margin-bottom: 1rem;
    }
  }
}

@media (max-width: 960px) {
  .header {
    .container {
      width: 96%;

      .nav-item {
        height: 4rem;
        line-height: 4rem;
      }

      .nav-item.add,
      .nav-item.search,
      .nav-item.submit {
        display: none;
      }
    }
  }
}
</style>
