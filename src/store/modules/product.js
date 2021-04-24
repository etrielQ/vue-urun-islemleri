import Vue from 'vue'
import { router } from '../../router'

const state = {
    products : []
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}

const mutations = {
    updateProductList(state, product){
        state.products.push(product);
    }
}

const actions = {
    initApp({ commit }){
        // Vue Resource İşlemleri
    },
    saveProduct({dispatch, commit, state }, product){
        // Vue Resource İşlemleri
        Vue.http.post("https://vuejs-urun-islemleri-9969d-default-rtdb.firebaseio.com/products.json", product)
        .then((response) => {
            // urun listesinin guncellenmesi
            product.key = response.body.name;
            commit("updateProductList", product)
            let tradeResult = {
                purchase : product.price,
                sale : 0,
                count : product.count,
            }
            dispatch("setTradeResult", tradeResult)
            router.replace("/")
        })
    },
    sellProduct({ commit }, payload){
        // Vue Resource İşlemleri
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}