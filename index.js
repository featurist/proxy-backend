var http = require('http');
var os = require('os');

http.createServer(function (req, res) {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({
    host: os.hostname(),
    url: req.url,
    method: req.method,
    headers: req.headers
  }, null, 2));
}).listen(process.env.PORT || 80);
