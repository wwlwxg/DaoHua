<template>
  <div>
    <v-header @registerShow="dialogVisible = true"></v-header>
    <main ref="container" class="content-container">
      <nuxt />
    </main>
    <el-dialog title="注册" :visible.sync="dialogVisible" width="20%">
      <el-form :model="form" class="form">
        <el-form-item>
          <el-input
            v-model="form.userName"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.pwd"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.confirmPwd"
            placeholder="请输入确认密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import VHeader from '~/components/header.vue'
export default {
  components: {
    VHeader
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        userName: '',
        pwd: '',
        confirmPwd: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(111)
    }
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
