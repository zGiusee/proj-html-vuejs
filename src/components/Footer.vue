<script>
import FooterSlide from './FooterSlide.vue';
export default {
    components:{
        FooterSlide
    },
    name: 'Footer',
    data() {
        return {
            footerList: [
                {
                    listTitle: 'INFORMATION',
                    liLinks: [
                        {
                            linkName: 'Product Support',
                            url: '#'
                        },
                        {
                            linkName: 'Product Support',
                            url: '#'
                        },
                        {
                            linkName: 'Product Support',
                            url: '#'
                        },
                        {
                            linkName: 'Product Support',
                            url: '#'
                        },
                        {
                            linkName: 'Product Support',
                            url: '#'
                        }
                    ],
                    listTitle2: 'SUPPORT',
                    liLinks2: [
                        {
                            linkName2: 'balbalbalbalab',
                            url2: '#'
                        },
                        {
                            linkName2: 'balbalbalbalab',
                            url2: '#'
                        },
                        {
                            linkName2: 'balbalbalbalab',
                            url2: '#'
                        },
                        {
                            linkName2: 'balbalbalbalab',
                            url2: '#'
                        },
                        {
                            linkName2: 'balbalbalbalab',
                            url2: '#'
                        },
                    ]
                }
            ]
        }
    },
}
</script>
<template>
    <footer>
        <FooterSlide />
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <h3>BOOKINGS</h3>
                    <div class="icons">
                        icon icon icon icon
                    </div>
                </div>
                <div class="col-3">
                    <ul v-for="(list, index) in footerList" :key="index">
                        <h3>
                            {{ list.listTitle }}
                        </h3>
                        <li v-for="(link, index) in list.liLinks" :key="index">
                            <a :href="link.url">{{ link.linkName }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul v-for="(list, index) in footerList" :key="index">
                        <h3>
                            {{ list.listTitle2 }}
                        </h3>
                        <li v-for="(link, index) in list.liLinks2" :key="index">
                            <a :href="link.url2">{{ link.linkName2 }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <div class="email">
                        <input type="email" class="form-control" id="email" placeholder="Email">
                    </div>
                    <div class="text_area">
                        <textarea class="form-control" id="text_area" rows="3"></textarea>
                    </div>
                    <div class="button">
                        <button type="submit" class="btn btn-primary mb-3">SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

footer{
    overflow: hidden;
}

h3{
    &:hover{
        color: orange;
    }
}
</style>