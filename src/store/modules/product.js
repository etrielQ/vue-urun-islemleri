import Vue from 'vue'
import { router } from '../../router'
import firebase from "../../firebaseInit";
import 'firebase/firestore';

const db = firebase.firestore();

const state = {
    products : []
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){
        return key => state.products.filter(element =>{
            return element.key == key;
        })
    }
}

const mutations = {
    updateProductList(state, product){
        state.products.push(product);
    }
}

const actions = {
    initApp({ commit }){
        db.collection("products")
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log('aaaa')
            console.log(doc.data());
            //    data[key].key = key;pons
            // commit('updateProductList', data[key])
          });
     
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
       
    },
    saveProduct({dispatch, commit, state }, product){
        // Vue Resource İşlemleri
        // Vue.http.post("https://vuejs-urun-islemleri-9969d-default-rtdb.firebaseio.com/products.json", product)
        // .then((response) => {
        //     // urun listesinin guncellenmesi
        //     product.key = response.body.name;
        //     commit("updateProductList", product)
        //     let tradeResult = {
        //         purchase : product.price,
        //         sale : 0,
        //         count : product.count,
        //     }
        //     dispatch("setTradeResult", tradeResult)
        //     router.replace("/")
        // })
    },
    sellProduct({ state, commit, dispatch }, payload){
        // Vue Resource İşlemleri

        let product = state.products.filter(element =>{
            return element.key == payload.key;
        });
        if(product){
         let totalCount = product[0].count - payload.count;
        //  Vue.http.patch("https://vuejs-urun-islemleri-9969d-default-rtdb.firebaseio.com/products/" + payload.key + '.json', {count : totalCount})
        //  .then(response => {
        //      product[0].count = totalCount;
        //      let tradeResult = {
        //         purchase : 0,
        //         sale : product[0].price,
        //         count : payload.count,
        //     }
        //     dispatch("setTradeResult", tradeResult)
        //     router.replace("/")
        //  })
        }

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}