<script>
import AppOutNow from './main_components/AppOutNow.vue';
import JumbotronSlider from './main_components/JumbotronSlider.vue';

export default {
    components: {
        AppOutNow,
        JumbotronSlider,
    }
}
</script>
<template>
    <div>
        <JumbotronSlider></JumbotronSlider>
        <AppOutNow></AppOutNow>
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>