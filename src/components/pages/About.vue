<template>
    <v-card
        class="mx-auto"
        flat
        id="about"
    >
        <v-container data-aos="zoom-in">
            <v-card-text class="font-weight-normal text-uppercase subtitle">
                <span>ABOUT</span>
            </v-card-text>
            <v-card-text class="font-weight-bold text-uppercase title">
                <h2>SHOPEE STORE</h2>
            </v-card-text>
            <v-card-text class="about-text" :style="mode ? 'font-weight: normal;' : ''">
                E-Shopping is a boon as it saves lot of time. Online shopping is a process whereby consumers directly buy goods, services etc. from a seller without an intermediary service over the Internet. Shoppers can visit web stores from the comfort of their house and shop as by sitting in front of the computer. 
                <br />
                <br />
             Online stores are usually available 24 hours a day and many consumers have internet access both at work and at home. So it is very convenient for them to shop Online. One of the most enticing factors about online shopping, particularly during holiday season is, it alleviates the need to wait in long lines or search from a store for a particular item. Variety of goods are available in online. So the researcher want to know the preference of the consumers. So fifty respondents were met and data were collected regarding their preference towards shopping online.
            </v-card-text>
        </v-container>
    </v-card>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'about',
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
.about-text {
    text-align: justify;
    text-justify: inter-word;
    line-height: 2rem;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
}
h2 {
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
</style>