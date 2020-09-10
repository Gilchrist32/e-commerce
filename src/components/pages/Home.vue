<template>
  <section id="home">

      <v-layout class="hero-container">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-col cols="12" md="7" sm="12">
                <h1 
                  class="display-2 font-weight-black pb-6 title-company" 
                  style="color: #313131;"
                >Give Your Workout <br>
                A New Style!</h1>
                <p class="grey--text">
                  Success isn't always greatness. It's about consistency.<br/>
                  Consistent hard work gain success. Greatness will come.
                </p>
                <v-btn 
                  x-large 
                  class="mt-3 text-capitalize" 
                  id="btn"
                  rounded 
                  depressed
                  @click="authDialog = true"
                >
                  Sign Up for free
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
                
              </v-col>
              <v-col cols="12" md="5" class="d-none d-md-flex">
                <img 
                  src="@/assets/img/fashion.svg" 
                  alt="hero" 
                  max-width="50"
                  class="side-fashion-img d-block ml-auto mr-auto"
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-layout>

      <sign-in-up-modal
        :visible="authDialog"
        @close="authDialog = false"
      />

  </section>
</template>

<script>
  export default {
    name: 'home-section',
    data () {
      return {
        authDialog: false
      }
    },
    
    components: {
     // SignInUpModal: () => import('@/components/pages/modals/Sign-In-Up-Modal')
    }
  }
</script>

<style scoped lang="scss">
.hero-container {
  min-height: 100vh !important;
  margin: 0 100px;
}
.side-fashion-img {
  position: relative;
  right: 100px;
}
.title-company {
  font-family: 'Poppins', sans-serif !important;
}
#home{
    background: radial-gradient(#fff,#ffd6d6);
}
#btn{
    background: #ff523b;
    color:#fff;
    padding: 8px 30px;
    margin: 30px 0;
}
</style>