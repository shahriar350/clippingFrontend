<template>
  <div>
    <b-container>
      <b-row cols-md="3" cols-sm="2" cols="1">
        <b-col v-for="(showcase,index) in showcases" :key="index" v-if="showcase.show_front">
          <image-compare hover :before="showcase.compare_image_before"
                         :after="showcase.compare_image_after">

          </image-compare>


        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'shows',
  data() {
    return {
      showcases: []
    }
  },
  async fetch() {
    await this.$axios.get('/api/showcase/')
      .then(res => {
        this.showcases = res.data
      })

  },
}
</script>
