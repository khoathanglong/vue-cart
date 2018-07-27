import shop from '@/api/shop'

export default {
    namespaced:true,
    state:{
        items:[]
    },

    mutations:{
        setProducts(state,products){
            state.items=products
        },
        decrementProductInventory(state,product){
            product.inventory--
        },
    },

    actions:{
        fetchProducts({commit}){
            return new Promise ((resolve, reject)=>{
              shop.getProducts(products =>{
                commit("setProducts", products);
                resolve();
              });
            })
        },
        
    },

    getters:{
        availableProducts:(state,getters)=>{
            return state.items.filter(product=>product.inventory>0)
        },
        productInStock (){
            return item =>{
            return item.inventory>0
            }
        },
    },

}