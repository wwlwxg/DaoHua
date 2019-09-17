<template>
  <div class="welcome-context">
    <div class="entry-list">
      <ul ref="entry">
        <list-item
          v-for="(item, index) in recommends"
          :key="index"
          :item="item"
        >
          <div class="title-row">
            <span class="title">{{ item.title }}{{ index + 1 }}</span>
            <div class="content">
              <div class="box">
                {{ item.content }}
              </div>
            </div>
            <div class="footer">
              <div class="info">
                <i class="el-icon-s-custom"></i>
                {{ item.author }}
                &nbsp;
                <i class="el-icon-time"></i>
                {{ item.time }}
              </div>
              <el-button-group>
                <el-button size="mini" icon="el-icon-medal-1"></el-button>
                <el-button size="mini" icon="el-icon-share"></el-button>
                <el-button size="mini" icon="el-icon-star-off"></el-button>
              </el-button-group>
            </div>
          </div>
        </list-item>
      </ul>
      <p v-if="loading" class="loading">
        <i class="el-icon-loading"></i>加载中...
      </p>
    </div>
    <aside class="welcome">
      <section class="section auth-section shadow">
        <div class="title">稻花村</div>
        <div class="slogan">--接地气得农村信息交流平台</div>
        <div class="input-group">
          <div class="input-box">
            <input
              name="registerUsername"
              maxlength="20"
              placeholder="用户名"
              class="input"
            />
          </div>
          <div class="input-box">
            <input
              name="registerPassword"
              type="password"
              maxlength="64"
              autocomplete="new-password"
              placeholder="密码（不少于 6 位）"
              class="input"
            />
          </div>
        </div>
        <button class="submit-btn">立即登录</button>
        <div class="oauth-box">
          第三方登录：
          <img
            title="微博"
            alt="微博"
            src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
            class="oauth-btn"
          />
          <img
            title="GitHub"
            alt="GitHub"
            src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
            class="oauth-btn"
          />
          <img
            title="微信"
            alt="微信"
            src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
            class="oauth-btn"
          />
        </div>
      </section>
      <div class="section shadow tags">
        <div class="header">
          <div class="title">
            <span>热门标签</span>
          </div>
          <div class="right">
            <a href="/subscribe/all" target="_blank" rel="" class="tag-link">
              查看全部
            </a>
          </div>
        </div>
        <div class="content">
          <div class="tag-list">
            <a href="#" target="_blank" rel="" class="tag">作物</a>
            <a href="#" target="_blank" rel="" class="tag">电商</a>
            <a href="#" target="_blank" rel="" class="tag">物流</a>
            <a href="#" target="_blank" rel="" class="tag">春播秋收</a>
            <a href="#" target="_blank" rel="" class="tag">水果蔬菜</a>
            <a href="#" target="_blank" rel="" class="tag">天气水利</a>
            <a href="#" target="_blank" rel="" class="tag">土地流转</a>
            <a href="#" target="_blank" rel="" class="tag">民间土方</a>
            <a href="#" target="_blank" rel="" class="tag">轶事传说</a>
          </div>
        </div>
      </div>
      <div class="section qr-section shadow">
        <a class="app-link" href="https://juejin.im/app" target="_blank">
          <img
            class="qr"
            src="https://b-gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png"
          />
          <div class="content-box">
            <div class="headline">下载客户端</div>
            <div class="desc">接地气得农村信息交流平台</div>
          </div>
        </a>
      </div>
      <section class="more-section">
        <ul class="more-list">
          <li class="item"><a href="/about" target="_blank">关于</a></li>
          <li class="item">
            <a href="#" target="_blank">招聘</a>
          </li>
          <li class="item">
            <a href="#" target="_blank">商务合作</a>
          </li>
          <li class="item"><a href="/links" target="_blank">友情链接</a></li>
        </ul>
        <ul class="more-list">
          <li class="item"><span>©2019 Arrow</span></li>
        </ul>
        <ul class="more-list">
          <li class="item">
            <a href="#" target="_blank">Powered by QingCloud</a>
          </li>
        </ul>
        <ul class="more-list">
          <li class="item">
            <a href="http://www.miibeian.gov.cn" target="_blank"
              >津ICP备15003202号-2</a
            >
          </li>
        </ul>
        <ul class="more-list">
          <li class="item">
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719"
              target="_blank"
              >京公网安备11010802026719号</a
            >
          </li>
        </ul>
      </section>
    </aside>
  </div>
</template>

<script>
import ListItem from '~/components/item.vue'

