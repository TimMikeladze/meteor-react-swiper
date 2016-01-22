Package.describe({
  name: 'poetic:react-swiper',
  version: '3.2.8',
  summary: 'React-swipe npm package exposed on meteor client',
  git: 'https://github.com/poetic/meteor-react-swiper/'
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'react@0.1.14',
    'jquery@1.11.4',
    'nolimits4web:swiper@3.2.6'
  ]);

  api.add_files([
    'swiper.jsx'
  ],'client');

  api.export('SwiperComponent');
});
