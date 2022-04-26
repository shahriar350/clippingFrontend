<template>
  <b-container>
    <h4 class="text-center py-3">Services</h4>
    <b-row cols-md="3" cols-sm="2" cols="1">
      <b-col v-for="(service,index) in services" :key="index">
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
    <b-row cols="1">
      <b-col>
        <div class="my-4 p-4 bg-white">
          <b-container>
            <div v-html="$store.state.basic.services_page"></div>
          </b-container>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'service',
  head(){
    return {
      title: 'Services',
    }
  },
  data() {
    return {
      services: [],
    }
  },
  async fetch() {
    await this.$axios.get('/api/service/')
      .then(res => {
        this.services = res.data
      })
  },
}
</script>
