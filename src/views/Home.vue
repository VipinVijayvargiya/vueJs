<template>
  <div class="home-container">
  	<div class="button-area row">
  		<img alt="Vue logo" class="button-area-background hidden-sm-down" src="../assets/lillydoo-testpaket-header-large.jpg" />
      <img alt="Vue logo" class="button-area-background hidden-sm-up" src="../assets/lillydoo-testpaket-header-medium.jpg" />
  		<div class="button-wrapper">
  			<div>
  				<h1>Entdecke unsere Hautfreundlichkeit</h1>
  				<button v-scroll-to="'#sampleProducts'">JETZT DEINE GRÖSSE WÄHLEN</button>
  			</div>
  			
  		</div>
  	</div>
  	
    <AppContainer msg="Welcome to Lillydoo website" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppContainer from "@/components/AppContainer.vue"; // @ is an alias to /src
import Vuescroll from "vue-scrollto";
Vue.use(Vuescroll);
@Component({
  components: {
    AppContainer
  }
})
export default class Home extends Vue {}
</script>
