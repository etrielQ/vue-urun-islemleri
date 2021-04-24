<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
export default {
  name: 'app',
  components: {
    appHeader : Header,
    appFooter : Footer,
  },
  data () {
    return {
    }
  },
  created(){
     this.$store.dispatch("getTradeResult")
  }
}
</script>

<style>
body{
  background: #a7a8bb5c;
}
.fade-enter{
opacity: 0;
}
.fade-enter-active{
  opacity: 1;
transition: .3s ease-out;
}
.fade-leave{

}
.fade-leave-active{
  opacity: 0;
  transition: .3s ease-out;
}
</style>
