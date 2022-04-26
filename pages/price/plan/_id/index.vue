<template>
<div>
  <b-container v-if="Object.keys(plan).length">
    <div class="my-3">
      <h4 class="text-center">{{plan.title}}</h4>
    </div>
    <image-compare :after="plan.image_after" :before="plan.image_before" />
    <b-card>
      <b-card-body class="ql-editor">
        <div v-html="plan.description"></div>
      </b-card-body>
    </b-card>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'plan_',
  data() {
    return {
      plan: {}
    }
  },
  async fetch(){
    await this.$axios.get(`/api/priceplan/${this.$route.params.id}/`)
      .then(res => {
        this.plan = res.data
      })
  }
}
</script>
