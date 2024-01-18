<script>
import AppOutNow from './main_components/AppOutNow.vue';
import JumbotronSlider from './main_components/JumbotronSlider.vue';

export default {
    components: {
        AppOutNow,
        JumbotronSlider,
    },
    data() {
        return {
            jumbotronSlides: [
                {
                    img: '../../assets/image1.png',
                    title: 'Music in this video',
                    subtitle: 'Instrumental rock',
                },
                {
                    img: '../../assets/image2.png',
                    title: 'Music of the spirits',
                    subtitle: 'Instrumental rock',
                },
            ]
        }
    },
}
</script>
<template>
    <div>
        <JumbotronSlider :slides="jumbotronSlides"></JumbotronSlider>
        <AppOutNow></AppOutNow>
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>