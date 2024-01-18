<script>
import { store } from '../../store.js';

export default {
    name: "AppCounter",
    data() {
        return {
            store
        }
    },
    methods: {
    },
}
</script>
<template lang="">
    <div class="bg-classic-guitar d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="counter_card d-flex flex-column align-items-center">
                        <div class="icon_container">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.58 393.53"><path d="M99.27,393.53c-2.63-1.26-5.49-2.18-7.84-3.83C85,385.18,83,378.64,83,371q.14-114.89.13-229.78A12.33,12.33,0,0,0,80,132.6q-37.2-44-74.22-88.18C-3,34-1.6,20.69,9,13.75,17.47,8.23,28.11,10,35.24,18.26c6.6,7.66,13,15.47,19.54,23.22,15.4,18.34,30.89,36.6,46.15,55.06,4.62,5.59,10.09,8.22,17.33,8,8.45-.27,16.92-.25,25.36,0,7.12.21,12.44-2.5,17-7.94q32.46-39,65.2-77.69c7.31-8.69,17.74-10.75,26.4-5.38,10.64,6.6,12.54,20.05,4.13,30.28-7.89,9.59-15.94,19.05-23.93,28.57C215.2,92.87,198,113.34,180.88,134a11,11,0,0,0-2.28,6.47c-.11,76-.24,151.91.05,227.86,0,12.57-4,21.32-16.36,25.25h-7.68c-12.68-4.26-16.29-13.62-16.16-26.24.4-36.08.14-72.17.14-108.25v-4.4H123v4.79q0,55.85,0,111.71c0,9.05-3.14,16.21-11.56,20.42-1.45.73-3,1.32-4.47,2Z"></path><path d="M136.16,0c7.89,1.81,15.4,4.41,21.85,9.6A43.4,43.4,0,1,1,87.54,41.15C88.75,20.5,103.15,4.36,123.65.66A9.79,9.79,0,0,0,125.4,0Z"></path></svg>
                        </div>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='store.concerts' :duration='2' separator=',' decimalSeparator='.' :autoinit='true' class="num text-white my-2" />
                        <span class="subject text-white myUppercase">concerts</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="counter_card d-flex flex-column align-items-center">
                        <div class="icon_container">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.99 69.46"><path d="M0,43.44v-1c4.24-4.84,9-9.13,15.64-9.91,2.81-.32,3.89-1.41,4.86-3.9C26.62,13,39.59,5.47,55.05,0c3.42,16,3.05,30.87-7.24,44.08-1.56,2-2.27,3.49-1.17,6.17,2.69,6.53,1.78,13-1.54,19.21h-1L33,56.58c-7.34,3.23-13.66.22-15.68-6.68a4.81,4.81,0,0,0-2.85-2.68C9.71,45.79,4.84,44.67,0,43.44ZM39.55,31.79c4.33.13,7.69-2.85,7.39-6.39-.32-3.78-2.43-6.25-6.45-6.23s-6.33,2.11-6.42,6.12S36.28,31.35,39.55,31.79Z"></path></svg> 
                        </div>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='store.happy_clients' :duration='2' separator=',' decimalSeparator='.' :autoinit='true' class="num text-white my-2" />
                        <span class="subject text-white myUppercase">happy clients</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="counter_card d-flex flex-column align-items-center">
                        <div class="icon_container">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.64 409.64"><path d="M0,98.41V36.8C5.58,23.23,9.67,20.53,24.7,20.53q26.13,0,52.26,0h4.65V0H328V20.53h4.64c18.09,0,36.18-.13,54.26.1a36.87,36.87,0,0,1,12,2.16c6.31,2.31,8.8,8.06,10.71,14V98.41a29.23,29.23,0,0,0-.77,3c-5.93,42-36,73.12-77.62,80.15-2.57.44-3.44,1.36-3.67,4-.74,8.47-1.07,17.09-2.93,25.34-8.91,39.36-31.72,68-68.1,85.49-7.83,3.77-16.3,6.22-24.86,9.42q6.9,20.77,14.06,42.27h4.51c13.46,0,26.92,0,40.38,0,10.66,0,17.28,4.73,20.76,14.72q6.45,18.47,12.83,36.94c1.12,3.24,2,6.56,3,9.85H82.41a3.6,3.6,0,0,1,0-1.18c5.61-16.21,11.06-32.49,17-48.59,2.18-5.95,7-9.68,13.3-11a47.22,47.22,0,0,1,9.52-.71c13.85-.07,27.69,0,41.69,0L178,305.77c-.51-.48-.67-.75-.89-.82-1.14-.35-2.3-.65-3.45-1q-52.69-14.62-78.1-63A119.39,119.39,0,0,1,82.1,186.4c0-3.36-1.3-4.3-4.5-4.94-35.76-7.19-60.46-27.58-72.71-62.19C2.52,112.58,1.59,105.38,0,98.41Zm266.21,24.53c-13.83,0-26.61-.09-39.4.07-2.71,0-4-.85-5.07-3.27-5-11.34-10.1-22.6-15.19-33.88-.46-1-1-2-1.81-3.37-.92,1.85-1.6,3.12-2.18,4.43-4.92,10.92-9.87,21.82-14.66,32.8-1.05,2.41-2.33,3.33-5.06,3.29-11.46-.17-22.92-.08-34.38-.06-1.39,0-2.78.13-4.69.22,1.1,1.56,1.81,2.64,2.59,3.68,8.46,11.31,16.88,22.65,25.45,33.87a7.2,7.2,0,0,1,1.38,6.94c-3.16,12.06-6.08,24.18-9.25,37,1.77-.91,2.92-1.48,4-2.09,11.33-6.21,22.68-12.36,33.94-18.69a5.07,5.07,0,0,1,5.78,0c10.08,5.7,20.27,11.22,30.42,16.79,2.29,1.26,4.62,2.47,7.38,3.94-.16-1.05-.2-1.55-.32-2-2.92-11.75-6-23.47-8.67-35.27a8.67,8.67,0,0,1,1.22-6.09c3.81-5.62,8.05-10.95,12.12-16.38ZM328,61.68v79.43c1.7-.39,3.13-.57,4.46-1,16.63-5.71,27.77-17.13,33.15-33.64,2.1-6.45,2.6-13.54,3-20.39.5-8,.12-16.15.12-24.37ZM81.58,141V61.81H40.9c0,8.65.09,17,0,25.37-.17,12.7,3.4,24.15,11.25,34.15A55.28,55.28,0,0,0,81.58,141Z"></path></svg>
                        </div>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='store.music_awards' :duration='2' separator=',' decimalSeparator='.' :autoinit='true' class="num text-white my-2" />
                        <span class="subject text-white myUppercase">music awards</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="counter_card d-flex flex-column align-items-center">
                        <div class="icon_container">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.12 396.03"><path d="M370.43,0H372q0,67.4,0,134.8c0,48.13.13,96.26,0,144.39-.15,42.61-34.59,75-76.53,72.25a71.27,71.27,0,0,1-65.93-81.9c4.09-26.63,19-45.65,43.77-55.77,25.61-10.44,49.86-6.43,71.91,10.38.76.58,1.6,1.08,2.64,1.77v-117c-1.46.3-2.75.51-4,.84q-101.61,25.77-203.2,51.56c-6.11,1.55-6.1,1.58-6.1,8,0,55.46-.08,110.93,0,166.39,0,17.59-4.82,33.42-16,47.05-3.91,4.78-8.67,8.87-13,13.27H20.8c-8.53-6.29-15.21-14.26-20.8-23.2v-70.4a25,25,0,0,0,2.19-2.67C20.84,269.92,59,257.92,91.11,272.12c6.7,3,12.83,7.23,19.36,11V66.49c1.73-.52,3.23-1,4.76-1.41Q227.84,36.53,340.46,8C350.48,5.46,360.44,2.67,370.43,0Z"></path></svg>
                        </div>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='store.total_songs' :duration='2' separator='' decimalSeparator='.' :autoinit='true' class="num text-white my-2" />
                        <span class="subject text-white myUppercase">total songs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.bg-classic-guitar {
    min-height: 450px;
    background-image: url(../../assets/img/counter_parallax.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .counter_card {
        .icon_container {
            height: 70px;
            width: 70px;

            svg {
                filter: brightness(0) invert(1);
                width: 100%;
                height: 100%;

                &:hover {
                    filter: invert(64%) sepia(33%) saturate(5686%) hue-rotate(359deg) brightness(100%) contrast(92%);
                }
            }


        }

        .num {
            font-size: 60px;
            font-weight: 600;
        }

        .subject {
            font-size: 26px;
            font-weight: 500;
        }
    }
}
</style>