<script>
import AppOutNow from './main_components/AppOutNow.vue';
import WhoWeAreDue from './main_components/WhoWeAreDue.vue';
import sense_the_jazz_1 from './main_components/sense_the_jazz_1.vue';

export default {
    name: 'Main',
    components: {
        AppOutNow,
        WhoWeAreDue,
        sense_the_jazz_1,
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
        }
    },
}
</script>
<template>
    <div>
        <sense_the_jazz_1></sense_the_jazz_1>
        <AppOutNow></AppOutNow>
        <WhoWeAreDue :wwr_gallery="wwr_gallery" :wwr_icons="wwr_icons" />
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>