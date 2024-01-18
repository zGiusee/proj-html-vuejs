<script>
export default {
    name: 'JumbotronSlider',
    props: {
        slides: Object,
    },
    data() {
        return {
            currentImage: 0,

        }
    },
    methods: {
        // FUNZIONE DI AVANZAMENTO SLIDES
        nextImg() {

            if (this.currentImage == this.slides.length - 1) {
                this.currentImage = 0;
            }
            else {
                this.currentImage++;
            }
        },
        prevImg() {

            if (this.currentImage == 0) {
                this.currentImage = this.slides.length - 1;
            }
            else {
                this.currentImage--;
            }
        },
        // FUNZIONE CHE RECUPERA L'URL DELLE IMMAGINI
        getImagePath: function (imgPath) {
            let url = new URL(imgPath, import.meta.url).href;
            return url
        }
    },

}
</script>
<template>
    <div class="slider_wrapper">
        <div>
            <img :src="`${getImagePath(slides[this.currentImage].img)}`" alt="">
        </div>
        <div> <img src="" alt=""></div>
    </div>
</template>
<style lang="scss">
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables' as *;

img {
    width: 100%;
}
</style>