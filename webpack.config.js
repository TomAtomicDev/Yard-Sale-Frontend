const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin');




module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true,
        publicPath: './',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@icons': path.resolve( __dirname, 'src/assets/icons/'),
            '@logos': path.resolve( __dirname, 'src/assets/logos/'),
            '@context': path.resolve( __dirname, 'src/context'),
            '@hooks': path.resolve( __dirname, 'src/hooks'),
        },
        
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                       loader: 'html-loader' 
                    }
                ]
            },
            {
                test: /\.(css|scss)$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash]-[name][ext][query]'
                }
                  
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssPlugin ({
            filename:'[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
}