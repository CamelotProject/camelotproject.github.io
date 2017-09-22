const Encore = require('@symfony/webpack-encore');

Encore

    // Build options
    .setOutputPath('template/assets/')
    .setPublicPath('/assets')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())

    // Entries
    .addEntry('camelot', './src/js/app.js')

    // Babel
    .configureBabel(function(babelConfig) {
        babelConfig.plugins.push('syntax-object-rest-spread');
        babelConfig.plugins.push('transform-object-rest-spread');
    })

    // Loaders
    .addLoader({
        test: /\.(js)$/,
        exclude: /node_modules\/(?!(bootstrap)\/).*/,
        loader: 'babel-loader',
        query: {
            presets: ['env']
        }
    })

    // SASS loader
    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: false
    })
    //
    .enablePostCssLoader((options) => {
        options.config = {
            path: 'postcss.config.js'
        };
    })

    // 'cause Bootstrap
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: 'popper.js'
    })
;

const config = Encore.getWebpackConfig();

config.watchOptions = {
    poll: true,
    ignored: /node_modules/
};

module.exports = config;
