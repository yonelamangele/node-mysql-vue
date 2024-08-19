import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
/* eslint-disable */
import { useCookies } from 'vue-cookies'
import router from '@/router';


axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    fruits: null
  }, 
  getters: {
  },
  mutations: {
    setFruits(state,payload) {
      state.fruits = payload
    }
    },
  actions: {
     addUser({commit}, info) {
      let data = axios.post('http://localhost:5003/user', info)
      if(data) {
        toast("Signed In!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
    },
      async loginUser({commit}, info) {
        let {data} = await axios.post('http://localhost:5003/user/login', info)
        console.log(data);
        $cookies.set('token', data.token)
        if(data.message) {
          toast("Logged In!", {
            "theme": "auto",
            "type": "default",
            "position": "top-center",
            "dangerouslyHTMLString": true
          })
          await router.push('/')
          location.reload()
        }
      },
      async getFruits({commit}) {
        let {data} = await axios.get('http://localhost:5003/fruit/')
        console.log(data);
        commit('setFruits', data)
      },
      async addToCart({commit}, fruit_id){
        let {data} = await axios.post('http://localhost:5003/fruit/cart', {id: fruit_id})
        console.log(data);
      }
  },
  modules: {
  }
})
