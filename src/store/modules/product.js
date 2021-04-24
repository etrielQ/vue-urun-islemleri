import Vue from 'vue'

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
    saveProduct({ commit, state }, product){
        // Vue Resource İşlemleri
        Vue.http.post("https://vuejs-urun-islemleri-9969d-default-rtdb.firebaseio.com/products.json", product)
        .then((response) => {
            product.key = response.body.name;
            commit("updateProductList", product)
            console.log(state.products)
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