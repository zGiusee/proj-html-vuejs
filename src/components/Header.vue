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
                    linkSectionDropDownEvents: true,
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
                    linkSectionDropDownShop: true,
                    linkSection: [
                        {
                            linkSectionName: 'Product Type',
                            id: 'ProductType',
                            linkSectionRef: '#',
                            linkSectionTypesDropDownProduct: true,
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
                            id: 'ShopPage',
                            linkSectionRef: '#',
                            active: false,
                            linkSectionTypesDropDownShop: true,
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
    <!-- HEADER -->
    <header class="container-fluid bg-black">
        <div class="row h-100 align-items-center my-padding-x">

            <!-- LOGO -->
            <div class="col-6">

                <div class="logo-container">
                    <img src="../assets/img/Logo.png" alt="">
                </div>

            </div>

            <!-- NAV LIST AND SEARCH BOX -->
            <div class="col-6 h-100">
                <div class="nav-list-container h-100">

                    <ul class="link_list">
                        <li v-for="link, index in headerLinks" :key="index" :href="link.linkRef"
                            :class="link.active ? 'active' : ''" class="link_list_li" :id="link.linkName">{{ link.linkName
                            }}

                            <ul class="link_section_list" v-if="link.linkSectionDropDownEvents">
                                <li v-for="section_url, index in link.linkSection" :key="index">
                                    {{ section_url.linkSectionName }}
                                </li>
                            </ul>

                            <ul class="link_section_list_right" v-if="link.linkSectionDropDownShop">
                                <li class="link_section_list_li" v-for="section_url, index in link.linkSection" :key="index"
                                    :id="section_url.id">
                                    {{ section_url.linkSectionName }}

                                    <ul class="link_types_list_shop" v-if="section_url.linkSectionTypesDropDownShop">
                                        <li v-for="types_url, index in section_url.linkSectionTypes" :key="index">
                                            {{ types_url.typesName }}
                                        </li>
                                    </ul>

                                    <ul class="link_types_list_product" v-if="section_url.linkSectionTypesDropDownProduct">
                                        <li v-for="types_url, index in section_url.linkSectionTypes" :key="index">
                                            {{ types_url.typesName }}
                                        </li>
                                    </ul>

                                </li>
                            </ul>



                        </li>
                    </ul>

                    <div class="search-container d-flex  justify-content-center">
                        <img src="../assets/img/search_icon.svg " alt="">
                    </div>

                </div>

            </div>

        </div>
    </header>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

#ProductType:hover .link_types_list_product {
    display: block;
}

.link_types_list_product {
    display: block;
}



#ShopPage:hover .link_types_list_shop {
    display: block;
}

.link_types_list_shop {
    display: block;
}




#Shop:hover .link_section_list_right {
    display: block;
}

.link_section_list_right:hover {
    display: block;
}

#Events:hover .link_section_list {
    display: block;
}

.link_section_list:hover {
    display: block;
}

.link_types_list_product li:hover {
    color: $main_color;
}

// HEADER STYLES
header {
    position: fixed;
    z-index: 999;
    text-transform: uppercase;
    height: 102px;

    .logo-container {

        img {
            width: 170px;
        }
    }

    // NAV BAR LIST MENU
    .nav-list-container {
        display: flex;
        justify-content: end;
        position: relative;

        .link_list {
            display: flex;
            list-style-type: none;
            padding: 0px;
            margin: 0px;
            height: 100%;

            .link_list_li {
                display: flex;
                align-items: center;
                color: white;
                font-size: 15px;
                letter-spacing: 0.5px;
                font-weight: bold;
                padding: 1.5rem;
                cursor: pointer;
                transition: 0.3s;


                &.active {
                    color: $main_color;
                }
            }

        }


    }

}


// SECTION LIST
.link_section_list {
    list-style-type: none;
    position: absolute;
    top: 102px;
    padding: 0px;
    background-color: $main_grey;
    display: none;

    li {
        width: 370px;
        padding: 15px 5px;
        border-bottom: 0.5px solid white;

    }
}

.link_section_list_right {
    list-style-type: none;
    position: absolute;
    top: 102px;
    right: 10px;
    width: 370px;
    padding: 0px;
    display: none;
    background-color: $main_grey;

    .link_section_list_li {
        padding: 15px 5px;
        border-bottom: 0.5px solid white;
    }
}

// TYPE LIST
.link_types_list_product {
    list-style-type: none;
    position: absolute;
    top: 0px;
    right: 370px;
    padding: 0px;
    background-color: $main_grey;
    display: none;

    li {
        width: 370px;
        padding: 15px 5px;
        border-bottom: 0.5px solid white;
    }
}

.link_types_list_shop {
    list-style-type: none;
    position: absolute;
    padding: 0px;
    top: 53px;
    right: 370px;
    display: none;
    background-color: $main_grey;

    li {
        width: 370px;
        padding: 15px 5px;
        border-bottom: 0.5px solid white;
    }
}


// SEARCH ICON
.search-container {
    padding: 1.5rem;

    img {
        filter: brightness(0) invert(1);
    }
}

// GENERAL POSITIONING
.my-padding-x {
    padding: 0rem 2rem;
}
</style>