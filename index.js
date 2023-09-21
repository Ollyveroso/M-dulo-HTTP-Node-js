var http = require('http');
var dt = require('./myfirstmodule.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("uau:" + dt.myDateTime());
  res.end();
}).listen(5011);

exports.myDateTime = function () {
  return "uau";
};
