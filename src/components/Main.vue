<script>
import AppOutNow from './main_components/AppOutNow.vue';
import WhoWeAreDue from './main_components/WhoWeAreDue.vue';
import JumbotronSlider from './main_components/JumbotronSlider.vue';
import AppCounter from './main_components/AppCounter.vue';

export default {
    name: 'Main',
    components: {
        AppOutNow,
        WhoWeAreDue,
        JumbotronSlider,
        AppCounter,
    },
    data() {
        return {
            wwr_gallery: [
                {
                    title: 'A roll and bang the floor',
                    img: '../src/assets/img/gallery1.jpg',
                },
                {
                    title: 'Your melody to our music',
                    img: '../src/assets/img/gallery2.jpg',
                },
                {
                    title: 'Touching heaven on frequency',
                    img: '../src/assets/img/gallery3.jpg',
                },
                {
                    title: 'Music makes stronge beats',
                    img: '../src/assets/img/gallery4.jpg',
                },
                {
                    title: 'Sound is the spark of times',
                    img: '../src/assets/img/gallery5.jpg',
                },
                {
                    title: 'Make your night groovy',
                    img: '../src/assets/img/gallery6.jpg',
                },
            ],

            wwr_icons: [
                {
                    title: 'youtube',
                    img: '../src/assets/img/image (20).svg',
                },

                {
                    title: 'nota musicale',
                    img: '../src/assets/img/image (16).svg'
                }
            ],
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
        <AppCounter />
        <WhoWeAreDue :wwr_gallery="wwr_gallery" :wwr_icons="wwr_icons" />
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>