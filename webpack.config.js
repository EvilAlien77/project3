var ExtractTextPlugin = require("extract-text-webpack-plugin");




module.exports = {
    entry: './main.scss',
    output: {        
        filename: 'bundle.js'
    },
    module: {
        rules: [
        { 
            test: /\.scss$/,
             use: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: 'css-loader!sass-loader'
             }), 
         },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash].[ext]'
                      }
                    }, 
        {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
                        }
                    }
        },
                  ],
        },
        {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name][hash].[ext]'
        }
      },
    }


        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],


}
