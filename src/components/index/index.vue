<template>
  <div class="index">
    <el-row>
      <el-col class="colImg">
        <img src="../../assets/logo.png" class="indexImg">
      </el-col>
    </el-row>
    <el-row>
      <el-col class="colText">
        <span>合同签订系统</span>
      </el-col>
    </el-row>
    <div class="indexForm">
      <van-form @submit="onSubmit">
        <van-field
          v-for="(item, index) in value" :key="index"
          v-model="content[item]"
          :name="item"
          :label="text[index]"
          :placeholder="text[index]"
          :rules="[{ item, message: '请输入正确内容'}]"></van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" class="indexButton">
            提交表单
          </van-button>
        </div>
      </van-form>
      <div class="down">
        <van-button round block type="info" class="indexButton" v-on:click="download">
        下载合同
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'index',
  components: {},
  props: [],
  created () {
    this.$axios({
      method: 'post',
      url: `${this.$global.url}get/info2`
    }).then(res => {
      for (let i = 0; i < res.data.content2.length; i++) {
        this.value.push(res.data.content2[i].colname)
        this.text.push(res.data.content2[i].colnamech)
        this.$set(this.content, res.data.content2[i].colname, '')
      }
    })
  },
  data () {
    return {
      value: [],
      text: [],
      content: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit () {
      this.$axios({
        method: 'post',
        url: `${this.$global.url}send/table`,
        data: {
          field: this.value,
          content: this.content
        }
      }).then(res => {
        Dialog({ message: res.data.info })
      })
    },
    download () {
      window.location.href = `${this.$global.fileUrl}`
    }
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style lang="stylus">
  px2rem(designpx )
    $rem = 16px;
    return (designpx / $rem )rem
  .index
    position: relative
    top: px2rem(40px)
  .colImg
    text-align: center
  .indexImg
    width: 40vw
  .colText
    text-align center
    span
      font-size: px2rem(28px)
  .indexForm
    position: relative
    top: px2rem(40px)
  .indexButton
    position: relative
    span
      font-size px2rem(18px)
  .down
    padding  px2rem(14px)
</style>
