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
                {{product.title}} - ${{product.price}} - {{product.inventory}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        data(){
            return {
                loading:false
            }
        },
        methods:{
            ...mapActions('cart',{
                addProductToCart:"addProductToCart",
            }),
            ...mapActions('products',{
                fetchProducts:"fetchProducts"
            })
        },
        computed: {
            ...mapGetters('products',{
                productInStock:'productInStock'
            }),
            ...mapState({
                products:state=>state.products.items
            })
        },
        created(){ //run right after the instance is created (life-cycle)
           this.loading=true;
           this.fetchProducts()
           .then(()=>{this.loading=false})
        }
    }
</script>   

<style scoped>

</style>
