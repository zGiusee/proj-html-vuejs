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
                            linkName: 'Checkout',
                            url: '#'
                        },
                        {
                            linkName: 'Report Abuse',
                            url: '#'
                        },
                        {
                            linkName: 'Redeem Voucher',
                            url: '#'
                        },
                        {
                            linkName: 'Order Status',
                            url: '#'
                        }
                    ],
                    listTitle2: 'SUPPORT',
                    liLinks2: [
                        {
                            linkName2: 'Policies & Rules',
                            url2: '#'
                        },
                        {
                            linkName2: 'Privacy Policy',
                            url2: '#'
                        },
                        {
                            linkName2: 'License Policy',
                            url2: '#'
                        },
                        {
                            linkName2: 'My Account',
                            url2: '#'
                        },
                        {
                            linkName2: 'Locality',
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
        <div class="top-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <h3>BOOKINGS</h3>
                        <p class="info mb-2">
                            502 New Design Str, 
                            Melbourne, San Francisco, 
                            CA 94110, United States Of 
                            America​ Australia
                        </p>
                        <p class="number mb-2">
                            T: 1 123-456-789
                        </p>
                        <p class="info-email mb-4">
                            Email: <a href="#">demo@example.com</a>
                        </p>
                        <div class="icons">
                            <a href="#"><i class="bi bi-instagram light"></i></a>
                            <a href="#"><i class="bi bi-facebook light"></i></a>
                            <a href="#"><i class="bi bi-twitter light"></i></a>
                            <a href="#"><i class="bi bi-youtube light"></i></a>
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
                        <h3>
                            NEWSLETTER
                        </h3>
                        <div class="email">
                            <input type="email" class="form-control" id="email" placeholder="Email">
                        </div>
                        <div class="text_area">
                            <textarea class="form-control" id="text_area" rows="3" placeholder="Message"></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="copyright">
                            <h6>© 2024 All Rights Reserved. Developed By Ciccio</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.top-footer{
    width: 100%;
    background-color: black;
    color: white;
    height: 500px;
    display: flex;
    align-items: center;
    padding: 0px 20px;

    .info{
        padding-right: 100px;
    }

    p{
        color: rgb(165, 165, 165);
        line-height: 25px;
        font-size: 1rem;
        letter-spacing: 2px;
    }

    a{
        text-decoration: none;
        color: rgb(165, 165, 165);
        &:hover{
            color: #F2870C;
        }
    }

    .light{
        color: white;
        margin-right: 25px;
        &:hover{
            color: #F2870C;
        }
    }

    li{
        line-height: 35px;
        font-size: 1rem;
        letter-spacing: 2px;
        list-style: none;
    }

    footer{
        overflow: hidden;
    }

    h3{
        margin-bottom: 1.7rem;
        font-size: 1.7rem;
        font-weight: bold;
    }

    #text_area{
        border: 1px solid rgb(57, 57, 57);
        margin-top: 15px;
        padding: 10px;
        margin-bottom: 15px;
    }

    #email{
        border: 1px solid rgb(57, 57, 57);
        padding: 10px;
    }

    textarea::placeholder{
        color: rgb(57, 57, 57);
        padding: 10px;
    }

    input::placeholder{
        color: rgb(57, 57, 57);
        padding: 10px;
    }

    button{
        border: 1px solid #F2870C;
        padding: 10px 60px;
        background-color: transparent;
        color: white;
        &:hover{
            background-color: #F2870C;
            transition: 0.3s;
        }
    }
}
.bottom-footer{
    width: 100%;
    border-top: 1px solid rgb(57, 57, 57);
    background-color: black;
    color: white;
    height: 90px;
    display: flex;
    align-items: center;
    .copyright{
        text-align: center;
        h6{
            color: rgb(165, 165, 165);
            letter-spacing: 1px;
            font-size: 1rem;
        }
    }
}
</style>