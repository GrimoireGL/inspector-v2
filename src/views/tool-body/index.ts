import ToolBody from "./tool-body.vue"
import Vue from "vue";
export default function(query:string):ToolBody{
  return new Vue({
      el: query,
      render: h => h(ToolBody)
  });
}
