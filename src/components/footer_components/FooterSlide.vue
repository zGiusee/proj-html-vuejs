<script>
export default {
    name: 'FooterSlide',

    // Props that picks Footer images Array
    props: {
        footerSlide: Object,
    },
    data() {
        return {

        }
    },
    methods: {

        // This is for import the images 
        getImagePath: function (imgPath) {
            let url = new URL(imgPath, import.meta.url).href;
            return url
        }
    },
}
</script>
<template>
    <div class="images w-100">
        <img class="image" v-for="slide, index in footerSlide" :key="index" :src="getImagePath(slide.image)" alt="">
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables' as *;



.images {
    background-color: #000000;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    .image {
        width: 238px;
        height: 238px;
        --f: 1.10;

        clip-path: inset(0);
        transition: .6s;

        &:hover {
            clip-path: inset(calc((1 - 1/var(--f)) * 50%));
            scale: var(--f)
        }
    }
}

.images::-webkit-scrollbar {
    display: none;
}
</style>