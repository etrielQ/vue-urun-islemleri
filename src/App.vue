<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
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
  }
}
</script>

<style>

</style>
