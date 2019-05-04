<template>
  <div id="sampleProducts" class="product-container row">
    <div class="col-md-6 col-xs-12 demo-container">
      <img src="../assets/images/oekotex_de.png?" alt="Oeko-Tex Certificate" class="certificate"/>
      <img alt="Vue logo" class="display-image" :src="getImgUrl()" />
    </div>
    <div class="col-md-1 col-xs-12"></div>
    <div class="col-md-5 col-xs-12 text-align-initial">
      <div>
        <h3>Unser gratis Testpaket</h3>
      <p>WÄHLE DEINE GRÖSSE</p>
      <ul>
        <li
          v-for="product in products"
          class="select-product"
          v-bind:key="product.id"
          v-bind:class="getClass(product.id)"
          @click="handleClick(product.id)">
            <div>{{ product.id }}</div>
            <span>{{product.size}}</span>
        </li>
      </ul>
      <p>Teste jetzt unsere Windeln und Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.</p>
      <ul class="transaction">
        <li class="primary-color">
          Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.
        </li>
        <li>
          <span>Preise inkl. MwSt., ggf. zzgl.</span>
          <a href="https://www.lillydoo.com/" target="_blank">Versandkosten</a>
        </li>
      </ul>
      <button>In den Warenkorb legen</button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppContainer extends Vue {
  @Prop() private msg!: string;
  products: object = [
    { id: "1", size: "2-3 KG" },
    { id: "2", size: "3-4 KG" },
    { id: "3", size: "4-7 KG" },
    { id: "4", size: "7-10 KG" },
    { id: "5", size: "10-12 KG" }
  ];
  url: String = "1";
  handleClick (url: String): void {
    this.url = url;
  };
  getImgUrl (): void {
    return require("../assets/images/lillydoo-testpaket-" + this.url + ".jpg");
  };
  getClass(id: String){
      return this.url === id ? 'select-product--active' : 'select-product';
  }
}
</script>
