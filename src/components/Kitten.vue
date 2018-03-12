<template>
<router-link tag="article" class="kitten" :to="{ name: 'kitten', params: { id: data.id } }">
  <div class="kitten__background">
    <div class="kitten__row">
      <h1 class="kitten__title">{{ data.title }}</h1>
    </div>
    <div class="kitten__row">
      <p class="kitten__description">{{ data.description }}</p>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style>
.kitten {
  cursor: pointer;
  overflow: hidden;
}

.kitten__background {
  height: 200px;
  padding: 25px;
  background-color: #ddd;
  background-image: url('https://mymodernmet.com/wp/wp-content/uploads/archive/vtgbB7FijY0WkAOuiq2C_1082105548.jpeg');
  background-size: cover;
  background-position: center;
  transition: all 0.25s ease-in-out;
}

.kitten__background:hover {
  transform: scale(1.02);
}

.kitten__title {
  font-size: 20px;
}

.kitten__description {
  font-size: 14px;
}

.kitten__title,
.kitten__description {
  margin: 0;
  padding: 2px 5px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.5);
}

.kitten__row {
  margin-bottom: 10px;
}

.kitten__row:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 480px) {
  .kitten__title {
    font-size: 22px;
  }

  .kitten__description {
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .kitten__title {
    font-size: 24px;
  }

  .kitten__description {
    font-size: 16px;
  }
}
</style>
