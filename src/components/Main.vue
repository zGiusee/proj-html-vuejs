<script>
import AppOutNow from './main_components/AppOutNow.vue';
import WhoWeAreDue from './main_components/WhoWeAreDue.vue';
import sense_the_jazz_1 from './main_components/sense_the_jazz_1.vue';
import BestMusicBlog from './main_components/BestMusicBlog.vue';
import JumbotronSlider from './main_components/JumbotronSlider.vue';
import AppCounter from './main_components/AppCounter.vue';
export default {
    name: 'Main',
    components: {
        AppOutNow,
        WhoWeAreDue,
        JumbotronSlider,
        AppCounter,
        BestMusicBlog,
        sense_the_jazz_1,
    },
    data() {
        return {
            wwr_gallery: [
                {
                    title: 'A roll and bang the floor',
                    img: '../src/assets/img/gallery1.jpg',
                },
                {
                    title: 'Your melody to our music',
                    img: '../src/assets/img/gallery2.jpg',
                },
                {
                    title: 'Touching heaven on frequency',
                    img: '../src/assets/img/gallery3.jpg',
                },
                {
                    title: 'Music makes stronge beats',
                    img: '../src/assets/img/gallery4.jpg',
                },
                {
                    title: 'Sound is the spark of times',
                    img: '../src/assets/img/gallery5.jpg',
                },
                {
                    title: 'Make your night groovy',
                    img: '../src/assets/img/gallery6.jpg',
                },
            ],

            wwr_icons: [
                {
                    title: 'youtube',
                    img: '../src/assets/img/image (20).svg',
                },

                {
                    title: 'nota musicale',
                    img: '../src/assets/img/image (16).svg'
                }
            ],
            jumbotronSlides: [
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
            ],
            bmb_cards: [
                {
                    title: 'Hip Hop wired to dance make',
                    date: '06 November 2021',
                    img: '../src/assets/img/hip_hop_wired_to_dance_make.jpg',
                    content: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former',
                },
                {
                    title: 'Music business worldwide',
                    date: '27 May 2022',
                    img: '../src/assets/img/music_business-worldwide.jpg',
                    content: 'Accelerate work and drive productivity The Beatles experimentation and creative freedom led other bands to experiment in various ways as well.',
                },
                {
                    title: 'Giveaways rock to all',
                    date: '07 May 2022',
                    img: '../src/assets/img/giveaways_rock.jpg',
                    content: 'Signs Your Car Battery Has To Be Replaced When the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and',
                },
                {
                    title: 'Drowned in sound feel joy',
                    date: '10 April 2022',
                    img: '../src/assets/img/drowned_in_sound_feel_joy.jpg',
                    content: 'Different Types of Music Content For most music creators, they take their work very seriously because of the emotional attachment they may harbor',
                },
                {
                    title: 'Dancing astronaut bounce ipsum',
                    date: '10 April 2022',
                    img: '../src/assets/img/dancing_astronaut_bounce_ipsum.jpg',
                    content: 'Music Promotion Channels There are really a lot of music promotion channels out there. Being a music promotion channel involves a lot of work and',
                },
                {
                    title: 'Consequence of sound make us',
                    date: '14 February 2022',
                    img: '../src/assets/img/consequence_of_sound_make_us.jpg',
                    content: 'Electronic Dance Music Rhythm and Blues Before this, R &amp; B was known as ‘race music,’ a term that originated in the African American',
                },
                {
                    title: 'Artist development and production',
                    date: '07 December 2021',
                    img: '../src/assets/img/artist_development_and_production.jpg',
                    content: 'Characterised by its own beat patterns, the lyrics feature what is often extreme violence snd talk of criminal acts. As a result, theres been',
                },
            ],
        }
    },
}
</script>
<template>
    <div>
        <JumbotronSlider id="jumbotron_slider" :slides="jumbotronSlides"></JumbotronSlider>
        <sense_the_jazz_1></sense_the_jazz_1>
        <WhoWeAreDue :wwr_gallery="wwr_gallery" :wwr_icons="wwr_icons" />
        <AppOutNow></AppOutNow>
        <AppCounter />
        <BestMusicBlog :bmb_cards="bmb_cards" />
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>