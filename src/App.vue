/* eslint-disable */ 
<template>
  <div id="app">
    <!-- <router-view/> -->
    <ProductList/>
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart"
import store from "@/store/store"
export default {
  name: 'App',
  components:{
    ProductList,
    ShoppingCart
  },
  store,
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