export default {
  components: {
    ListItem
  },
  data() {
    return {
      recommends: [],
      loading: false
    }
  },
  async asyncData({ store, error }) {
    const [res] = await Promise.all([store.news.dispatch('getList')])
    return {
      recommends: res.list
    }
  },
  mounted() {
    this.loadMore(6)
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.timer && clearTimeout(this.timer)
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        const max = 20
        if (this.recommends.length < max) {
          const num = max - this.recommends.length
          this.loadMore(Math.min(num, 3))
        }
      }
    },
    loadMore(size) {
      this.loading = true
      this.timer = setTimeout(() => {
        for (let i = 1; i <= size; i++) {
          const imgIndex = this.$lodash.random(1, 4)
          this.recommends.push({
            title: '颍亭留别',
            content:
              '故人重分携，临流驻归驾。乾坤展清眺，万景若相借。北风三日雪，太素秉元化。九山郁峥嵘，了不受陵跨寒波淡淡起，白鸟悠悠下。怀归人自急，物态本闲暇。壶觞负吟啸，尘土足悲咤。回首亭中人，平林淡如画',
            screenshot: require(`~/assets/img/${imgIndex}.jpg`),
            author: '元好问',
            time: this.$moment()
              .subtract(i, 'days')
              .add(i, 'hours')
              .calendar()
          })
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.welcome-context {
  display: flex;
  align-items: flex-start;
  margin-top: 1.17rem;

  .entry-list {
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
    text-align: center;
    overflow: hidden;
    flex-grow: 1;
    .title-row {
      text-align: left;
      margin: 0.1rem 0;
      overflow: hidden;
      text-overflow: ellipsis;

      .title {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.2;
        color: #2e3135;
        cursor: pointer;
        &:hover {
          color: #007fff;
        }
      }

      .content {
        margin: 0.8rem 0;
        font-size: 1rem;
        .box {
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .info {
          color: gray;
          display: inline-block;
        }
      }
    }
    .loading {
      background-color: #dedede;
      padding: 0.5rem 0;
      color: #007fff;
    }
  }

  .welcome {
    width: 240px;
    min-width: 240px;
    margin-left: 20px;
    display: block;
    .section {
      background-color: #fff;
      border-radius: 2px;
      margin-bottom: 1.5rem;
      overflow: hidden;
    }
    .shadow {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    .auth-section {
      padding: 1.333rem;
      background-color: #fff;
      .title {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        color: #2e3135;
        font-weight: 600;
      }
      .slogan {
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        text-align: right;
        color: #2e3135;
      }
      .input-box {
        position: relative;
        margin-bottom: 0.833rem;
        .input {
          padding: 0.7rem 0.6rem;
          width: 100%;
          font-size: 0.8rem;
          background-color: #fbfbfb;
          border: 1px solid #f4f4f4;
          border-radius: 2px;
          outline: none;
          box-sizing: border-box;
        }
      }
      .submit-btn {
        padding: 0.7rem 0;
        width: 100%;
        font-size: 1rem;
        -webkit-appearance: none;
        appearance: none;
        background-color: #007fff;
        color: #fff;
        border-radius: 2px;
        border: none;
        padding: 0.5rem 1.3rem;
        outline: none;
        transition: background-color 0.3s, color 0.3s;
        cursor: pointer;
      }

      .oauth-box {
        display: block;
        margin-top: 1.5rem;
        font-size: 0.8rem;
        line-height: 1.5rem;
        color: #8f969c;
        .oauth-btn {
          border-style: none;
          width: auto;
          margin-left: 0.6rem;
          height: 1.5rem;
          vertical-align: bottom;
          cursor: pointer;
        }
      }
    }

    .tags {
      .header {
        height: 45px;
        line-height: 45px;
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f6f6f6;
        .title {
          font-size: 14px;
          flex-grow: 1;
          padding-right: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .right {
          .tag-link {
            color: #007fff;
          }
        }
      }
      .content {
        .tag-list {
          padding: 15px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          .tag {
            margin-right: 10px;
            margin-bottom: 10px;
            background-color: #f3f6f3;
            cursor: pointer;
            height: 30px;
            color: inherit;
            line-height: 30px;
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 25px;
            &:hover {
              color: #fff;
              background-color: #0c0;
            }
          }
        }
      }
    }

    .qr-section {
      .app-link {
        display: flex;
        align-items: center;
        padding: 1.3rem;
        .qr {
          margin-right: 0.5rem;
          width: 4.167rem;
          height: 4.167rem;
        }
        .content-box {
          .headline {
            font-size: 0.8rem;
            font-weight: 600;
            color: #333;
          }
          .desc {
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: #909090;
          }
        }
      }
    }

    .more-section {
      background-color: transparent;
      text-align: center;
      color: #909090;
      font-size: 0.8rem;
      box-shadow: none;
      .more-list {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.4rem;
        .item:not(:last-child)::after {
          content: '·';
          margin: 0px 0.4rem;
        }
      }
    }
  }
}
</style>
