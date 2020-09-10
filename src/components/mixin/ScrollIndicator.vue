<template>
    <div id="indicator"></div>
</template>

<script>
    export default {
        name: 'indicator',
        mounted () {
            var vm = this
            window.addEventListener('scroll', () => {
                var scrollPos = window.scrollY
                var winHeight = window.innerHeight
                var docHeight = document.documentElement.scrollHeight // instead document.body.clientHeight
                var perc = 100 * scrollPos / (docHeight - winHeight)
                vm.$el.style.width = perc + '%'
            })
        }
    }
</script>

<style scoped>
#indicator{
  position: fixed;
  top:0;
  left:0;
  height: 6px;
  z-index: 999;
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #303F9F 0%, #7ee8fa 74%);
}
</style>