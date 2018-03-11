<template>
<div id="app" class="app-layout">
  <noscript>
    Please, enable JavaScript in your browser
  </noscript>

  <header>
    <app-navbar></app-navbar>
  </header>

  <main>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    'app-navbar': Navbar,
  },

  metaInfo: {
    title: 'Kittens',
    titleTemplate: '%s | Kittens',
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
