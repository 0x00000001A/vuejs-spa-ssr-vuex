<template>
<article class="article">
  <div class="article__image"></div>
  <div class="article__content">
    <h1 class="article__title">{{ kitten.title }}</h1>
    <p class="article__text">{{ kitten.text }}</p>
  </div>
</article>
</template>

<script>
export default {
  props: ['id'],

  computed: {
    kitten() {
      return this.$store.state.kittens.selected;
    },
  },

  asyncData({ store, route }) {
    return store.dispatch('kittens/getKitten', Number(route.params.id));
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
