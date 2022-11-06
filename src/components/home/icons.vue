<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon" v-for="item in iconList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>
<script>
export default {
    data() {
        return {
            iconList: [{
                id: "0001",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc: "景点门票"
            }, {
                id: "0002",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
                desc: "万隆滑雪"
            }, {
                id: "0003",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                desc: "故宫"
            }, {
                id: "0004",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
                desc: "静之湖滑雪"
            }, {
                id: "0005",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc: "一日游"
            }, {
                id: "0006",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
                desc: "古北水镇"
            }, {
                id: "0007",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                desc: "北京滑雪"
            }, {
                id: "0008",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
                desc: "陶然亭公园"
            }, {
                id: "0009",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
                desc: "泡温泉"
            }, {
                id: "0010",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                desc: "中国马镇"
            }]
        };
    },
    methods: {

    }
}
</script>
<style scoped lang="stylus">
 .icons                      
    overflow: hidden
    height : 0
    padding-bottom: 50%
    background: #fff
    .icon
        position relative
        float:left
        width: 25%
        padding-bottom: 25%
        // background : red
        .icon-img
            position: absolute
            top:0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .05rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color:#333
</style>