var renderFootnotes = require('./src/footnotes');
    util = require('hexo-util');

// Register footnotes filter
hexo.extend.filter.register('before_post_render', function(data) {
  data.content = renderFootnotes(data.content);
  return data;
});

// Add CDN CSS resources
hexo.extend.filter.register('after_post_render', function(data) {
  data.content =
      util.htmlTag('link', {rel: 'stylesheet', type: 'text/css', href: '/assets/theme/reference/hint.min.css'}) +
      data.content;
  return data;
});
