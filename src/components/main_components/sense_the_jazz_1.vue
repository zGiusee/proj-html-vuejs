<script>
export default {
    name: "sense_the_jazz_1",
}
</script>

<template>
    <div class="bg-black">
        <div class="main-container ">
            <div class="bg-black ">
                <div class="px-4 py-5  text-center text-white">
                    <div class="row">

                        <div class="wwr-subtitle col-12">
                            <h6>WHO WE ARE</h6>
                        </div>
                        <div class="wwr-title col-12">
                            SENSE THE JAZZ
                        </div>

                        <div class="col-12 justify-content-center d-flex ">
                            <div class="text-p mb-5 my-p">
                                <span class="fs-6">The Story Of Jazz And Blues Society Is The Story Of Determination,
                                    Passion,
                                    Idealism,
                                    Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A
                                    Community
                                    Based,
                                    Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The
                                    Society, From
                                    The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The
                                    Creation And
                                    Exchange Of Sounds And Ideas Between The Local, National And International Music
                                    Communities.
                                </span>
                            </div>

                        </div>

                        <div class="col-12">
                            <div class="d-gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" class="my-btn">READ
                                    MORE</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="bg-img section-size w-100">
                <div class="row w-100 ">
                    <div class="col-12 mt-custom">
                        <div class="player d-flex justify-content-center ">
                            <i class="bi bi-play-circle pointer"></i>
                        </div>
                        <div class="wwr-title d-flex justify-content-center ">
                            NEW MUSIC VIDEO

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss">
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins' as*;

.my-p {
    width: 840px;
}

.wwr-subtitle {
    @include orange_title
}

.wwr-title {
    @include white_title
}

.main-container {
    font-family: "Oswald", sans-serif;
    width: 100%;
}

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


.bg-img {
    background: url('../../assets/img/Video.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
}

.section-size {
    height: 500px;
    width: 100%;
}

.player {
    font-size: 80px;
    color: #F2870C;

}

.mt-custom {
    margin-top: 120px !important;
}
</style>
