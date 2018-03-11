<template>
<nav class="menu">
  <router-link :to="{ name: 'home' }" class="menu__item" exact>Home</router-link>
  <router-link :to="{ name: 'about' }" class="menu__item">About</router-link>
  <router-link :to="{ name: 'whatever' }" class="menu__item">Whatever</router-link>
</nav>
</template>

<script>
export default {};
</script>

<style>
.menu {
  display: block;
  background: #333;
  font-size: 0;
}

.menu__item {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
  line-height: 36px;
  display: inline-block;
  transition: color 0.25s ease-in-out;
}

.menu__item:focus,
.menu__item:hover {
  color: #a7a7a7;
}

.menu__item:active {
  background: transparent;
}

.menu__item_active {
  cursor: default;
  text-decoration: underline;
}

.menu__item_active:focus,
.menu__item_active:hover {
  color: #fff;
}
</style>
