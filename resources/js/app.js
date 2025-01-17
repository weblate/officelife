require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Sentry from './sentry';

const langs = require('./langs').default;

const el = document.getElementById('app');

langs.loadLanguage('en', true).then((locale) => {

  const app = createApp({
    locale,
    render: () =>
      h(InertiaApp, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: (name) => require(`./Pages/${name}`).default,
        locale: locale.locale,
      }),
    mounted() {
      this.$nextTick(() => {
        Sentry.setContext(this, locale);
      });
    }
  });

  Sentry.init(app, process.env.MIX_SENTRY_RELEASE);

  app.mixin({ methods: _.assign({ route }, require('./methods').default) })
    .use(InertiaPlugin)
    .use(langs.i18n)
    .mount(el);

  InertiaProgress.init({ color: '#4B5563' });

});
