<template>
  <div class="introduce">
    <HeaderTop :name="name" :image="image" />
    <div class="typeList">
      <div class="onebox">
        <h4 class="title">{{ companyDesc.title }}</h4>
        <div class="BoxTEXT" v-for="(item, index) in companyDesc.descList" :key="index">
          <span></span>
          <p class="text">{{ item.text }}</p>
          <span></span>
        </div>
        <h4 class="title">{{ companyDesc.typeName }}</h4>
        <p class="textDesc">{{ companyDesc.textDesc }}</p>
        <p class="textDesc">{{ companyDesc.textDesc1 }}</p>
        <p class="BoxTEXT">{{ companyDesc.typeText }}</p>
      </div>
    </div>
    <!-- 时间 -->
    <div class="timeList">
      <div class="title">{{ timeObj.title }}</div>
      <div class="timeBox">
        <div
          :class="sureID == index ? 'radius sureStyle ' : 'radius'"
          v-for="(item, index) in timeObj.list"
          :key="index"
          @click="onClick(index)"
        >
          <p>{{ item }}</p>
          <span></span>
        </div>
      </div>
    </div>

    <div class="listcu">
      <div class="timeBox" v-for="item in listcu" :key="item.id">
        <h4>{{ item.time }}</h4>
        <div class="timeTieText" v-for="(listItem, index) in item.concat" :key="index">
          <p>
            <span>{{ listItem.time }}</span
            >{{ listItem.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop'
import Swiper from '../../components/VanSwiper'
export default {
  components: {
    HeaderTop,
    Swiper
  },
  data() {
    return {
      name: '',
      sureID: 4,
      image: 'http://tccdn.greatorange.cn/%E7%AE%80%E4%BB%8B-%E5%A4%A9%E7%A9%BA%E4%B9%8B%E6%A9%99banner.png',
      timeObj: {
        title: '发展历程',
        list: [2009, 2012, 2015, 2018, '现在']
      },
      listcu: [
        {
          id: 1,
          time: 2009,
          concat: [
            {
              time: '5月',
              text: '盛视天橙在上海市徐汇区正式成立，时名上海欣橙文化传播有限公司'
            }
          ]
        },
        {
          id: 2,
          time: 2010,
          concat: [
            {
              time: '3月',
              text: '盛视天橙成为“2010年上海世博会”视频类优秀供应商'
            }
          ]
        },
        {
          id: 3,
          time: 2012,
          concat: [
            {
              time: '3月',
              text: '盛视天橙在韩国、美国、澳大利亚建立影视协拍单位'
            }
          ]
        },
        {
          id: 4,
          time: 2013,
          concat: [
            {
              time: '12月',
              text: '盛视天橙获得上海市文化创意产业扶持资金，并且成绩名列前茅'
            }
          ]
        },
        {
          id: 5,
          time: 2014,
          concat: [
            {
              time: '12月',
              text: '盛视天橙与中影国际建立合作关系，天橙受邀参加揭牌仪式'
            },
            {
              time: '4月',
              text: '盛视天橙获得“创青春彩虹梦”上海市第八届“挑战杯”创新创业大赛金奖'
            },
            {
              time: '3月',
              text: '盛视天橙夺得普陀区 “2014年普陀创业星选拔计划”大赛的一等奖'
            },
            {
              time: '3月',
              text: '盛视天橙获得了“创青春”全国挑战杯创业实践大赛金奖'
            }
          ]
        },
        {
          id: 6,
          time: 2015,
          concat: [
            {
              time: '10月',
              text: '盛视天橙承制的微电影《爱在身边》入围第68届戛纳电影节短片展映单元'
            }
          ]
        },
        {
          id: 7,
          time: 2016,
          concat: [
            {
              time: '12月',
              text: '盛视天橙正式登陆全国中小企业股转系统（新三板）挂牌交易，股票名称：盛视天橙，股票代码：837461.OC，成为沪上最年轻的新三板上市企业；盛视天橙被认定为高新技术企业'
            }
          ]
        },
        {
          id: 8,
          time: 2017,
          concat: [
            {
              time: '3月',
              text: '盛视天橙董事长陈嵩被上海交通大学—南加大文化创意学院特聘为硕士生产业导师'
            }
          ]
        },
        {
          id: 9,
          time: 2018,
          concat: [
            {
              time: '12月',
              text: '盛视天橙董事长陈嵩当选民建上海市第十三届委员会创意产业委员会执行主任'
            }
          ]
        },
        {
          id: 10,
          time: 2019,
          concat: [
            {
              time: '8月',
              text: '天空之橙控股有限公司在山东淄博注册成立'
            }
          ]
        },
        {
          id: 11,
          time: 2020,
          concat: [
            // {
            //   time: '8月',
            //   text: '盛视天橙推出文创行业专属平台“魔方云”'
            // },
            {
              time: '7月',
              text: '盛视天橙上海总部与山东省委、青岛市委等启动交流天空之橙青岛项目'
            }
          ]
        }
      ],
      companyDesc: {
        title: '公司简介',
        descList: [
          {
            text: '天空之橙控股有限公司是一家涉足文化创意、数字科技、互联网平台、园区建设、企业管理服务等领域的综合性集团公司。旗下拥有一家新三板上市企业（上海盛视天橙传媒股份有限公司）和两家高新技术企业，以及多家全资、控股企业。 依托十余年的文创行业经验，打造文化创意产业赋能平台，链接全国企业、人才、技术三大资源，以平台打通供需，从品牌赋能、营销赋能、交易赋能、制作赋能四个维度助力，提供产业整合配套服务，实现数据整合、高效交付以及全国人才资源共享，形成产业集聚，共享与社群的力量。'
          }
        ],
        textDesc: '文创协同赋能工业互联网',
        textDesc1: '未来，因自己而来!',
        typeName: '愿景及使命',
        typeText:
          '致力于打造文化创意产业协同 Saas 赋能平台，以高效率链接全国企业、人才、技术三大资源为核心，涵盖“产业融通+技术整合+协同服务”，为传统生产制造企业智造新品赋能，文创协同赋能工业互联网.'
      }
    }
  },
  methods: {
    onClick(id) {
      this.sureID = id
    }
  }
}
</script>

<style lang="scss" scoped>
.introduce {
  // background: red;
  .typeList {
    .onebox {
      width: 100%;
      box-sizing: border-box;
      .title {
        width: 30%;
        margin: 20px auto;
        text-align: center;
        font-size: 20px;
        border-bottom: 4px solid #fe9526;
      }
      .BoxTEXT {
        padding: 0 40px;
        text-indent: 20px;
        margin-top: 20px;
      }
      .textDesc {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        width: 60%;
        margin: 0 auto;
      }
    }
  }
  .timeList {
    margin: 20px 0;
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: chocolate url(http://tccdn.greatorange.cn/SKY/20210816155210/89/发展历程.png) no-repeat;
    background-size: auto 100%;
    background-position: center;

    .title {
      font-size: 18px;
      color: #fff;
      text-align: center;
    }
    .timeBox {
      width: 80%;
      // height: 1px;
      margin-top: 20px;
      border-bottom: 8px solid #ccc;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .radius {
        margin-bottom: -20px;
        color: #fff;
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ccc;
        }
      }
      .sureStyle {
        span {
          display: inline-block;

          border-radius: 50%;
          background: #fff;
        }
      }
    }
  }
  .listcu {
    padding: 20px 40px;
    .timeBox {
      h4 {
        font-size: 16px;
        padding: 10px 0;
        border-bottom: 2px solid #fe9526;
      }
      .timeTieText {
        padding: 20px 0;
        p {
          font-size: 16px;
          line-height: 20px;
          span {
            padding-right: 10px;
          }
        }
      }
    }
  }
}
</style>
