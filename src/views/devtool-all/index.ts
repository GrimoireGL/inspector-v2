import DevtoolAll from "./devtool-all.vue"
import Vue from "vue";
export default function(query:string):DevtoolAll{
  return new Vue({
      el: query,
      render: h => h(DevtoolAll)
  });
}
