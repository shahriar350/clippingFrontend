<template>
  <div>
    <div>
      <b-navbar toggleable="md" style="background:white;">
        <b-container>
          <b-navbar-brand to="/">
            <b-img-lazy :src="basic.website_logo" :srcset="basic.website_logo"></b-img-lazy>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item :active="$route.path === url.to" v-for="(url,index) in url_links" :key="index" :to="url.to">
                {{ url.title }}
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <div style="background:#F3F3F3;">
      <Nuxt/>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  data() {
    return {
      url_links: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About us',
          to: '/about'
        },
        {
          title: 'Contact us',
          to: '/contact'
        },
        {
          title: 'Services',
          to: '/services'
        },
        {
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          title: 'Price plan',
          to: '/price/plan'
        },{
          title: 'Order',
          to: '/free_trial'
        },

      ],
    }
  },
  computed: {
    ...mapGetters({
      'basic': 'get_basic'
    })
  },
  async fetch() {
    await this.$axios.get('/api/basic/')
      .then(res => {
        this.$store.commit('set_basic', res.data[0])
      })
  },
}
</script>
<style scoped>
.navbar-brand {
  width: 100px;
  font-size: 20px;
}

.navbar-brand img {
  height: 40px;
  /* put value of image height as your need */
  float: left;
  margin-right: 7px;
}

body {
  background: #F3F3F3 !important;
}
</style>
