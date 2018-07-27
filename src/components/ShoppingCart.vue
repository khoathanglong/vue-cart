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
        <div v-if="totalPrice>=0">Total: ${{totalPrice}}</div>
        <button @click="checkout">
            Check Out
        </button>
        <div v-show="checkoutStatus">{{checkoutStatus}}</div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed:{
            ...mapGetters('cart',{
                CartItems:'getCartItems',
                totalPrice:'getCartTotalPrice',
                checkoutStatus:'checkoutStatus'
            }),


            // CartItems(){
            //     return this.$store.getters.getCartItems
            // },
            // totalPrice(){
            //     return this.$store.getters.getCartTotalPrice
            // },
            // checkoutStatus(){
            //     return this.$store.getters.checkoutStatus
            // }
        },
        methods:{
            ...mapActions('cart',{
                checkout:'checkout'
            })
        }
    }
</script>