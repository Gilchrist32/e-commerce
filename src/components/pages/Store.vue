<template>
   <v-card class="mx-auto store" flat id="store">

       <v-container>
            <div class="font-weight-normal text-uppercase subtitle text-center">
                <h2>PRODUCTS</h2>
            </div>    
            <p>Jacket list</p>
            <v-row>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Jacket/Men/3.jpg" width="150" height="150"></v-img>
                            <v-card-text>Jacket Long Sleeve Men</v-card-text>
                             ₱ 1280.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Jacket/Men/7.jpg" width="150" height="150"></v-img>
                            <v-card-text>Jacket Red Long Sleeve Men</v-card-text>
                             ₱ 800.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Jacket/Female/1.jpg" width="150" height="150"></v-img>
                            <v-card-text> Stripe Jacket Female</v-card-text>
                             ₱ 400.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Jacket/Female/7.jpg" width="150" height="150"></v-img>
                            <v-card-text> Sport Jacket Female</v-card-text>
                             ₱ 600.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <a href="" class="ma-auto">Show more &#8594;</a>
            </v-row>
            <p>Shirt list</p>
            <v-row>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Shirt/Female/1.jpg" width="150" height="150"></v-img>
                            <v-card-text>Polo Shirt for Female</v-card-text>
                             ₱ 220.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Shirt/Female/2.jpg" width="150" height="150"></v-img>
                            <v-card-text>Polo</v-card-text>
                             ₱ 140.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Shirt/Female/3.jpg" width="150" height="150"></v-img>
                            <v-card-text>Unicorn Shirt Female</v-card-text>
                             ₱ 110.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="3" class="mb-4">
                    <v-hover v-slot:default="{hover}">
                        <v-card class="product" align="center">
                            <v-img src="@/assets/Products/Shirt/Female/4.jpg" width="150" height="150"></v-img>
                            <v-card-text>Customised Design t-shirt</v-card-text>
                             ₱ 110.00
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                                style="height: 100%">
                                <v-btn outlined color="white">Detail</v-btn>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <a href="" class="ma-auto">Show more &#8594;</a>
            </v-row>
       </v-container>
   </v-card>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'store',
        computed: {
            ...mapState(['mode'])
        }
    }
</script>

<style scoped lang="scss">
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 100vh;
    padding-top: 50px;
}
.product{
    min-height: 20vh;
}

.v-card--reveal{
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    }
h2 {
    font-size: 2.2rem;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
.categories{
    margin: 0px 0;
}
.col-3{
    flex-basis: 30%;
    min-width: 200px;
}
.col-3 img{
    width: 50%;
}
</style>