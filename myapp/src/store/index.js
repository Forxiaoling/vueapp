import { createStore } from 'vuex'

export default createStore({
  state: {
    photoList:[]
  },
  getters: {
  },
  mutations: {
    setPhotoList(state,list){
      state.photoList = list
    }
  },
  actions: {
  },
  modules: {
  }
})
