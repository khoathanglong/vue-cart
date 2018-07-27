import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    cart,
    products
  },
  state: { //data
    products:[],
    //{id, quantity}
    cart:[],
    checkoutStatus:null,
  },

  mutations: { //update state
    // setProducts(state,products){
    //   state.products=products
    // },
    // pushProductToCart(state,productId){
    //   state.cart.push({id:productId,quantity:1})
    // },
    // incrementItemQuantity(state,cartItem){
    //   cartItem.quantity++
    // },
    // decrementProductInventory(state,product){
    //   product.inventory--
    // },
    // emptyCart(state){
    //   state.cart=[];
    // },
    // checkoutStatus(state,status){
    //   state.checkoutStatus=status
    // }
  },

  getters:{ //computed 
    // availableProducts:(state,getters)=>{
    //   return state.products.filter(product=>product.inventory>0)
    // },
    // getCartItems(state,getters){
    //   return state.cart.map(cartItem=>{
    //     const product = state.products.find(product=>product.id===cartItem.id);
    //     return {
    //       ...product,
    //       quantity:cartItem.quantity
    //     }
    //   })
    // },
    // getCartTotalPrice(state,getters) {
    //   return getters.getCartItems.reduce((total,product)=>total+product.price*product.quantity,0)
    // },
    // productInStock (){
    //   return product =>{
    //     return product.inventory>0
    //   }
    // },
    // checkoutStatus(state){
    //   return state.checkoutStatus
    // }
  },

  actions:{

  } //methods

})
