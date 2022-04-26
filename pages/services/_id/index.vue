<template>
  <b-container>
    <h3 class="py-3 border-bottom mb-3 text-center">{{ service.name }}</h3>
    <image-compare :padding="{ left: 50, right: 50 }" :before="service.compare_image_before" :after="service.compare_image_after"/>
    <b-card-body>
      <div v-html="service.description"></div>
    </b-card-body>
  </b-container>
</template>

<script>

export default {
  name: 'service',
  head(){
    return {
      title: `${this.service.name}`,
    }
  },
  data() {
    return {
      service: {},
    }
  },
  async fetch() {
    await this.$axios.get(`/api/service/${this.$route.params.id}/`)
      .then(res => {
        this.service = res.data
      })
  },
  updated() {

  }
}
</script>
