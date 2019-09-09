<template>
  <div class="box">
    <ul ref="entry" class="entry-list">
      <list-item v-for="(item, index) in recommends" :key="index" :item="item">
        <div class="title-row">
          <span class="title">{{ item.title }}</span>
          <p class="content">{{ item.content }}</p>
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
      recommends: [
        {
          title: '测试新闻1',
          content: '人生若只如初见，何事秋风悲画扇',
          screenshot: require('~/assets/img/1.jpg'),
          author: 'shimon',
          time: '2018-12-5'
        },
        {
          title: '测试新闻2',
          content: '人生若只如初见，何事秋风悲画扇',
          screenshot: require('~/assets/img/2.jpg'),
          author: 'shimon',
          time: '2018-12-5'
        },
        {
          title: '测试新闻3',
          content: '人生若只如初见，何事秋风悲画扇',
          screenshot: require('~/assets/img/3.jpg'),
          author: 'shimon',
          time: '2018-12-5'
        },
        {
          title: '测试新闻4',
          content: '人生若只如初见，何事秋风悲画扇',
          screenshot: require('~/assets/img/4.jpg'),
          author: 'shimon',
          time: '2018-12-5'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.box {
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  .entry-list {
    width: 100%;
    background: #fff;

    .title-row {
      margin: 0.1rem 0 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .title {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.2;
        color: #2e3135;
        cursor: pointer;
        &:hover {
          color: #007fff;
        }
      }

      .content {
      }

      .footer {
        display: flex;
        justify-content: space-between;

        .info {
          color: gray;
        }
      }
    }
  }
}
</style>
