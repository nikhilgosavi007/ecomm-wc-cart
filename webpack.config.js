const HtmlWekpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            shared: ['faker'],
            /**some modules like React cannot be loaded multiple times, therefore singleton modules
             * this will load only one copy 
            shared: {
                faker: {
                    singleton: true
                }
            },
            // singleton modules end */
        }), 
       new HtmlWekpackPlugin({
           template: './public/index.html'
       })
    ]
}