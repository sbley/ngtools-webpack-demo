import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { AngularWebpackPlugin } from '@ngtools/webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: '@ngtools/webpack',
      },
	  {
        test: /\.(sa|sc|c)ss$/,
        use: [
          //devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
		  'to-string-loader',
          {
		    loader: 'css-loader', 
			options: { esModule: false }
		  },
          //'postcss-loader',
          'sass-loader',
        ],
      },
      /*{
        test: /\.(png|jpg|gif)$/i,
		include: [
          path.resolve(__dirname, 'src/assets')
        ],
        type: 'asset/resource'
      }*/
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // create index.html and wire bundle.js
    new HtmlWebpackPlugin({
		title: 'ngtools-webpack-demo'
	}),
	// copy static assets to dist folder
    new CopyWebpackPlugin({
      patterns: [ 
	    { from: 'src/assets', to: 'assets'}
	  ]
    }), 
	// compile Angular code
	new AngularWebpackPlugin({
      tsconfig: './tsconfig.json',
    }),
  ],
};
