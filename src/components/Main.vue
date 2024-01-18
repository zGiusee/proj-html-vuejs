<script>
import WhoWeAreDue from './main_components/WhoWeAreDue.vue';

export default {
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
                    img:
                },
            ],
        };
    },
    methods: {},
    components: { WhoWeAreDue }
}
</script>
<template>
    <div>
        <WhoWeAreDue :wwr_gallery="wwr_gallery" />
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>