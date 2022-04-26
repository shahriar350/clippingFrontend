<template>
  <b-container>
    <b-row cols="1">
      <b-col class="mb-3 mt-4">
        <image-compare :padding="{ left: 50, right: 50 }" :before="portfolio.image_before"
                       :after="portfolio.image_after"/>
      </b-col>
      <b-col class="bg-white px-4 py-3 rounded">
        <h6>{{ portfolio.name }}</h6>
        <div v-html="portfolio.description"></div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'portfolio_',
  head(){
    return {
      title: `${this.portfolio.name}`
    }
  },
  data() {
    return {
      portfolio: {},
    }
  },
  async fetch(){
    await this.$axios.get(`/api/portfolio/${this.$route.params.id}/`)
      .then(res => {
        this.portfolio = res.data
      })
  }
}
</script>
