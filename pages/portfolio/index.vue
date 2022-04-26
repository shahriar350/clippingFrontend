<template>
  <b-container>
    <div class="">
      <h4 class="py-3 text-center ">Our portfolio</h4>
      <b-row cols-md="1">
        <b-col class="mb-3" v-for="(portfolio,index) in portfolios" :key="index">
          <b-row cols-md="2" cols="1">
            <b-col class="">
              <image-compare :padding="{ left: 50, right: 50 }" :before="portfolio.image_before"
                             :after="portfolio.image_after"/>
            </b-col>
            <b-col class="bg-white ">
              <h6 class="py-2">{{ portfolio.name }}</h6>
              <p>{{ portfolio.short_description }}</p>
              <nuxt-link :to="`/portfolio/${portfolio.id}`">Read more...</nuxt-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  name: 'portfolio',
  head(){
    return {
      title: 'Portfolio',
    }
  },
  data() {
    return {
      portfolios: [],
    }
  },
  async fetch() {

    await this.$axios.get('/api/portfolio/')
      .then(res => {
        this.portfolios = res.data
      })

  },
}
</script>
