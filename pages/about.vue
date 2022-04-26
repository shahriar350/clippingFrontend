<template>
  <b-container>
    <h4 class="py-3 text-center">About us</h4>
    <div class="ql-editor bg-white p-4">
      <div v-html="basic.about_us"></div>
    </div>

  </b-container>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'about',
  head(){
    return {
      title: 'About us',
    }
  },
  computed: {
    ...mapGetters({
      basic: 'get_basic'
    })
  },
  updated() {
    let images = document.querySelectorAll("img");
    const width_screen = window.innerWidth
    console.log(width_screen)
    for (let i = 0; i < images.length; i++) {
      if (images[i].width >= width_screen){
        images[i].style.width = "100%"
      }
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/quill.core.css';
</style>
