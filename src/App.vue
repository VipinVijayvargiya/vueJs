<template>
  <div id="app">
    <AppHeader assessmentMsg="Lillydoo Assesment" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

import Vuescroll from "vue-scrollto";
Vue.use(Vuescroll);
@Component({
  components: {
    AppHeader,
    AppFooter
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/common.scss";
@import "./assets/styles/views.scss";
@import "./assets/styles/components.scss";
</style>
