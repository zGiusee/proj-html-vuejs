<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


export default {
    name: 'BestMusicBlog',
    props: {
        bmb_cards: Array,
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
    },

}
</script>

<template>
    <div class="bmb-cont">
        <div class="container">
            <!-- TITOLI MAIN DELLA SEZIONE -->
            <div class="text-center">
                <span class="bmb-subtitle">music blog</span><br>
                <span class="bmb-title">best music blog</span>
            </div>
            <div class="slider-cont">
                <!-- SLIDER BLOG -->
                <div class="slider">
                    <carousel ref="carousel" :items-to-show="3">
                        <slide v-for="slide in bmb_cards" :key="slide">
                            <div class="bmb-card my-3">
                                <div class="card-image">
                                    <img :src="slide.img">
                                </div>
                                <div class="card-title">{{ slide.title }}</div>
                                <div class="card-date"><i class="bi bi-calendar3"></i> {{ slide.date }}</div>
                                <div class="card-content">{{ slide.content }}</div>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <!-- FRECCETTE SLIDER  -->
                <div class="arrows">
                    <div class="left-arrow" @click="prev">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                    <div class="right-arrow my-rotate" @click="next">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.bmb-cont {
    background-color: black;
    color: rgb(165, 165, 165);
    padding: 100px 0;

    .bmb-subtitle {
        @include orange_title;
    }

    .bmb-title {
        @include white_title;
    }

    .slider-cont {
        display: flex;
        flex-wrap: wrap;
        position: relative;

        .slider {
            z-index: 3;
        }

        &:hover .arrows {
            transition: 1s ease-out;
            color: white;

            .left-arrow,
            .right-arrow {
                cursor: pointer;
            }
        }

        .bmb-card {

            width: calc(100% - 20px);
            margin: 0 10px;
            text-align: left;

            .card-title {
                @include min_title
            }

            .card-title:hover {
                color: $main_color;
            }

            .card-content {
                @include min_content
            }

            .card-date {
                @include min_date
            }

            .card-image {
                overflow: hidden;

                img {
                    transition: transform 0.5s ease;
                    width: 100%;
                }

                &:hover img {
                    transform: scale(1.05);
                }
            }

            .bmb-icons {
                filter: brightness(0) invert(1);
                height: 15px;
                margin: 0px 8px;

            }
        }

        .arrows {
            width: calc(100% + 80px);
            height: 100%;
            color: black;
            font-size: 40px;
            position: absolute;
            top: -40px;
            left: -40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 0;


            &:hover {
                transition: 1s ease-out;
                color: white;

                .left-arrow,
                .right-arrow {
                    cursor: pointer;
                }
            }
        }

    }



}

.my-rotate {
    transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
}
</style>