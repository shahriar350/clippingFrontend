export default function ({$axios, app}) {

  const csrftoken = app.$cookies.get('csrftoken');
  if (!csrftoken) {
    $axios.get('/api/get/csrf/')
  }
  //
  $axios.onRequest((config) => {
    $axios.setHeader('X-Csrf-Token', csrftoken)
    config.xsrfCookieName = "csrftoken"
    config.xsrfHeaderName = "X-Csrf-Token"
  })
  // $axios.onError(error => {
  //   if(error.response.status === 403) {
  //     $axios.get('/api/auth/user/csrf')
  //   }
  // })

}
