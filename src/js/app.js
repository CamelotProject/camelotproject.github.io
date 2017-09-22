import 'bootstrap/scss/bootstrap.scss';
import 'highlight.js/styles/dark.css';
import '../css/app.scss';

require('popper.js');
require('bootstrap');

const $ = require('jquery');
const hljs = require('highlight.js/lib/highlight.js');

hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

$(() => {
    $('section>h1').wrap('<div class="page-header" />');
    hljs.initHighlightingOnLoad();
});
