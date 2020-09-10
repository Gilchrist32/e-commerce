<template>
   <v-card class="mx-auto" flat id="features">

       <v-container>
           <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    <h2>FEATURES PRODUCTS</h2>
                </div>
                
                <div class="categories">
                    <div class="row">
                        <div class="col-3 ">
                            <v-img src="@/assets/features/LongSleeve.jpg" />
                        </div>
                        <div class="col-3">
                            <v-img src="@/assets/features/dress.jpg" />
                        </div>
                        <div class="col-3">
                            <v-img src="@/assets/features/jacket.jpg" />
                        </div>
                         <div class="col-3">
                            <v-img src="@/assets/features/pants.jpg" />
                        </div>
                    </div>
                    
                     <div class="row">
                        <div class="col-3">
                            <v-img src="@/assets/features/mens-pants-500x500.jpg" />
                        </div>
                        <div class="col-3">
                            <v-img src="@/assets/features/shoes.jpg" />
                        </div>
                        <div class="col-3">
                            <v-img src="@/assets/features/LSSleeve.jpg" />
                        </div>
                         <div class="col-3">
                            <v-img src="@/assets/features/sfp.jpg" />
                        </div>
                    </div>
                </div>
            </v-flex>
       </v-container>
   </v-card>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'features',
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
h2 {
    font-size: 1.5rem;
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