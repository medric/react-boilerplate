import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(__dirname + '../dist'));

app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

let server = app.listen(process.env.PORT || 3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Server listening at http://${host}:${port}`);
});

/*function nocache(req, res, next) {
 res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
 res.header('Expires', '-1');
 res.header('Pragma', 'no-cache');
 next();
 }*/
