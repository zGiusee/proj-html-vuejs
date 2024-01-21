<script>
export default {
    name: 'WhoWeAreDue',
    props: {
        wwr_gallery: Array,
        wwr_icons: Array,
    }

}
</script>

<template>
    <div class="wwr-cont">
        <div class="container">
            <!-- TITOLI DELLA SECTION -->
            <div class="text-center">
                <span class="wwr-subtitle">who we are</span><br>
                <span class="wwr-title">sense the jazz</span>
            </div>
            <div class="row">
                <!-- SINGOLA CARD DELLA GALLERY DA CICLARE -->
                <div class="col-4 text-center wwr-card my-3" v-for="card, index in wwr_gallery" :key="index">
                    <div class="card-image">
                        <img :src="card.img">
                    </div>
                    <div class="card-title">{{ card.title }}</div>
                    Stream On : <i class="bi bi-spotify wwr-icons"></i> <img v-for="icon, index in wwr_icons" :key="index"
                        :src="icon.img" class="wwr-icons"> <i class="bi bi-cloud-fog2-fill wwr-icons"></i> <i
                        class="bi bi-compass-fill wwr-icons"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.wwr-cont {
    background-color: black;
    color: grey;
    padding: 100px 0;

    .wwr-subtitle {
        @include orange_title;
    }

    .wwr-title {
        @include white_title;
    }


    .wwr-card {
        color: rgb(165, 165, 165);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 15px;
        font-weight: 500;

        .card-title {
            @include min_title
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

        .wwr-icons {
            filter: brightness(0) invert(1);
            height: 15px;
            margin: 0px 8px;
            color: white;
            font-size: 13px;

            &:hover {
                filter: invert(65%) sepia(72%) saturate(3314%) hue-rotate(357deg) brightness(98%) contrast(93%);
                color: $main_color;
            }

        }

    }

}
</style>