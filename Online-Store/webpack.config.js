const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EslingPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const baseConfig = {
  entry: {
    main: path.resolve(__dirname, "./src/scripts/index.ts"),
    slider: path.resolve(__dirname, "./src/scripts/slider.ts"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      { test: /\.ts$/i, use: "ts-loader" },
      /* { 
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:
                        { // Параметр опции option здесь может определить размер изображения, которое должно быть преобразовано в base64
                            name: '[path][name].[ext]',// Указывает, что изображения размером менее 50 КБ преобразуются в base64, а изображения размером более 50 КБ являются путями
                            outputPath: 'online-store/dist/images/src/', // why don't work?
                            limit: false
                        }
                    },
                    {    // Сжатые картинки следует использовать после файлового загрузчика
                        loader: 'image-webpack-loader',
                        options:
                        {
                            bypassOnDebug: true
                        }
                    }

                ]
            } */
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new EslingPlugin({ extensions: "ts" }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === "prod";
  const envConfig = isProductionMode
    ? require("./webpack.prod.config")
    : require("./webpack.dev.config");

  return merge(baseConfig, envConfig);
};
