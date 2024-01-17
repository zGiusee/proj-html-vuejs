<script>
export default {
    name: "AppOutNow",
}
</script>
<template lang="">
    <div class="bg-guitar container-fluid">
        <div class="outnow_container container d-flex flex-column">
            <h3 class=" myUppercase fw-bolder">instrumental rock</h3>
            <h1 class="text-white myUppercase fw-bolder">album out now</h1>
            <div>
                <span class="text-white myUppercase" id="readMore">read more</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.bg-guitar {
    background-image: url(../../assets/img/cms_parallax.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;


    .outnow_container {
        min-height: 850px;
        justify-content: center;

        h3 {
            color: $main_color;
            font-size: 30px;
        }

        h1 {
            font-size: 110px;
        }

        #readMore {
            display: inline-block;
            font-weight: 500;
            font-size: 15px;
            line-height: 24px;
            letter-spacing: 1px;
            border: 1px solid $main_color;
            padding: 12px 54px;
            margin-top: 40px;
        }

    }
}

.prova {
    height: 400px;
    background-color: black;
}
</style>