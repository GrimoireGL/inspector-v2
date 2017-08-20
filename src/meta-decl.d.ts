declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module "vue-color"{
  import Vue from 'vue';
  export var Chrome:typeof Vue;
}