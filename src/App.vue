<template>

  <v-app style="background-color: #f7f7f7">

    <router-view /> <!-- DYNAMIC WEB PAGES LOAD -->

    <BackToTop /> <!-- BACK TO TOP BUTTON -->

  </v-app>

</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>


<script>
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    components: {
      BackToTop: () => import('@/components/mixin/BackToTop')
    },
    computed: {
      ...mapState(['mode'])
    }
  }
</script>