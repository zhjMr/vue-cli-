<template>
    <div class="home_box">
        <Header></Header>
        <Hswiper></Hswiper>
        <Hicons></Hicons>
    </div>
</template>
<script>
export default {
    name: "Home",
    components: {
        Header: () => import('../components/home/Header.vue'),
        Hswiper: () => import('../components/home/swiper.vue'),
        Hicons: () => import('../components/home/icons.vue')
    },
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>
<style scoped lang="stylus">
    .home_box{
        height 100%
        background-color: #ccc;
    }
</style>