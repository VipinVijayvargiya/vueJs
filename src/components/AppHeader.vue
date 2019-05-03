<template>
  <div class="header-container">
    <div class="app-header">{{ assessmentMsg }}</div>
    <nav class="app-menu">
      <div class="logo-wrapper">
        <i class="icon-logo"></i>
        <div class="Menu-items">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuescroll from "vue-scrollto";
Vue.use(Vuescroll);
@Component({
	name: "AppHeader",
    props: {
    	assessmentMsg: String
    }
})
export default class AppHeader extends Vue {}
</script>

<style scoped lang="scss">
@import "../styles/components/AppHeader.scss";
</style>
