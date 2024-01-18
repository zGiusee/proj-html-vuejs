<script>
export default {
    name: 'FooterSlide',
    data() {
        return {
            slider: [
                {
                    image: "instagram_images/instagram_img1.jpg"
                },
                {
                    image: "instagram_images/instagram_img2.jpg"
                },
                {
                    image: "instagram_images/instagram_img3.jpg"
                },
                {
                    image: "instagram_images/instagram_img4.jpg"
                },
                {
                    image: "instagram_images/instagram_img5.jpg"
                },
                {
                    image: "instagram_images/instagram_img6.jpg"
                },
                {
                    image: "instagram_images/instagram_img7.jpg"
                },
                {
                    image: "instagram_images/instagram_img8.jpg"
                },
                {
                    image: "instagram_images/instagram_img9.jpg"
                },
                {
                    image: "instagram_images/instagram_img10.jpg"
                },
            ],
        }
    },
    methods: {
       
    },
}
</script>
<template>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-12">
                <div class="insta">
                    <div class="images" v-for="image, index in slider" :key="index">
                        <img class="image" :src="image.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.images{
    position: relative;
    margin: auto;
    .image{
        transition: all 0.3s;
        display: block;
        width: 180px;
        height: auto;
        transform: scale(1);
        &:hover{
            transform: scale(1.1);
        }
    }
}
.insta{
    display: flex;
    overflow-x: auto;
}

.insta::-webkit-scrollbar{
    width: 0;
}
</style>