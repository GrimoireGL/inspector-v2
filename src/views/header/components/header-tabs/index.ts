import HeaderTabs from "./header-tabs.vue"
import Vue from "vue";
export default function(query:string):HeaderTabs{
  return new Vue({
      el: query,
      render: h => h(HeaderTabs)
  });
}
