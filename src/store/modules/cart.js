import shop from '@/api/shop'

export default {
    namespaced:true,
    state:{
        checkoutStatus:null,
        items:[],
    },

    mutations:{
        pushProductToCart(state,productId){
            state.items.push({id:productId,quantity:1})
        },
        incrementItemQuantity(_,cartItem){
            cartItem.quantity++
        },
        emptyCart(state){
            state.items=[];
        },
        checkoutStatus(state,status){
            state.checkoutStatus=status
        }
    },

    actions:{
        addProductToCart({commit,state,getters,rootGetters},product){
            if (rootGetters['products/productInStock'](product) > 0){
              const cartItem = state.items.find(item =>item.id===product.id);
              if(!cartItem){
                commit('pushProductToCart',product.id)
              }else{
                commit('incrementItemQuantity',cartItem)
              }
            };
            commit('products/decrementProductInventory',product,{root:true})
        },
        checkout({commit,state}){
            shop.buyProducts(
              state.items,
              ()=>{
                commit('emptyCart');
                commit('checkoutStatus',"success")
              },
              ()=>{
                commit('checkoutStatus',"fail")
              }
            )
        }
    },

    getters:{
        getCartTotalPrice(state,getters) {
            return getters.getCartItems.reduce((total,product)=>total+product.price*product.quantity,0)
        },
        checkoutStatus(state){
            return state.checkoutStatus
        },
        getCartItems(state,_,rootState){
            return state.items.map(cartItem=>{
                const product = rootState.products.items.find(product=>product.id===cartItem.id);
                return {
                ...product,
                quantity:cartItem.quantity
                }
            })
        },
    },
}