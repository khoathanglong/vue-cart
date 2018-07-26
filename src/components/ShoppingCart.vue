<template>
    <div>
        <h1>My Cart</h1>
        <ul>
            <li
                v-for="CartItem in CartItems"
                :key="CartItem.id" 
            >
                {{CartItem.title}} - ${{CartItem.price}} - {{CartItem.quantity}}
            </li>
        </ul>
        <div v-if="totalPrice>0">Total: {{totalPrice}}</div>
    </div>
</template>

<script>
    export default {
        computed:{
            CartItems(){
                return this.$store.getters.getCartItems
            },
            totalPrice(){
                return this.$store.getters.getCartTotalPrice
            }
        },
    }
</script>