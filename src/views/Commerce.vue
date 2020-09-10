<template>
  <div id="home">


    <scroll-indicator />

    <Navbar />

    <main-bar>

      <home />

      <store />

      <features />

      <about />

      <services />

      <Footer />
    
    </main-bar>
    
  </div>
</template>

<script>
  export default {
    name: 'Commerce',
    components: {
      ScrollIndicator: () => import('@/components/mixin/ScrollIndicator'),
      Navbar: () => import('@/components/layout/Navbar'),
      MainBar: () => import('@/components/layout/MainBar'),
      Home: () => import('@/components/pages/Home'),
      Store: () => import("@/components/pages/Store"),
      Features: () => import('@/components/pages/Features'),
      About: () => import('@/components/pages/About'),
      Services: () => import('@/components/pages/Services'),
      Footer: () => import('@/components/layout/Footer')
    }
  }
</script>