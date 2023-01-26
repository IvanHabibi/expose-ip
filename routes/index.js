var express = require('express');
var router = express.Router();
var requestIp = require('request-ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  var headers = JSON.stringify(req.headers)
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  var ip2 = req.headers['X-Client-IP'] || req.socket.remoteAddress 
  var clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
  res.render('index', { title: 'Express', ip,ip2,clientIp,headers });
});


router.get('/dashboard/order/:id/refund', function(req, res, next) {
  res.send("idnya "+req.params.id)
});

router.get('/test', function(req, res, next) {
  res.send("ok")
});


router.get('/test2/sub', function(req, res, next) {
  var headers = JSON.stringify(req.headers)
  res.send("ok with sub "+ headers)
});

router.get('/test2', function(req, res, next) {
  res.send("ok2")
});

router.get('/test3', function(req, res, next) {
  res.send("ok3")
});

module.exports = router;
