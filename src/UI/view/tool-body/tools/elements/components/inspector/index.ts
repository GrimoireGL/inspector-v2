import Vue from 'vue'
import Inspector from './Inspector.vue'

export default function(query: string): Inspector {
  return new Vue({
      el: query,
      render: h => h(Inspector)
  });
}
