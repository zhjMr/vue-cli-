<template>
    <div>
        <div class="header">
            <div class="header-left">
                <div class="iconfont iconfanhui"> </div>
            </div>
            <div class="header-input">
                <span class="iconfont  iconsousuo"></span>
                输入城市/景点/游玩出题
            </div>
            <div class="header-right">
                <!-- 乌鲁木齐乌鲁木齐 -->北京
                <span class="iconfont iconjiantouxia"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>
<style scoped lang="stylus">
@import "~styles/varibles.styl";
.header 
    display  flex;
    line-height  $headerHeight
    background: $bgColor
    color: #fff
    .header-left
        width: .64rem;
        float: left
        .icon-fanhui
            text-align: center
            font-size: .4rem
    .header-input{
        flex: 1
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        padding-left: .2rem;
        background: #fff;
        border-radius: .1rem;
        color: #ccc;
    }
    .header-right{
        min-width: 1.04rem
        padding: 0 .1rem
        float: right
        text-align: center
        color: #fff
        .arrow-icon{
            margin-left: -.04rem
            font-size: .24rem
        }
            
    }
</style>