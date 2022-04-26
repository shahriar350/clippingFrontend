<template>
  <div>
    <b-container>
      <b-card>
        <b-card-title>
          <h4 class="text-center">Place a order</h4>
        </b-card-title>
        <b-card-body>
          <b-form @submit.prevent="ordernow">
            <b-form-group
              label="Name:"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Email:"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Contact number:"
              label-for="contact_number"
            >
              <b-form-input
                id="contact_number"
                v-model="form.contact_number"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Message:"
              label-for="message"
            >
              <b-form-input
                id="message"
                v-model="form.message"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Company name:"
              label-for="company_name"
            >
              <b-form-input
                id="company_name"
                v-model="form.company_name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Website address:"
              label-for="website_address"
            >
              <b-form-input
                id="website_address"
                v-model="form.website_address"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Select job:" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                id="checkbox-group-2"
                v-model="form.job_type"
                :aria-describedby="ariaDescribedby"
                name="flavour-2" :multiple="true"
              >
                <b-form-checkbox v-for="(job,index) in job_types" :key="index" :value="job.id">{{
                    job.name
                  }}
                </b-form-checkbox>

              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="Your images:"
              label-for="images"
            >
              <b-form-file v-model="get_client_images"></b-form-file>
              <b-progress show-value class="mt-1" v-if="progress > 0" :value="progress" max="100"></b-progress>
<!--              <b-form-file multiple v-model="get_client_images" id="images"></b-form-file>-->
            </b-form-group>
            <b-btn type="submit" block>Send Order</b-btn>
          </b-form>
        </b-card-body>

      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'free_trial',
  components: {

  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        contact_number: '',
        message: '',
        company_name: '',
        website_address: '',
        job_type: [],
      },
      files: [],
      progress: 0,
      get_client_images: null,
      job_types: [],
    }
  },
  async fetch() {
    await this.$axios.get('/api/jobtype/')
      .then(res => {
        this.job_types = res.data
      })
  },
  methods: {
    ordernow() {
      this.$axios.post("/api/clientuser/",this.form)
        .then(res => {
          const data = res.data
          this.progress = 0
          let formdata = new FormData()
          formdata.set("client",data.id)
          formdata.set("image",this.get_client_images)
          this.$axios.post('/api/clientimage/',formdata,{
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function( progressEvent ) {
              this.progress = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
            }.bind(this)
          })


          this.$bvToast.toast("Send request successfully", {
            title: 'Sending order',
            autoHideDelay: 5000,
          })
        })

    }
  },
}
</script>
