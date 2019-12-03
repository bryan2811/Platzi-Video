const path = require('path'); // Requerir Path (Modulo de Node)
const HtmlWebPackPlugin = require('html-webpack-plugin'); // Requerir html-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { // Modulo a exportar
  entry: './src/index.js', // Entrada (Referencia al archivo principal)
  output: { // Salida (Donde vamos a guardar nuestros archivos resultantes luego de la compilación)
    path: path.resolve(__dirname, 'dist'), // Directorio en el que nos encontramos, Directorio donde guardaremos nuestros archivos
    filename: 'bundle.js', // Nombre de nuestro archivo principal
    publicPath: '/',
  },
  resolve: { // Resolver las extensiones que vamos a utilizar para nuestro proyecto
    extensions: ['.js', '.jsx'], // Extensiones
  },
  module: { // Módulo con las reglas necesarias para nuestro proyecto
    rules: [ // Reglas
      { // Regla principal: Identificación de nuestros archivos .js, .jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Exclusión
        use: { // Loader: Babel
          loader: 'babel-loader',
        },
      },
      { // Regla para trabajar con los archivos HTML
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      { // Regla para trabajar con los archivos CSS
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',

        ],
      },
      { // Regla para tratar archivos multimedia
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [ // Plugins que necesitamos
    new HtmlWebPackPlugin({ // Referencia al HtmlWebPackPlugin
      template: './public/index.html', // Donde está ubicado el template que tenemos
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css', // Como voy a llamar al archivo resultante
    }),
  ],
};
