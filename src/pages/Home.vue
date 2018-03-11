<template>
<div class="grid">
  <div class="grid__cell" :class="{ 'grid__cell_double': item.type === 'double' }" v-for="item in kittens" :key="item.id">
    <app-kitten :data="item"></app-kitten>
  </div>
</div>
</template>

<script>
import Kitten from '../components/Kitten.vue';

export default {
  components: {
    'app-kitten': Kitten,
  },

  computed: {
    kittens() {
      return this.$store.state.kittens.all;
    },
  },

  asyncData({ store }) {
    return store.dispatch('kittens/getAllKittens');
  },

  metaInfo: {
    title: 'Facts',
  },
};
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5px;
}

.grid__cell {
  padding: 5px;
}

@media (min-width: 480px) {
  .grid {
    flex-direction: row;
  }

  .grid__cell {
    width: 50%;
  }

  .grid__cell.grid__cell_double {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .grid__cell {
    width: 33.33%;
  }

  .grid__cell.grid__cell_double {
    width: 66.66%;
  }
}
</style>
