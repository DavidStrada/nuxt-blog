import Vue from 'vue'
import pluralize from 'pluralize'

const Pluralize = {
  install(Vue) {
    Vue.mixin({
      methods: {
        pluralize
      }
    })
  }
}

Vue.use(Pluralize)
