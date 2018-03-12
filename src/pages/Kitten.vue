<template>
<div class="app-page-kitten">
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-if="error">
    <p>Something went wrong. Please, check your internet connection and try again</p>
  </div>
  <div v-if="!kittenFound">
    <p>There is no such kitten</p>
  </div>
  <article v-if="kittenFound" class="article">
    <div class="article__image"></div>
    <div class="article__content">
      <h1 class="article__title">{{ kitten.title }}</h1>
      <p class="article__text">{{ kitten.text }}</p>
    </div>
  </article>
</div>
</template>

<script>
export default {
  props: ['id'],

  computed: {
    kittenFound() {
      return !this.loading && !this.error && this.kitten
    },
    kitten() {
      return this.$store.state.kittens.selected;
    },
    loading() {
      return this.$store.state.kittens.loading;
    },
    error() {
      return this.$store.state.kittens.error;
    }
  },

  asyncData({ store, route }) {
    return store.dispatch('kittens/getKitten', Number(route.params.id))
  },

  metaInfo: {
    title: 'Kitten details',
  },
};
</script>

<style>
.article {
  padding: 10px;
}

.article__content {
  padding: 10px 0;
}

.article__image {
  height: 30vh;
  background-color: #ddd;
  background-image: url('https://mymodernmet.com/wp/wp-content/uploads/archive/vtgbB7FijY0WkAOuiq2C_1082105548.jpeg');
  background-size: cover;
  background-position: center;
}
</style>
