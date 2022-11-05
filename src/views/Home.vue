<template>
    <div>
        <Header></Header>
        我是home
    </div>
</template>
<script>
export default {
    name: "Home",
    components: {
        Header: () => import('../components/home/Header.vue')
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
    
</style>