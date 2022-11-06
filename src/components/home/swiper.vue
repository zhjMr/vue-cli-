<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "Homeswiper",
    data() {
        return {
            swiperOption: {
                autoplay: 3000,
                pagination: ".swiper-pagination",
                paginationClickable: true,
            },
            swiperList: [
                {
                    id: '001',
                    imgUrl: "https://pic1.imgdb.cn/item/6360c8d916f2c2beb15b0de0.jpg"
                },
                {
                    id: '002',
                    imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg"
                },
                {
                    id: '003',
                    imgUrl: "https://pic1.imgdb.cn/item/6360c8d516f2c2beb15b0154.jpg"
                },
                {
                    id: '004',
                    imgUrl: "https://pic1.imgdb.cn/item/6360c8d116f2c2beb15af2f5.jpg"
                },
            ]
        };
    },
    methods: {

    }
}
</script>
<style scoped lang="stylus">
.wrapper /deep/ .swiper-pagination-bullet-active {
    background: #fff;
}
.wrapper{
    background-color:#fff;
}
    .swiper-img {
        width: 100%;
        height 2.5rem;
    }

</style>