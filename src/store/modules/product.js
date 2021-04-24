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
    saveProduct({ commit }, payload){
        // Vue Resource İşlemleri
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