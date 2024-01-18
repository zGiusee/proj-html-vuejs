<script>
export default {
    data() {
        return {
            headerLinks: [
                {
                    linkName: 'Home',
                    linkRef: '#',
                    active: true,
                },
                {
                    linkName: 'Blog',
                    linkRef: '#',
                    active: false,
                },
                {
                    linkName: 'Events',
                    linkRef: '#',
                    active: false,
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
                    active: false,
                },
                {
                    linkName: 'About Us',
                    linkRef: '#',
                    active: false,
                },
                {
                    linkName: 'Conctact Us',
                    linkRef: '#',
                    active: false,
                },
                {
                    linkName: 'Shop',
                    linkRef: '#',
                    active: false,
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
                            active: false,
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
        <div class="row h-100 align-items-center my-padding-x">

            <div class="col-6">

                <div class="logo-container">
                    <img src="../assets/img/Logo.png" alt="">
                </div>

            </div>

            <div class="col-6">
                <div class="nav-list-container position-relative ">

                    <ul class="link_list">
                        <li v-for="link, index in headerLinks" :key="index" :href="link.linkRef"
                            :class="link.active ? 'active' : ''" class="link_list_li">{{ link.linkName }}
                        </li>
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
    text-transform: uppercase;

    .logo-container {

        img {
            width: 170px;
        }
    }

    .nav-list-container {
        display: flex;
        justify-content: end;

        .link_list {
            display: flex;
            list-style-type: none;
            margin: 0px;

            .link_list_li {
                color: white;
                font-size: 15px;
                letter-spacing: 0.5px;
                font-weight: bold;
                padding: 2rem;
                cursor: pointer;
                transition: 0.3s;

                &.active {
                    color: $main_color;
                }

                &:hover {
                    color: $main_color;
                }

                // .link_section_list {
                //     list-style-type: none;
                //     position: absolute;
                //     padding: 0px;
                //     background-color: $main_grey;

                //     .link_section_list_li {
                //         padding: 15px 10px 15px 10px;
                //         border-bottom: 0.5px solid white;
                //     }
                // }
            }


        }
    }

}


.my-padding-x {
    padding: 0rem 2rem;
}
</style>