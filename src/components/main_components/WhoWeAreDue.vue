<script>
export default {

    props: {
        wwr_gallery: Array,
    }

}
</script>

<template lang="">
    <div class="wwr-cont">
        <div class="container">
            <div class="text-center">
                <span class="wwr-subtitle">who we are</span><br>
                <span class="wwr-title">sense the jazz</span>
            </div>
            <div class="row">
                <div class="col-4 text-center wwr-card my-3" v-for="card, index in wwr_gallery" :key="index">
                    <div class="card-image">
                        <img :src="card.img"> 
                    </div>
                    <div class="card-title">{{ card.title }}</div>
                    Stream On : icons
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

    .wwr-subtitle {
        @include orange_title;
    }

    .wwr-title {
        @include white_title;
    }

    img {
        width: 100%;
    }

    .wwr-card {
        .card-title {
            @include min_title
        }

        .card-image {
            overflow: hidden;

            img {
                transition: transform 0.5s ease;
            }

            &:hover img {
                transform: scale(1.05);
            }
        }
    }
}
</style>