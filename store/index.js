export const state = () => ({
  basic: {},
  services: [],
})
export const getters = {
  get_basic(state){
    return state.basic
  },
  get_services(state){
    return state.services
  },
}
export const mutations = {
  set_basic(state,data){
    state.basic = data
  },
  set_services(state,data){
    state.services = data
  },

}
