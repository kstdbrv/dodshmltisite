import Vue from 'vue';
import VueResource from 'vue-resource';
import VueWait from 'vue-wait';
import Store from './store';
import Plugins from './plugins';
import Search from './components/Search.vue';

Vue.use(VueResource);
Vue.use(VueWait);
Vue.use(Plugins);

new Vue({
  el: '#vue-search',
  render(h) {
    return h(Search);
  },
  store: Store,
  wait: new VueWait({
    useVuex: true,
  }),
});

