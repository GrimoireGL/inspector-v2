import Header from "./header.vue"
import Vue from "vue";
export default function(query:string):Header{
  return new Vue({
      el: query,
      render: h => h(Header)
  });
}
