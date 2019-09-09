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
          <i class="el-icon-edit"></i>
          <span>写文章</span>
        </li>
        <li class="nav-item auth">
          <span class="login">登录</span>
          <span class="register">注册</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VHeader',
  data() {
    return {
      maxClientWidth: 980
    }
  },
  computed: {
    ...mapState({
      isPhone: (state) => state.isPhone
    })
  },
  mounted() {
    const self = this
    document.body.onresize = () => {
      if (document.body.clientWidth > self.maxClientWidth) {
        self.$store.commit('PCORPHONE', false)
      } else {
        self.$store.commit('PCORPHONE', true)
      }
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
    position: relative;
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

        .login {
          &::after {
            content: '\B7';
            margin: 0 0.4rem;
          }
        }
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
