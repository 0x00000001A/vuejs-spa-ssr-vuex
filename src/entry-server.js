import { createApp } from './entry';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context);
    const meta = app.$meta();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      Promise.all(
        matchedComponents.map(component => {
          return (
            component.asyncData &&
            component.asyncData({
              store,
              route: router.currentRoute,
            })
          );
        })
      )
        .then(() => {
          context.state = store.state;
          context.meta = meta;
          resolve(app);
        })
        .catch(reject);
    }, reject);
  });
};
