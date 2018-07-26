import Vue from 'vue'
import Vuex from 'vuex'
import shop from './api/shop'
import { totalmem } from 'os';

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    products:[],
    //{id, quantity}
    cart:[],
  },

  mutations: { //update state
    setProducts(state,products){
      state.products=products
    },
    pushProductToCart(state,productId){
      state.cart.push({id:productId,quantity:1})
    },
    incrementItemQuantity(state,cartItem){
      cartItem.quantity++
    },
    decrementProductInventory(state,product){
      product.inventory--
    },
    emptyCart(state){
      state.cart=[];
    }
  },

  getters:{ //computed 
    availableProducts:(state,getters)=>{
      return state.products.filter(product=>product.inventory>0)
    },
    getCartItems(state,getters){
      return state.cart.map(cartItem=>{
        const product = state.products.find(product=>product.id===cartItem.id);
        return {
          ...product,
          quantity:cartItem.quantity
        }
      })
    },
    getCartTotalPrice(state,getters) {
      return getters.getCartItems.reduce((total,product)=>total+product.price*product.quantity,0)
    },
    productInStock (){
      return product =>{
        return product.inventory>0
      }
    }
  },

  actions: { //methods
    fetchProducts({commit}){
      return new Promise ((resolve, reject)=>{
        shop.getProducts(products =>{
          commit("setProducts", products);
          resolve();
        });
      })
    },
    addProductToCart({commit,state,getters},product){
      if (getters.productInStock(product) > 0){
        const cartItem = state.cart.find(item =>item.id===product.id);
        if(!cartItem){
          commit('pushProductToCart',product.id)
        }else{
          commit('incrementItemQuantity',cartItem)
        }
      };
      commit('decrementProductInventory',product)
    },
    checkout({commit}){
      commit('emptyCart')
    }
  }
})
