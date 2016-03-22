import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
    let host = server.address().address,
    	port = server.address().port;

    console.log(`Server listening at http://${host}:${port}`);
});

/*function nocache(req, res, next) {
 res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
 res.header('Expires', '-1');
 res.header('Pragma', 'no-cache');
 next();
 }*/
