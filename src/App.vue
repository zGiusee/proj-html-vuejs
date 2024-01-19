<script>
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        Header,
        Main,
        Footer,
    },
}
</script>

<template>
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>
