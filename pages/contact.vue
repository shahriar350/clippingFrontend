<template>
  <b-container class="">
    <h4 class="py-3 text-center"> Contact us</h4>
    <b-row cols-md="2" cols="1" class="bg-white pb-3">
      <b-col>
        <h4 class="py-3 border-bottom">Leave your message</h4>
        <b-form @submit.prevent="sendMessage">
          <b-form-group label="Your name:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Your email:" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Message subject:" label-for="subject">
            <b-form-input
              id="subject"
              v-model="form.subject"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Write your message here:" label-for="message">
            <b-form-textarea required v-model="form.message" id="message"
            ></b-form-textarea>
          </b-form-group>
          <b-btn block type="submit">Send message</b-btn>
        </b-form>
      </b-col>
      <b-col>
        <div class="p-4">
          <div v-html="$store.state.basic.contact_info"></div>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>
<script>
export default {
  name: 'contact',
  head() {
    return {
      title: 'Contact us',
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },
  methods: {
    sendMessage() {
      this.$axios.post('/api/contactus/', this.form)
        .then(res => {
          this.$bvToast.show("successfully submitted.")
        })
    }
  },
}
</script>
