import Vue from 'vue';
import { createApp } from './entry';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const asyncData = this.$options.asyncData;

    if (asyncData) {
      asyncData({ store: this.$store, route: to })
        .then(next)
        .catch(next);
    } else {
      next();
    }
  },
});

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matchedComponents = router.getMatchedComponents(to);
    const prevMatchedComponents = router.getMatchedComponents(from);

    let diffed = false;

    const activated = matchedComponents.filter((component, i) => {
      return diffed || (diffed = prevMatchedComponents[i] !== component);
    });

    if (!activated.length) {
      return next();
    }

    Promise.all(
      activated.map(component => {
        if (component.asyncData) {
          return component.asyncData({ store, route: to });
        }
      })
    )
      .then(() => {
        next();
      })
      .catch(next);
  });

  app.$mount('#app');
});
