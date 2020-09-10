<template>
    <section id="services">
        <v-layout>
            <v-container>
                <v-row class="goal-title">
                    <v-col>
                        <h1 
                            class="font-weight-bold pb-3 text-center" 
                            style="font-size: 1.8rem; color: #0a0a3a;"
                        >Feauture Products</h1>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>

        <v-layout>
            <v-container>
                <v-row class="mx-19 ml-7">
                    <v-col cols="5" md="4" sm=6 v-for="([src], i) in goals" :key="i">
                        <v-hover v-slot:default="{ hover }">
            
                            <v-img :src="src" max-width="150" :elevation="hover ? 10 : 0" class="d-block ml-auto mr-auto mt-5"
                            :class="{ 'zoom-efect': hover }" ></v-img>
             
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>

    </section>
</template>


<script>
    export default {
        name: 'goal-section',
        
        data () {
            return {
                goals: [
                    [require('@/assets/features/LongSleeve.jpg')],
                    [require('@/assets/features/dress.jpg')],
                    [require('@/assets/features/jacket.jpg')],
                    [require('@/assets/features/LSSleeve.jpg')],
                    [require('@/assets/features/pants.jpg')],
                    [require('@/assets/features/mens-pants-500x500.jpg')],
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
#services {
    min-height: 100vh;
}
.zoom-efect {
    transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    transform : scale(1.2);
    -moz-transform : scale(1.2);
    -webkit-transform : scale(1.2);
    -o-transform : scale(1.2);
    -ms-transform : scale(1.2);
}
</style>