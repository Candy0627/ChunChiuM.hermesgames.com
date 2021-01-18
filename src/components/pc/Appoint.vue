<template>
  <div class="appoint_wrap">
    <img src="../../assets/imgs/appoint/appoint_bg.jpg" alt="" />
    <div class="appoint">
      <img
        src="../../assets/imgs/appoint/scroll_bg.png"
        alt=""
        class="appoint_img"
      />
      <div class="select" @click="handleClick">{{defaultArea}} <img src="../../assets/imgs/arrow.png" alt="" class="arrow"></div>
      <ul class="select_ul" v-if="options.isSelect">
        <li v-for="item in area" :key="item.id" @click="getValue()">{{item.area_name}}</li>
      </ul>
      <div class="phone">
        <span class="fl">+86</span>
        <input type="text" class="fr">
      </div>
      <input type="checkbox" class="">
    </div>
    <img src="../../assets/imgs/appoint/bot.png" alt="" class="bot_img" />
    <img
      src="../../assets/imgs/appoint/appoint_people.png"
      alt=""
      class="people_img"
    />
    <div class="progress">
      <img
        src="../../assets/imgs/appoint/process.png"
        alt=""
        class="appoint_process"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Appoint',
  props: {
    msg: String
  },
  data () {
    return {
      defaultArea: '台灣',
      area: [
        {
          'id': '01',
          'area_name': '台灣'
        },
        {
          'id': '02',
          'area_name': '香港'
        },
        {
          'id': '03',
          'area_name': '澳門'
        },
        {
          'id': '04',
          'area_name': '新加坡'
        },
        {
          'id': '05',
          'area_name': '馬來西亞'
        }
      ],
      options: {
        isSelect: false
      }
    }
  },
  methods: {
    handleClick () {
      this.options.isSelect = !this.options.isSelect
    }
  }
}
</script>

<style scoped lang="scss">
.appoint_wrap {
  position: relative;
  width: 100%;
  .appoint {
    position: absolute;
    left: 2.57rem;
    top: 0.78rem;
    .checkbox{
      position: absolute;
      width: .16rem;
      height: .16rem;
    }
    .phone{
      position: absolute;
      width: 3.79rem;
      height: .47rem;
      left: 4.14rem;
      top: .92rem;
      text-align: center;
      border:none;
      background: none;
      span{
        display: inline-block;
        width: 20%;
        color:#827e6e;
        height: .47rem;
        line-height: .47rem;
        font-size: .24rem;
        font-weight: bold;
      }
      input{
        width: 80%;
        height: 100%;
        color:#827e6e;
        font-weight: bold;
        font-size: .21rem;
        border:none;
        background:none;
      }
    }
    .select_ul{
      position: absolute;
      left: 2.22rem;
      top: 1.4rem;
      width: 1.72rem;
      height: 2.25rem;
      background: url('.././../assets/imgs/select_bg.png') no-repeat;
      background-size: 100% 100%;
      transition: all 0.9s;
      li{
        width: 85%;
        margin: 0 auto;
        height: .45rem;
        line-height: .45rem;
        text-align: center;
        font-size: .24rem;
        color:#ffffff;
        border-bottom:1px solid #faf7de;
        cursor: pointer;
        &:last-child{
          border-bottom: none !important
        }
      }
    }
    .select {
      width: 1.7rem;
      text-align: center;
      position: absolute;
      left: 2.22rem;
      top: 0.96rem;
      font-size: 0.28rem;
      color: #ffffff;
      text-align: left;
      text-indent: .28rem;
      cursor: pointer;
      .arrow {
        position: absolute;
        width: .45rem;
        height: .25rem;
        right: .24rem;
        top:50%;
        margin-top:-.125rem;
      }
      select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        border: none;
      }
    }
  }
  .appoint_img {
    width: 10.7rem;
    height: 6.22rem;
  }
  .appoint_in {
    position: absolute;
    top: 0.73rem;
  }
  .bot_img {
    position: absolute;
    top: 7.25rem;
    left: 0;
    z-index: 1;
  }
  .people_img {
    width: 6.57rem;
    height: 10.8rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .progress {
    position: absolute;
    left: 3.4rem;
    bottom: 0.25rem;
    z-index: 1;
    .appoint_process {
      width: 8.76rem;
      height: 2.12rem;
    }
  }
}
</style>
