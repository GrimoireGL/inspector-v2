import RootSelector from "./root-selector.vue"
import Vue from "vue";
export default function(query:string):RootSelector{
  return new Vue({
      el: query,
      render: h => h(RootSelector)
  });
}
