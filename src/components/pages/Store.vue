<template>
    <section id="store">

        <v-card class="mx-auto" flat id="card">
            <v-container>
                <v-row>
                    <v-col>
                        <h1 
                            class="font-weight-bold pb-3 text-center" 
                            style="font-size: 1.8rem; color: #0a0a3a;"
                        >
                        Products
                        </h1>
                    </v-col>
                </v-row>
            </v-container>
        <v-btn class="ml-5" color="#F48FB1" depressed>All Products &#8594;</v-btn>
        <v-container>
            <v-card id="products">
            <horizontal-list :items="jackets" class="mx-12">
                <template v-slot:default="{ item }">
                    <v-hover v-slot:default="{hover}">
                        <v-card flat outlined :class="{ up: hover }" :elevation="hover ? 7 : 0" max-width="300" align="center">
                            <v-img height="200px" width="150" :src="item.image" :lazy-src="item.image">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                            </v-img>
                            <v-card-text class="px-3" align="left">
                                <div class="text--primary font-weight-medium">
                                    {{ item.jacket }}
                                </div>
                                <div class="text-secondary pt-2">
                                    {{ item.price }}
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  block class="pa-0" depressed color="#F48FB1">
                                    Buy Now
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </template>
            </horizontal-list>
            </v-card>
        </v-container>

         <v-container>
            <v-card id="products">
            <horizontal-list :items="shirt" class="mx-12">
                <template v-slot:default="{ item }">
                    <v-hover v-slot:default="{hover}">
                        <v-card flat outlined :class="{ up: hover }" :elevation="hover ? 7 : 0" max-width="300" align="center">
                            <v-img height="200px" width="150" :src="item.image" :lazy-src="item.image">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                            </v-img>
                            <v-card-text class="px-3" align="left">
                                <div class="text--primary font-weight-medium">
                                    {{ item.jacket }}
                                </div>
                                <div class="text-secondary pt-2">
                                    {{ item.price }}
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  block class="pa-0" depressed color="#F48FB1">
                                    Buy Now
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </template>
            </horizontal-list>
            </v-card>
        </v-container>
        </v-card>
    </section>
</template>

<script>
    export default {
        name: 'english-video-section',
        
        components: {
            HorizontalList: () => import('vue-horizontal-list')
        },
        data () {
            return {
                jackets: [
                    {
                        id: 0,
                        jacket: "Jacket Long Sleeve Men",
                        price: '₱ 1280.00',
                        image: 'https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/jacket%2Fmen%2F3.jpg?alt=media&token=8f7bc3bc-df35-4d0d-9f5e-74f0c07a07b6'
                    },
                    {
                        id: 1,
                        jacket: "Jacket Red Long Sleeve Men",
                        price: "₱ 800.00",
                        image: "https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/jacket%2Fmen%2F7.jpg?alt=media&token=962a0199-7bfb-456e-97b2-ace7fb8b3205"
                    },
                    {
                        id: 2,
                        jacket: "Stripe Jacket Female",
                        price: "₱ 400.00",
                        image: 'https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/jacket%2Ffemale%2F1.jpg?alt=media&token=4b95a15c-3849-489a-9922-5ea6cd30c0ef'
                    },
                    {
                        id: 3,
                        jacket: "Sport Jacket Female",
                        price: "₱ 600.00",
                        image: 'https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/jacket%2Ffemale%2F7.jpg?alt=media&token=9ef81dcf-fbb6-46c2-acae-f33a0c286134'
                    },
                ],
                shirt: [
                    {
                        id: 0,
                        jacket: "Polo Shirt for Female",
                        price: '₱ 220.00',
                        image: 'https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/shirt%2Ffemale%2F1.jpg?alt=media&token=42bbcd36-7f3b-47cf-80a7-212e440a4601'
                    },
                    {
                        id: 1,
                        jacket: "Polo",
                        price: "₱ 140.00",
                        image: "https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/shirt%2Ffemale%2F2.jpg?alt=media&token=2d452e9a-9519-4bd5-b86e-1b57353b3902"
                    },
                    {
                        id: 2,
                        jacket: "Unicorn Shirt Female",
                        price: "₱ 110.00",
                        image: 'https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/shirt%2Ffemale%2F3.jpg?alt=media&token=ddd90fda-2cfa-4526-b75b-921255c36388'
                    },
                    {
                        id: 3,
                        jacket: "Customised Designer T-Shirt ",
                        price: "₱ 110.00",
                        image: 'https://firebasestorage.googleapis.com/v0/b/login-6709e.appspot.com/o/shirt%2Ffemale%2F4.jpg?alt=media&token=fa5a39aa-e9fa-4d7c-8394-e0818f9fc985'
                    },
                ]
            }
        }
    }
</script>
<style  scoped>
#card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 100vh;
    padding-top: 50px;
}
.v-card--reveal{
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    }
#products{
    background: radial-gradient(#fff,#ffd6d6);
}
</style>