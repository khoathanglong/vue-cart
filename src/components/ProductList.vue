/* eslint-disable */ 

<template>
    <div>
        <h1>Products</h1>
        <div v-if="loading">
            loading...
        </div>
        <ul v-else>
            <li 
                v-for="product in products" 
                v-bind:key="product.id"
            >
                <button 
                    @click="addProductToCart(product)"
                    :disabled="!productInStock(product)"
                >
                    Add to Cart
                </button>
                {{product.title}} - {{product.price}} - {{product.inventory}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                loading:false
            }
        },
        methods:{
            addProductToCart(product){
                this.$store.dispatch('addProductToCart',product)
            }
        },
        computed: {
            products(){
                return this.$store.state.products
            },
            productInStock(){
                return this.$store.getters.productInStock
            }
        },
        created(){ //run right after the instance is created (life-cycle)
           this.loading=true;
           this.$store.dispatch('fetchProducts')
           .then(()=>{this.loading=false})
        }
    }
</script>   

<style scoped>

</style>
