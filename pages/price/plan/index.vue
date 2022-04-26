<template>
  <b-container>
    <h4 class="py-3 text-center">Price plan</h4>
    <b-row  v-for="(plan,index) in plans" :key="index" class="mb-3 shadow rounded bg-white">

      <b-col md="2" sm="3" cols="12">
        <b-img :src="plan.icon" />
      </b-col>
      <b-col md="6" sm="6" cols="12" class="pt-md-4 pt-sm-3 pt-2">
        <router-link :to="`/price/plan/${plan.id}`">
          <h6>{{plan.title}}</h6>
          <div class="mt-1">
            {{plan.short_description}}
          </div>
        </router-link>

      </b-col>
      <b-col md="2" sm="3" cols="12" class="pt-md-4 pt-sm-3 pt-2">
        <p class="text-right">{{plan.price}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'price_plan',
  data() {
    return {
      plans: []
    }
  },
  async fetch() {
    await this.$axios.get('/api/priceplan/')
      .then(res => {
        this.plans = res.data
      })
  }
}
</script>
