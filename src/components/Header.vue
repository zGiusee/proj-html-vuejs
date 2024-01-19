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

                    <!-- PRIMA CICLATA DELLA BARRA DI NAVIGAZIONE CON CONDIZIONE -->
                    <!-- CONDIZIONE PER PER L'ICONA 'CHEVRON' ALLE VOCI 'EVENTS' E 'SHOP' -->
                    <ul class="link_list">
                        <li v-for="link, index in headerLinks" :key="index" :href="link.linkRef"
                            :class="link.active ? 'active' : ''" class="link_list_li" :id="link.linkName">
                            <span class="link">{{ link.linkName }}</span> <i v-if="link.linkName == 'Events'"
                                class="bi bi-chevron-down"></i>
                            <i v-else-if="link.linkName == 'Shop'" class="bi bi-chevron-down"></i>

                            <!-- SECONDA CICLATA (SECTION LIST) CON CONDIZIONE -->
                            <!-- CONDIZIONE DI CONTROLLO PER FAR SI CHE NON SI CREINO SOTTOLISTE ANCHE DOVE NON SONO NECESSARIE -->
                            <ul class="link_section_list" v-if="link.linkSectionDropDownEvents">
                                <li v-for="section_url, index in link.linkSection" :key="index">
                                    {{ section_url.linkSectionName }}
                                </li>
                            </ul>

                            <!-- SECONDA CICLATA (SECTION LIST) CON CONDIZIONE -->
                            <!-- CONDIZIONE DI CONTROLLO PER FAR SI CHE NON SI CREINO SOTTOLISTE ANCHE DOVE NON SONO NECESSARIE -->
                            <ul class="link_section_list_right" v-if="link.linkSectionDropDownShop">
                                <li class="link_section_list_li position-relative"
                                    v-for="section_url, index in link.linkSection" :key="index" :id="section_url.id">
                                    <span class="section_url">{{ section_url.linkSectionName }}</span> <i
                                        class="bi bi-chevron-right chevron-position"></i>

                                    <!-- TERZA CICLATA (TYPES LIST) CON CONDIZIONE -->
                                    <!-- CONDIZIONE DI CONTROLLO PER FAR SI CHE NON SI CREINO SOTTOLISTE ANCHE DOVE NON SONO NECESSARIE -->
                                    <ul class="link_types_list_shop" v-if="section_url.linkSectionTypesDropDownShop">
                                        <li v-for="types_url, index in section_url.linkSectionTypes" :key="index">
                                            {{ types_url.typesName }}
                                        </li>
                                    </ul>

                                    <!-- TERZA CICLATA (TYPES LIST) CON CONDIZIONE -->
                                    <!-- CONDIZIONE DI CONTROLLO PER FAR SI CHE NON SI CREINO SOTTOLISTE ANCHE DOVE NON SONO NECESSARIE -->
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
@use '../styles/partials/mixins' as *;

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



    }

}

// PRIMA LISTA (PRIMA CICLATA VOCI NAV-MENU)
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


        &.active {
            color: $main_color;
        }
    }

}

// HOVER PRIMA LISTA
.link:hover {
    transition: 0.2s;
    color: $main_color;
}


// SECTION LIST (SECONDA CICLATA, LISTA NORMALE E DESTRA[SHOP])

// NORMALE
.link_section_list {
    @include ul_header_default_config;
    top: 102px;

    li {
        @include li_style;
        transition: 0.2s;

    }
}

// HOVER EVENTS
#Events:hover .link_section_list {
    display: block;
}

.link_section_list:hover {
    display: block;
}

.link_section_list li:hover {
    color: $main_color;
}



// DESTRA[SHOP]
.link_section_list_right {
    @include ul_header_default_config;
    top: 102px;
    right: 90px;

    .link_section_list_li {
        @include li_style;
    }
}

//HOVER SHOP [DESTRA]

#Shop:hover .link_section_list_right {
    display: block;
}

.link_section_list_right:hover {
    display: block;
}

// HOVER SECITON URL
.section_url:hover {
    color: $main_color;
    transition: 0.2s
}


// TYPE LIST (TERZA CICLATA, PRODUCT E SHOP)

// PRODUCT
.link_types_list_product {
    @include ul_header_default_config;
    top: 0px;
    right: 300px;

    li {
        @include li_style;
        transition: 0.2s;
    }
}

// HOVER DI PRODUCT TYPES
#ProductType:hover .link_types_list_product {
    display: block;
}

.link_types_list_product:hover {
    display: block;
}

.link_types_list_product li:hover {
    color: $main_color;
}


// SHOP
.link_types_list_shop {
    @include ul_header_default_config;
    top: 0px;
    right: 300px;

    li {
        @include li_style;
        transition: 0.2s;
    }
}

// HOVER DI SHOP TYPES
#ShopPage:hover .link_types_list_shop {
    display: block;
}

.link_types_list_shop:hover {
    display: block;
}

.link_types_list_shop li:hover {
    color: $main_color;
}


// CHEVRON ICONS

// SEZIONE
.bi-chevron-down::before {
    font-size: 9px;
    margin-left: 5px;
    margin-bottom: 10px;
    vertical-align: middle;
}

// SOTTO SEZIONE
.bi-chevron-right::before {
    margin-bottom: 10px;
    font-size: 9px;
    vertical-align: middle;
    position: absolute;
    bottom: 12px;
    right: 10px;
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