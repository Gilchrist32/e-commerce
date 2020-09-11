<template>
    <v-card
        class="mx-auto services"
        flat
        id="services"
    >
        <v-container>

            <v-flex class="text-center heading">
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>SERVICE OFFER</h2>
                </v-card-text>
            </v-flex>

            <div class="offer">
                <div class="small-container">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-img src="@/assets/img/watch.svg" class="offer-img d-block ml-auto mr-auto" />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p>Exclusively Available on Shopee Store</p>
                            <h1>Smart Band 4</h1>
                            <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color
                            full-touch display with adjustable brightness, so everything is clear as can be. </small>

                            <br><br><br>
                            
                            <v-btn x-large class="mt-3 text-capitalize pa-7" 
                            rounded depressed id="btn"
                            @click="authDialog = true">Buy Now &#8594;
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </div>

        </v-container>
    </v-card>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
         name: 'services',
        computed: {
            ...mapState(['mode'])
        }
    }
</script>

<style scoped lang="scss">
.services {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    padding-top: 50px;
    min-height: 100vh;
    background: radial-gradient(#fff,#ffd6d6);
}
h2 {
    font-size: 2.2rem;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 0;
}

.number {
    font-size: 75px;
    line-height: 75px;
    font-weight: 400;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    opacity: .8;
    margin-bottom: 20px;
}
h5 {
    font-size: 40px;
    margin-bottom: 20px;
    color: #5c9ddd;
    text-shadow: 1px 1px rgb(39, 39, 39);
}
.offer{
    background: radial-gradient(#fff,#ffd6d6);
    margin-top: 10px;
    padding:30px 0;
}
.col-2 .offer-img{
    padding: 50px;
}
small{
    color: #555;
}
#btn{
    background: #ff523b;
    color:#fff;
    padding: 8px 30px;
    margin: 30px 0;
}
</style>