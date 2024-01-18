<script>
export default {
    name: 'JumbotronSlider',
    data() {
        return {
            currentImage: 0,
            slides: [
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
    methods: {
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
        getImagePath: function (imgPath) {
            let url = new URL(imgPath, import.meta.url).href;
            return url
        }
    },

}
</script>
<template>
    <div>
        <img :src="`${getImagePath(slides[this.currentImage].img)}`" alt="">
    </div>
</template>
<style lang="scss">
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables' as *;

img {
    width: 100%;
}
</style>