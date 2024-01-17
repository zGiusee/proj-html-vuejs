<script>
export default {
    data() {
        return {
            headerLinks: [
                {
                    linkName: 'Home',
                    linkRef: '#',
                },
                {
                    linkName: 'Blog',
                    linkRef: '#',
                },
                {
                    linkName: 'Events',
                    linkRef: '#',
                    linkSection: [
                        {
                            linkSectionName: 'Choral Music',
                            linkSectionRef: '#',
                        },
                        {
                            linkSectionName: 'Concert Band',
                            linkSectionRef: '#',
                        },
                        {
                            linkSectionName: 'Opera Concerts',
                            linkSectionRef: '#',
                        },
                        {
                            linkSectionName: 'Symphony Orchestra',
                            linkSectionRef: '#',
                        },
                        {
                            linkSectionName: 'Family Concerts',
                            linkSectionRef: '#',
                        },

                    ],
                },
                {
                    linkName: 'Gallery',
                    linkRef: '#',
                },
                {
                    linkName: 'About Us',
                    linkRef: '#',
                },
                {
                    linkName: 'Conctact Us',
                    linkRef: '#',
                },
                {
                    linkName: 'Shop',
                    linkRef: '#',
                    linkSection: [
                        {
                            linkSectionName: 'Product Type',
                            linkSectionRef: '#',
                            linkSectionTypes: [
                                {
                                    typesName: 'Simple Product',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'Exsternal/Affiliate Product',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'Downloadable Product',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'Group Product',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'In.Stock Product',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'Variable Product',
                                    typesRef: '#',
                                },
                            ],
                        },
                        {
                            linkSectionName: 'Shop Page',
                            linkSectionRef: '#',
                            linkSectionTypes: [
                                {
                                    typesName: 'Checkout',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'Cart',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'Downloads',
                                    typesRef: '#',
                                },
                                {
                                    typesName: 'My Account',
                                    typesRef: '#',
                                },
                            ],
                        },

                    ],
                },
            ],

        }
    },
    methods: {

    },
}
</script>
<template>
    <header class="container-fluid bg-black">
        <div class="row h-100 align-items-center">

            <div class="col-6">
                <div class="logo-container">
                    <img src="../assets/img/Logo.png" alt="">
                </div>
            </div>

            <div class="col-6">
                <div class="nav-list-container">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>
    </header>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

header {
    height: 102px;
    position: fixed;
    z-index: 999;

    .logo-container {
        margin-left: 25px;

        img {
            width: 170px;
        }
    }



}
</style>