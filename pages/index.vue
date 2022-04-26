<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="sliding"
      :interval="4000"
      controls
      indicators
      background="#ababab"

      style="text-shadow: 1px 1px 2px #333;"

    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(banner,index) in banners" :key="index"
                        :caption="banner.text"
                        :img-src="banner.image"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <!--      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
      <!--        <h1>Hello world!</h1>-->
      <!--      </b-carousel-slide>-->

    </b-carousel>

    <div>
      <div class="mb-4 p-4 bg-white">
        <b-container>
          <div v-html="$store.state.basic.welcome_text"></div>
        </b-container>
      </div>
      <b-container class="mt-3">
        <h4 class="text-center py-3">Our Services</h4>
        <b-row cols-lg="3" cols-sm="2" cols="1">
          <b-col v-for="(service,index) in services" :key="index" v-if="service.show_front">
            <b-card>
              <div class="d-flex justify-content-center">
                <b-img-lazy :src="service.display_image" :srcset="service.display_image"></b-img-lazy>
              </div>
              <b-card-title class="text-center">
                {{ service.name }}
              </b-card-title>
              <b-card-body>
                {{ service.short_description }}
              </b-card-body>
              <div class="d-flex justify-content-center">
                <b-link :to="`/services/${service.id}`">Read more...</b-link>
              </div>

            </b-card>

          </b-col>

        </b-row>
        <div class="d-flex justify-content-center">
          <nuxt-link class="btn btn-primary" to="/services">More Services</nuxt-link>
        </div>
      </b-container>
      <div class="mt-4 bg-white">
        <b-container>
          <h3 class="py-3 text-center">Our works</h3>
          <b-row cols-md="1">
            <b-col v-for="(portfolio,index) in portfolios" :key="index">
              <b-row cols-md="2" cols="1">
                <b-col class="mb-3">
                  <image-compare :padding="{ left: 50, right: 50 }" :before="portfolio.image_before"
                                 :after="portfolio.image_after"/>
                </b-col>
                <b-col>
                  <h6>{{ portfolio.name }}</h6>
                  <p>{{ portfolio.short_description }}</p>
                  <nuxt-link :to="`/portfolio/${portfolio.id}`">Read more...</nuxt-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <div class="d-flex justify-content-center ">
            <nuxt-link class="btn btn-primary mb-3" to="/portfolio">See more...</nuxt-link>
          </div>
        </b-container>
      </div>
      <b-container class="mt-3">
        <h4 class="text-center py-3">Showcases</h4>
        <b-row cols-lg="2" cols="1">
          <b-col v-for="(showcase,index) in showcases" :key="index" v-if="showcase.show_front">
            <image-compare hover :before="showcase.compare_image_before"
                           :after="showcase.compare_image_after">
            </image-compare>
          </b-col>

        </b-row>
        <div class="d-flex justify-content-center my-3">
          <nuxt-link class="btn btn-primary" to="/shows">See more...</nuxt-link>
        </div>
      </b-container>
    </div>
    <div class="bg-white p-3" v-html="$store.state.basic.footer">

    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      banners: [],
      sliding: null,
      services: [],
      portfolios: [],
      showcases: [],
    }
  },
  async fetch() {
    await this.$axios.get('/api/banner/')
      .then(res => {
        this.banners = res.data
      })
    await this.$axios.get('/api/service/')
      .then(res => {
        this.services = res.data
      })
    await this.$axios.get('/api/portfolio/')
      .then(res => {
        this.portfolios = res.data
      })
    await this.$axios.get('/api/showcase/')
      .then(res => {
        this.showcases = res.data
      })

  },
  methods: {},
}
</script>

