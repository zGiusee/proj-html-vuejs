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
    created() {
        this.startAutoPlay()
    },
    composed: {
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
        },
        startAutoPlay() {
            setInterval(() => {
                this.nextImg();
            }, 4000);
        },
    },

}
</script>
<template>
    <div class="slider_wrapper">
        <div class="text-center">
            <!-- IMMAGINE DI BACKGROUND -->

            <div>
                <img :src="`${getImagePath(slides[this.currentImage].img)}`" alt="">
            </div>

            <!-- TITOLO E SOTTOTITOLO -->
            <div class="title-container">
                <h1>{{ slides[this.currentImage].title }}</h1>
            </div>

            <div class="subtitle-container">
                <h4>{{ slides[this.currentImage].subtitle }}</h4>
            </div>

            <!-- READ MORE BUTTON -->
            <div class="read-more-container">
                <button class="my-btn" type="button"> Read more</button>
            </div>
        </div>

        <!-- TASTI LATERALI PER CAMBIARE IMMMAGINE -->
        <div class="left" @click="prevImg"><i class="bi bi-chevron-left"></i></div>
        <div class="right" @click="nextImg"><i class="bi bi-chevron-left my-rotate"></i></div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables' as *;


.slider_wrapper {
    position: relative;

    img {
        margin-top: 102px;
        width: 100%;
        height: 100%;
        object-fit: contain;

    }

    // TITLE AND SUBTITLE

    // TITLE
    .title-container {
        position: absolute;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%);

        h1 {
            text-transform: uppercase;
            color: white;
            font-size: 100px;
            letter-spacing: 1px;
            font-weight: bold;
            opacity: 1;

        }
    }

    // SUBTITLE
    .subtitle-container {
        position: absolute;
        top: 33%;
        left: 50%;
        transform: translate(-50%, -50%);

        h4 {
            font-family: 'Open Sans', sans-serif;
            text-transform: uppercase;
            font-size: 22px;
            letter-spacing: 0px;
            font-weight: 700;
            opacity: 1;
            color: $main_color;
        }
    }

    // READ MORE BUTTON

    .read-more-container {
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);

        .my-btn {
            text-transform: uppercase;
            color: white;
            letter-spacing: 1px;
            font-weight: bold;
            font-size: 15px;
            border: 1px solid $main_color;
            padding: 14px 55px;
            background-color: transparent;
            transition: all 0.3s;


        }

        .my-btn:hover {
            background-color: $main_color;
        }
    }

    // ARROW BUTTON STYLE AND POSITIONING
    .left,
    .right {
        position: absolute;
        top: 50%;
    }

    .left {
        margin-left: 20px;
    }

    .right {
        right: 0px;
        margin-right: 20px;
    }

    .my-rotate {
        transform: scaleX(-1);
        -moz-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -ms-transform: scaleX(-1);
    }


    i {
        display: block;
        // display: none;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 8px 12px;
        cursor: pointer;
        color: white;


        &:hover {
            background-color: rgba(0, 0, 0, 0.9);
        }
    }
}

.slider_wrapper:hover i {
    display: block;
}
</style>